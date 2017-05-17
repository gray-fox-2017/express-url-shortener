var express = require('express');
var router = express.Router();
var db = require('../models')

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('url', { title: 'Express' });
// });

router.get('/', function(req, res, next) {
  db.Url.findAll({
    order : "id asc"
  })
  .then((value)=> {
    res.render('show', {data : value})
  })
  .catch((err) => {
    res.render(err)
  })
})

module.exports = router;
