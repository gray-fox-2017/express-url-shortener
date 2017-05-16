var express = require('express');
var router = express.Router();
const db = require('../models');

// get list urls
router.get('/', function(req, res) {
  db.Url.findAll()
  .then((urls) => {
    res.render('list', {data: urls})
  })
  .catch((err) => {
    console.log(err);
  })
});


// get form new urls
router.get('/new', function(req, res){
  res.render('new')
})

// create urls
router.post('/new', function(req, res){
  let url = req.body.url;
  db.Url.create({
    'link': url,
    'click': 0
  })
  .then(()=> {
    res.redirect('/urls')
  })
  .catch((err) => {
    console.log(err);
  })
})



module.exports = router;
