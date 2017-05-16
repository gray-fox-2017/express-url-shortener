var express = require('express');
var router = express.Router();
const db = require('../models');

router.get('/:id', function(req, res, next) {
  db.Url.findById(req.params.id)
  .then(url=>{
    res.render('detail', { title: 'ADK URL Shortener','url':url});
  })
});

router.post('/', function(req, res, next) {
  db.Url.create({
    longUrl:req.body.url
  })
  .then(url=>{
    res.redirect(`/urls/detail/${url.id}`)
  })
  .catch(err=>{
    console.log(err.message);
    // alert(err.message)
    res.redirect('/')
  })
});

module.exports = router;
