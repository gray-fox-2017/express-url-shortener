var express = require('express');
var router = express.Router();
let db = require('../models')

/* GET home page. */
router.get('/', function(req, res, next) {
  db.Url.findAll()
  .then(urls => {
    res.render('index', {data : urls})
  })
});

router.get('/:short_url', (req, res) => {
  let searched = req.params.short_url
  db.Url.findOne({where: {short_url: {like: '%'+searched+'%'}}}).then(url => {
    let webUrl = url.norm_url
    url.increment('click_count', {by: 1})
    res.redirect(`${webUrl}`)
  })
  .catch(err => {
    console.log(err);
  })
})

router.post('/url/create', (req, res) => {
  let normalUrl = req.body.norm_url
  let coba = req.body
  db.Url.create({norm_url : normalUrl}).then((url) => {
    res.redirect('/')
  })
  .catch(err => {
    console.log("error message");
    console.log(err);
  })
})

module.exports = router;
