var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();

var Schema = mongoose.Schema;

/* GET home page. */
router.get('/', function(req, res) {
    res.redirect('/catalog');
});

/* GET secret page. */
router.get('/secret', function(req, res, next) {
  res.render('secret', { title: 'Login' });
});

/* GET login page. */
router.get('/login', function(req, res, next) {
    res.render('login', { title: 'Logging in...' });
});

/* GET TodoList page. */
router.get('/todolist', function(req, res, next) {
    res.render('todolist', { title: 'Todos' });
});

module.exports = router;
