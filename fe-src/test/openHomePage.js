const puppeteer = require('puppeteer');

const homePageUrl = 'http://localhost:8080';

const config = {
  headless: false,
  devtools: true,
  slowMo: 500
};

module.exports = async () => {
  const browser = await puppeteer.launch(config);
  const page = await browser.newPage();
  await page.goto(homePageUrl, { waitUntil: 'networkidle0' });

  const firstRaceItem = await page.$('.races-Races__race-item');
  console.log(firstRaceItem);
  await firstRaceItem.click();
  
  // browser.close();
};