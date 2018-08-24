// import {query} from '';

const puppeteer = require('puppeteer');

module.exports = function (app, express) {
  const resourcesApiRouter = express.Router();

  resourcesApiRouter.post('/url-pdf', async (req, res) => {
    // const url =req.query.url;
    let name = req.body.fileName;
    const url = req.body.urlToConvert;

    let fileName = 1;
    fileName++;

    if (!name) {
      name = fileName;
    }

    (async () => {
      console.log('working');
      const browser = await puppeteer.launch({
        // headless: false
      });

      const page = await browser.newPage();
      await page.goto(url, {waitUntil: 'networkidle2'});

      await page.pdf({path: `server/files-converted/` + name + `.pdf`, format: 'A4'});

      await browser.close();
      console.log('done');

    })();

    res.send('url to PDF done ! ;) ');
  });

  app.use(resourcesApiRouter);

};
