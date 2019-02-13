var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
  res.render('cms', { title: 'Content Management System' });
});

module.exports = router;
