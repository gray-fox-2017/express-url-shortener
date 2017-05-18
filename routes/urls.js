var express = require('express');
var router = express.Router();
const db = require('../models');

/* GET users listing. */
router.get('/', function(req, res, next) {
  db.Url.findAll()
  .then(urls=>{
    res.render('urls', { title: 'ADK URL Shortener','urls':urls});
  })
});

router.get('/:short_url', function(req, res, next) {
  let url = req.params.short_url
  db.Url.findOne({where:{shortUrl:url}})
  .then(url=>{
    let count = url.count
    url.update({'count':count+1})
    .then(url=>{
      if(url.longUrl.slice(0,4)!='http'){
        url.update({longUrl:`https://${url.longUrl}`})
        res.redirect(`${url.longUrl}`)
      } else {
        res.redirect(`${url.longUrl}`)
      }
    })
  })
});

module.exports = router;
