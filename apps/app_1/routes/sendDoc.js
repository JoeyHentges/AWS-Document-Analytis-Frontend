const express = require('express');
const superagent = require('superagent');
const multer = require('multer');

const upload = multer({ dest: '/uploads' });

const router = express.Router();

let sendDocument;

router.post('/upload',
  upload.single('DOCUMENT'),
  async (req, res) => sendDocument(req, res));

sendDocument = async (req, res) => {
  const result = await superagent.post(`${process.env.API_URL}/upload/`)
    .query({
      key: process.env.API_KEY,
      documentName: req.file.originalname
    })
    .attach('UPLOAD', req.file.path)
    .then(response => response);
  res.send(result.body);
};

module.exports.routes = router;
