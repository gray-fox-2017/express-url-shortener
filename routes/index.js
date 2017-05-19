var express = require('express');
var router = express.Router();
let models = require('../models');
let env = process.env.NODE_ENV || 'development';
var config    = require(__dirname + '/../config/config.json')[env];

/* GET home page. */
router.get('/',(req, res, next) => {
  models.Urls.findAll({raw:true})
  .then((find) => {
    res.render('pages/', { title: 'Shortened URL', url_data:find, base_url:config.base_url });
  })
});

router.post('/add',(req,res,next) => {
  models.Urls.create({url:req.body.url})
  .then((data) => {
    res.redirect('/');
  })
})

router.get('/add',(req,res,next) => {
  res.render('pages/add');
})

router.get('/:short_url',(req,res,next) => {
  models.Urls.findOne({
    where: {shortened:req.params.short_url}
  })
  .then((find) => {
    find.update({clicked:find.clicked +1})
  .then((data) => {
    res.redirect(`http://${data.url}`)
  })
  })
})

router.get('/delete/:url',(req,res,next) => {
  models.Urls.destroy({
    where : {url:req.params.url}
  })
  res.redirect('/')
})

module.exports = router;
