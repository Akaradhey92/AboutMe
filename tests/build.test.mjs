import assert from 'node:assert/strict';
import { readFile, readdir, stat } from 'node:fs/promises';
import path from 'node:path';
import test from 'node:test';
import { siteConfig } from '../src/data/siteConfig.ts';
import { projects, publishedProjects } from '../src/data/projects.ts';

const dist = path.resolve('dist');
const origin = new URL(process.env.SITE || siteConfig.meta.siteUrl).origin;
const base = (process.env.BASE_PATH || '').replace(/\/$/, '');

async function htmlFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const nested = await Promise.all(entries.map((entry) => {
    const filename = path.join(directory, entry.name);
    return entry.isDirectory() ? htmlFiles(filename) : entry.name.endsWith('.html') ? [filename] : [];
  }));
  return nested.flat();
}

test('each generated page has its own production canonical and absolute PNG preview', async () => {
  const files = await htmlFiles(dist);
  assert.equal(files.length, 2 + publishedProjects.length);
  // Drafts must stay out of the generated site as well as the homepage.
  for (const project of projects.filter((item) => !item.published)) {
    assert.ok(!files.some((filename) => filename.includes(`${path.sep}${project.slug}${path.sep}`)));
  }
  for (const filename of files) {
    const html = await readFile(filename, 'utf8');
    const route = '/' + path.relative(dist, filename).replaceAll(path.sep, '/').replace(/index\.html$/, '');
    const expected = `${origin}${base}${route}`;
    assert.equal(html.match(/<link rel="canonical" href="([^"]+)"/)?.[1], expected, filename);
    for (const property of ['og:url', 'twitter:url']) {
      assert.equal(html.match(new RegExp(`<meta property="${property}" content="([^"]+)"`))?.[1], expected);
    }
    for (const property of ['og:image', 'twitter:image']) {
      assert.equal(html.match(new RegExp(`<meta property="${property}" content="([^"]+)"`))?.[1], `${origin}${base}/images/og-card.png`);
    }
  }
  const png = await readFile(path.join(dist, 'images/og-card.png'));
  assert.equal(png.subarray(1, 4).toString(), 'PNG');
  assert.equal(png.readUInt32BE(16), 1200);
  assert.equal(png.readUInt32BE(20), 630);
});

test('local links, scripts, and styles resolve within the deployment base', async () => {
  for (const filename of await htmlFiles(dist)) {
    const html = await readFile(filename, 'utf8');
    for (const [, reference] of html.matchAll(/(?:href|src)="([^"]+)"/g)) {
      if (!reference.startsWith('/')) continue;
      assert.ok(reference.startsWith(`${base}/`), `Missing base: ${reference}`);
      const relative = decodeURIComponent(reference.slice(base.length).split(/[?#]/)[0]);
      let target = path.join(dist, relative);
      if ((await stat(target)).isDirectory()) target = path.join(target, 'index.html');
      assert.ok((await stat(target)).isFile(), reference);
    }
  }
});
