import puppeteer from "puppeteer";

describe("checking card number", () => {
  let browser;
  let page;
  beforeEach(async () => {
    browser = await puppeteer.launch({
      headless: true,
      slowMo: 100,
      devtools: true,
    });
    page = await browser.newPage();
  });

  test("valid number", async () => {
    await page.goto("http://localhost:9000");
    const form = await page.$(".validator");
    const input = await form.$(".number");
    const submit = await form.$(".submit");

    await input.type("4532286210295683");
    await submit.click();

    await page.waitForSelector(".submit[valid = true]");
  }, 10000);

  test("invalid number", async () => {
    await page.goto("http://localhost:9000");
    const form = await page.$(".validator");
    const input = await form.$(".number");
    const submit = await form.$(".submit");

    await input.type("222");
    await submit.click();

    await page.waitForSelector(".submit[valid = false]");
  }, 10000);

  afterEach(async () => {
    await page.close();
    await browser.close();
  });
});
