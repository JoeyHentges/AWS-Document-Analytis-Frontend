const express = require('express');
const superagent = require('superagent');
const multer = require('multer');

const upload = multer({ dest: '/uploads' });

const router = express.Router();

let sendDocument;

router.post('/',
    upload.single('PDF'),
    async (req, res) => sendDocument(req, res));

sendDocument = async (req, res) => {
  const result = await superagent.post(`${process.env.API_URL}/app_1/`)
      .query({
        key: process.env.API_KEY,
        name: 'joey',
      })
      .attach('PDF', req.file.path)
      .then(response => response);
  res.send(result.body);
};

module.exports.routes = router;
