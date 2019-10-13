const express = require('express');

const router = express.Router();

const sendDoc = require('./sendDoc');
const downloadDoc = require('./downloadDoc');

router.use('/', sendDoc.routes);
router.use('/', downloadDoc.routes);

let index;

router.get('/', async (req, res) => index(req, res));

index = async (req, res) => {
  res.render(
    'app_1/views/index',
    {
      title: 'hello',
    }
  );
};

module.exports.routes = router;
