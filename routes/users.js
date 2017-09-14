var express = require('express');
var router = express.Router();
var knex = require('../db/knex');
var queries = require('../db/queries')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
