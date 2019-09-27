const express = require('express');
const router = express.Router();

// Routes from other files Bringing in routes from 'apps'.
router.use('/', require('../../apps/_/apps').router);

router.get('/', (req, res) => {
  res.render(
    'index',
    {
      title: 'hello',
    }
  );
});

module.exports.router = router;
