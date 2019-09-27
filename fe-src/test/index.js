const openHomePage = require('./openHomePage.js');

console.log('>>> Puppeteer started <<<');

(async () => {
  await openHomePage();

  console.log('>>> Puppeteer tests ended <<<');
  // process.exit();
})();