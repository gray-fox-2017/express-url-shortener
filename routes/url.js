const express = require('express');
const conn = require('../models/');
const shorterUrl = require('../helpers/shorterUrl')

var router = express.Router()

router.get('/',(req,res,next) => {
  conn.Url.findAll()
  .then(data => {
      res.render('url',{urls:data})
  })
})

router.get('/add',(req,res,next) => {
  conn.Url.findAll()
  .then(data => {
      res.render('add_url')
  })
})

router.post('/add',(req,res,next) => {

  conn.Url.create({url:req.body.url,short_url:shorterUrl(req.body.url)})
  .then( url => {
    console.log(url.url);
    res.redirect('/url')
  })
})

router.post('/count',(req,res,next) => {

  conn.Url.update({})

})



module.exports = router;
