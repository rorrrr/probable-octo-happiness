var express = require('express');
var router = express.Router();

router.use('/api/films', require("./films"));

router.get('/api', function(req,res) {
  res.json({data: "example text"})
})

module.exports = router;