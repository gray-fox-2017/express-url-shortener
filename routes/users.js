var express = require('express');
var router = express.Router();
let db = require('../models');
/* GET users listing. */

router.get('/', function(req, res, next) {
  db.Url.findAll()
  .then((urls)=>{
    res.render('allUrl',{urls});
  })
});

router.post('/', function(req, res, next) {
  db.Url.create({lurl:req.body.lurl, counter:0})
  .then(()=>{
    res.redirect('/users/');
  }).catch((err)=>{
    res.send(err);
  });
});

router.get('/:id',function(req,res,next){
  let id = req.params.id;
  db.Url.findOne({where: {surl:id}})
  .then((url)=>{
    url.update({counter: url.counter+1})
    .then(()=>{
      res.redirect(url.lurl);
    });
  })
  .catch(()=>{
    res.send('Invalid url');
  })
})
module.exports = router;