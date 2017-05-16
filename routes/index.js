var express = require('express');
var router = express.Router();
var models = require('../models')

/* GET home page. */
router.get('/', function(req, res, next) {
  models.Url.findAll()
  .then(data =>{
    res.render('index', {
      data : data
    })
  })
});

router.post('/urls' ,function(req,res,next) {
  models.Url.create({
    url : req.body.url,
    shortener_url : req.body.shortener_url
  })
  .then(function(user) {
    res.redirect('/')
  })
})

router.get('/:short_url', function(req,res,next) {
  model.Url.find({
    where : {
      shortener_url : req.params.shortener_url
    }
  })
  .then ((url) =>{
    let last = url.count;
    url.updateAttributes({
      count : last+1
    })
    .then(()=>{
      res.redirect('/')
    })
  })
})


module.exports = router;
