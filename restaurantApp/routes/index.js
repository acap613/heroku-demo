var express = require('express');
var router = express.Router();
var path = require('path');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile(path.join(__dirname + "/../public/index.html"));
});
/* GET table page. */
router.get('/tables', function(req, res, next) {
  res.sendFile(path.join(__dirname + "/../public/tables.html"));
});
/* GET reserve page. */
router.get('/reserve', function(req, res, next) {
  res.sendFile(path.join(__dirname + "/../public/reserve.html"));
});

module.exports = router;
