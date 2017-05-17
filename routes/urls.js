var express = require('express');
var router = express.Router();
var db = require('../models')

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('url', { title: 'Express' });
// });

router.get('/', function(req, res, next) {
  db.Url.findAll({
  })
  .then((value)=> {
    res.render('url', {data : value})
  })
  .catch((err) => {
    res.render(err)
  })
})

router.post('/create', function(req, res, next) {
  let link = req.body.link
  db.Url.create(req.body)
  .then((urls)=> {
    res.redirect('/')
  })
  .catch((err) => {
    console.log(err.message);
  })
})

router.get('/long_url/:id', function(req, res, next) {
  db.Url.findById(req.params.id)
  .then((value) => {
    if (value.link.slice(0, 4) === "http") {
      res.redirect(value.link)
    } else {
      res.redirect(`https://${value.link}`)
    }
  })
})

router.get('/delete/:id', function(req, res, next) {
  let id = req.params.id
  db.Url.destroy({
    where : {
      id : id
    }
  })
  .then(() => {
    res.redirect('/shows')
  })
  .catch(err => {
    console.log(err);
  })
})



router.get('/short_url/:id', function(req, res, next) {
  db.Url.findById(req.params.id)
  .then((value) => {
    let count = value.click_count
    value.updateAttributes({
      click_count : count+1
    })
    if (value.link.slice(0, 4) === "http") {
      res.redirect(value.link)
    } else {
      res.redirect(`https://${value.link}`)
    }
  })
})

// router.get('/short_url/:short_link',(req,res,send)=>{
//   db.Url.find({
//     where:{
//       short_link:req.params.short_link
//     }
//   })
//   .then((value) => {
//     let count = value.click_count
//     db.Url.updateAttributes({
//       click_count: count+1
//     })
//     .then((data) => {
//       res.redirect('/')
//     })
//   })
// })



module.exports = router;
