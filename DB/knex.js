const environment = process.env.NODE_ENV || "development";
const config = require('../knexfile.js');
const environmentConfig = config[environment]
var knex = require('knex')
const connection = knex(environmentConfig)

module.exports = connection;
