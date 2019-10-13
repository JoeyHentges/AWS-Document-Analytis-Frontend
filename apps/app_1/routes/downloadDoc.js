const express = require('express');
const superagent = require('superagent');

const router = express.Router();

let downloadDocument;

router.post('/download', async (req, res) => downloadDocument(req, res));

downloadDocument = async (req, res) => {
  // const fileKey = 'Main-2019-10-12T04:36:17.806Z-ce359785253d67214bce750f95517d2f.cpp';
  const fileKey = 'Resume_2-2019-10-12T06:15:51.887Z-e791e307831ba91c0d17f90f8af85e82.pdf';
  // const fileKey = 'Resume_0-2019-10-12T07:01:41.751Z-53ff8de76ef86ef1b64b59f8b65a9649.docx';
  const result = await superagent.post(`${process.env.API_URL}/download/`)
    .query({
      key: process.env.API_KEY,
      fileKey
    })
    .then(response => response);


  console.log(result);
};

module.exports.routes = router;
