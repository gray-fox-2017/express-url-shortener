var express = require('express');
var router = express.Router();
const db = require('../models');

/* GET home page. */
router.get('/', function(req, res, next) {
  db.Url.findAll()
  .then(urls=>{
    res.render('index', { title: 'ADK URL Shortener','urls':urls});
  })
});

router.get('/:url', function(req, res, next) {
  db.Url.findOne({where:{shortUrl:req.params.url}})
  .then(url=>{
    res.redirect(`/urls/${url.shortUrl}`)
  })
  .catch(()=>{
    res.redirect(`/${req.params.url}`)
  })
});


module.exports = router;
