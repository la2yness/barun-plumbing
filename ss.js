const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch({ channel: 'chrome' }).catch(() => chromium.launch());
  const page = await browser.newPage();
  await page.setViewportSize({ width: 1280, height: 700 });
  await page.goto('http://localhost:8787/', { waitUntil: 'load' });
  await page.waitForTimeout(500);
  const el = await page.$('.hero');
  await el.screenshot({ path: 'images/debug/hero-bg.png' });
  await browser.close();
  console.log('done');
})().catch(e => { console.error(e.message); process.exit(1); });
