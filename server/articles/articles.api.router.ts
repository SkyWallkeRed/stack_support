import * as requestLib from 'request';

module.exports = function (app, express) {
  const articlesApiRouter = express.Router();

  articlesApiRouter.get('/', (req, res) => {
    requestLib({
      url: 'https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=a56e0c11e70e4989a04e4c4f20ea4453'
    }).pipe(res);
  });

  app.use('/api/articles', articlesApiRouter);
};
