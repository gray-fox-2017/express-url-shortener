var express = require('express');
var router = express.Router();
var db = require('../models')

/* GET home page. */
router.get('/', function(req, res, next) {
  db.linkList.findAll()
  .then(function(List) {
    res.render('index', {List : List})
  })
});

router.get('/:shortURL',function(req,res,next) {
  res.redirect()
})
module.exports = router;
