var router = require('express').Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home/index', { title: 'Express' });
});

module.exports = router;