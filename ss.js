const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch({ channel: 'chrome' }).catch(() => chromium.launch());
  for (const [w, h, name] of [[375,812,'m'], [768,1024,'t'], [1280,800,'d']]) {
    const page = await browser.newPage();
    await page.setViewportSize({ width: w, height: h });
    await page.goto('http://localhost:8787/', { waitUntil: 'load' });
    await page.waitForTimeout(800);
    const hero = await page.$('.hero');
    await hero.screenshot({ path: `images/debug/hero-new-${name}.png` });
    console.log(name);
    await page.close();
  }
  await browser.close();
})().catch(e => { console.error(e.message); process.exit(1); });
