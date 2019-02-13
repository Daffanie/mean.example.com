var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  res.render('index', { name: 'Daffanie', title: 'Express' });

});

router.get('/cms', function(req, res, next){
  res.render('cms', {title: 'Express'});
});

module.exports = router;
