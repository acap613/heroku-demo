var express = require('express');
var router = express.Router();

/* GET apis listing. */
router.get('/tables', function(req, res, next) {
  res.send('respond with some tables');
});
router.post('/reserve', function(req, res, next) {
  res.send('respond with a confirmation');
});

module.exports = router;
