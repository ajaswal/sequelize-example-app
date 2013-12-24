module.exports = function(sequelize, DataTypes) {

	var SubTask = sequelize.define('SubTask', {
    title: DataTypes.STRING
  }, {
    associate: function(models) {
      SubTask.belongsTo(models.Task)
    }
  })
 
  return SubTask
}