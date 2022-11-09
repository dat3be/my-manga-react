const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
    await page.setExtraHTTPHeaders({
      'referer': "nettruyenin.com",
    });

  await page.goto(
    "http://u.ntcdntempv3.com/content/2022-09-14/637987818567773193.jpg"
  );
  await page.screenshot({ path: "example.png" });

  await browser.close();
})();
