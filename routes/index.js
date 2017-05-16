var express = require('express');
var router = express.Router();
var model = require('../models');

/* GET home page. */
router.get('/', function(req, res, next) {
  //res.rend//er('index', {title : 'Deri APPs'})
  model.Sortener.findAll()
  .then((gila)=>{
    res.render('index', {data: gila})
  })
});

router.post('/urls', function(req, res, next) {
  console.log('masuk');
  model.Sortener.create({
    url: req.body.url,
    count: 0
  })
  .then((user)=> {
    res.redirect('/')
  })
})

router.get('/:short_url', (req, res, next)=> {
  model.Sortener.find({
    where: {
      sortener_url: req.params.short_url
    }
  })
  .then((data)=> {
    res.redirect('/')
  })
})

module.exports = router;
