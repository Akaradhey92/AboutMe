import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';
import vm from 'node:vm';
import ts from 'typescript';

const source = await readFile(new URL('../src/components/Contact.astro', import.meta.url), 'utf8');
const script = ts.transpile(source.match(/<script>([\s\S]*?)<\/script>/)[1], { target: ts.ScriptTarget.ES2022 });

async function clickCopy(writeText) {
  const icon = () => ({ classList: { add() {}, remove() {} } });
  const status = { textContent: '' };
  let click;
  const button = {
    getAttribute: () => 'test@example.com',
    querySelector: icon,
    addEventListener: (_, handler) => { click = handler; },
  };
  vm.runInNewContext(script, {
    document: { getElementById: (id) => id === 'copy-status' ? status : button },
    navigator: { clipboard: { writeText } },
    setTimeout: () => 1,
    clearTimeout() {},
  });
  await click();
  return status.textContent;
}

test('copy confirms success only after the clipboard write succeeds', async () => {
  let copied;
  const status = await clickCopy(async (text) => { copied = text; });
  assert.equal(copied, 'test@example.com');
  assert.equal(status, 'Email copied to clipboard!');
});

test('a denied clipboard write offers manual recovery without claiming success', async () => {
  const status = await clickCopy(async () => { throw new Error('Permission denied'); });
  assert.match(status, /Unable to copy automatically/);
  assert.match(status, /test@example.com/);
  assert.doesNotMatch(status, /Email copied/);
});
