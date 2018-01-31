var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Messing Around' });
});

/* GET secret page. */
router.get('/secret', function(req, res, next) {
  res.render('secret', { title: 'Login' });
});

/* GET login page. */
router.get('/login', function(req, res, next) {
    res.render('login', { title: 'Logging in...' });
});

module.exports = router;
