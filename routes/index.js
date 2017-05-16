var express = require('express');
var router = express.Router();
const db = require('../models');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index')
});

router.get('/s/:short', function(req, res) {
  let shortUrl = req.params.short
  db.Url.find(
    {where: {'short': shortUrl}}
  )
  .then((url) => {
    let plus = url.click + 1
    db.Url.update(
      {click: plus},
      {where: {'id': url.id}}
    )
    .then(() => {
      let trueLink = url.link
      if(!/http/.test(trueLink)){
        trueLink = 'http://'+trueLink
      }
      res.redirect(trueLink)
    })
  })
  .catch((err) => {
    console.log(err);
  })
});

module.exports = router;
