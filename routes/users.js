var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/you', function(req, res, next) {
  res.send('you');
})

router.get('/:id', function(req, res, next) {
  const id = req.params.id

  res.send(`id: ${id}`)
})

module.exports = router;
