var db = require('../../models')

exports.get = function(req,res) {
	db.User.findAll().success(function(users) {
    console.log(users);
    res.json(users);
  })
}

exports.post = function(req, res) {
	// console.log(req);
	// console.log(req.is('json'));
	// res.json(req.body)
  db.User.create(req.body.user).success(function() {
    response = {"response":"success"};
    res.json(response);
  })
}