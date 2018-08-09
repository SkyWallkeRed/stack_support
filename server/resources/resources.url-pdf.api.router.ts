let SitePDF = require('site-pdf');
let generator = new SitePDF();

module.exports = function (app, express) {

  try {

    const urlToPdfApiRouter = express.Router();

    urlToPdfApiRouter.post('/url-pdf', (req, res) => {
      console.log('laaaaaaaaa##########################################################');
      if (!req) return res.status(400).send('err url-pdf .');

      let sitePDF = new SitePDF({
        cookie: {
          'name': 'COOKIE_KEY_NAME',
          'value': '100',
          'domain': 'stackoverflow.com',
          'path': '/',
          'expires': (new Date()).getTime() + (1000 * 60 * 60)
        },
        userAgent: 'sitePDF',
        // viewportSize: {width: 1280, height: 800},
        paperSize: {
          format: 'A4',
          orientation: 'portrait',
          margin: {left: '0.5cm', right: '0.5cm', top: '0.5cm', bottom: '0.5cm'}
        },
        phantomArgs: [['--ignore-ssl-errors=true', '--disk-cache=true'], {
          // phantomPath: '/usr/local/bin/phantomjs',
          logLevel: 'info',
        }]
      });


      sitePDF.create('http://stackoverflow.com/', 'output.pdf');

      sitePDF.destroy();

    });

    app.use('/api/resources', urlToPdfApiRouter);

  } catch (e) {

    console.log('url to pdf ', e);

  }

};
