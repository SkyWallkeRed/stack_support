import * as requestLib from 'request';

module.exports = function (app, express) {
  const resourcesApiRouter = express.Router();

  resourcesApiRouter.post('/upload', (req, res) => {
    if (!req.files) return res.status(400).send('No files were uploaded.');
    // console.log(req.files); // files are here <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

    // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
    let sampleFile = req.files['myfile'];

    // Use the mv() method to place the file somewhere on your server

    sampleFile.mv('server/uploads/' + sampleFile.name, function (err) {
      if (err)
        return res.status(500).send(err);

      res.send('File uploaded!');
    });
  });



  app.use('/api/resources', resourcesApiRouter);
};
