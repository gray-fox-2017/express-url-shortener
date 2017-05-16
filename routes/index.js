var express = require('express');
var router = express.Router();
var models = require('../models')

/* GET home page. */
router.get('/', function(req, res, next){
  models.Url.findAll()
    .then (urls => {
      res.render('index', {
        urls : urls
      })
    })
});

router.post('/urls', (req, res, next)=> {
  models.Url.create({
    url : req.body.url
  })
  .then(function(url){
    res.redirect("/")
  })
})

router.get('/:short_url', function(req, res, next) {
  models.Url.find({
    where: {
        shortener_url: req.params.short_url
      }
    })
  .then(function(url) {
    let last = url.count;
      url.updateAttributes({
        count: last+1
        })
        .then(()=>{
          res.redirect("/");
        });
      });
});

module.exports = router;
