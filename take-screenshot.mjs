import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import puppeteer from 'puppeteer-core';

const PORT = 4321;
const DIST_DIR = path.resolve('./dist');

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.pdf': 'application/pdf',
  '.json': 'application/json',
  '.woff2': 'font/woff2',
};

// Start a lightweight static server
const server = http.createServer((req, res) => {
  let reqPath = decodeURI(req.url.split('?')[0]);
  let filePath = path.join(DIST_DIR, reqPath);

  if (fs.existsSync(filePath) && fs.statSync(filePath).isDirectory()) {
    filePath = path.join(filePath, 'index.html');
  }

  if (!fs.existsSync(filePath)) {
    filePath = path.join(DIST_DIR, '404.html');
  }

  if (fs.existsSync(filePath)) {
    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';
    res.writeHead(200, { 'Content-Type': contentType });
    fs.createReadStream(filePath).pipe(res);
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

server.listen(PORT, '127.0.0.1', async () => {
  console.log(`Preview server listening on http://127.0.0.1:${PORT}`);

  let browser;
  try {
    browser = await puppeteer.launch({
      executablePath: '/usr/bin/brave',
      headless: 'new',
      args: [
        '--no-sandbox',
        '--disable-setuid-sandbox',
        '--disable-dev-shm-usage',
        '--disable-gpu',
      ],
    });

    console.log('Brave browser launched successfully.');
    const page = await browser.newPage();

    // 1. Desktop Fullpage Screenshot
    await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 2 });
    await page.goto(`http://127.0.0.1:${PORT}`, { waitUntil: 'networkidle0', timeout: 30000 });

    // Wait a brief moment for any CSS animations/observers to settle
    await new Promise((resolve) => setTimeout(resolve, 800));

    const desktopPath = path.resolve('./screenshot-fullpage.png');
    await page.screenshot({ path: desktopPath, fullPage: true });
    console.log(`Desktop full-page screenshot saved to: ${desktopPath}`);

    // 2. Mobile Screenshot for responsive verification
    await page.setViewport({ width: 390, height: 844, deviceScaleFactor: 2, isMobile: true });
    await page.goto(`http://127.0.0.1:${PORT}`, { waitUntil: 'networkidle0', timeout: 30000 });
    await new Promise((resolve) => setTimeout(resolve, 800));

    const mobilePath = path.resolve('./screenshot-mobile.png');
    await page.screenshot({ path: mobilePath, fullPage: true });
    console.log(`Mobile full-page screenshot saved to: ${mobilePath}`);

    console.log('Screenshots captured successfully!');
  } catch (err) {
    console.error('Error during screenshot capture:', err);
    process.exitCode = 1;
  } finally {
    if (browser) {
      await browser.close();
    }
    server.close();
  }
});

