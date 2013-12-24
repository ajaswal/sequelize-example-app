var fs        = require('fs')
  , path      = require('path')
  , lodash    = require('lodash')
  , api        = {}
  , sequelize = require('sequelize');
 
fs
  .readdirSync(__dirname)
  .filter(function(file) {
    return (file.indexOf('.') !== 0) && (file !== 'index.js')
  })
  .forEach(function(file) {
    // var route = sequelize.import(path.join(__dirname, file))
    route = file.replace('.js', '');
    api[route] = require('./' + route);
  })
 
 
module.exports = api;