var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/login', function(req, res, next) {
  res.render('index', { title: 'Login' , form: 'Auth'});
});


router.get('/notFound', function(req, res, next) {
  res.render('index', { title: 'Error404' });
});

module.exports = router;
