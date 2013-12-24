var db = require('../models')

exports.create = function(req, res) {
  db.Task.find({ where: { id: req.param('task_id') } }).success(function(task) {
    db.SubTask.create({ title: req.param('title') }).success(function(title) {
      title.setUser(task).success(function() {
        res.redirect('/')
      })
    })
  })
}