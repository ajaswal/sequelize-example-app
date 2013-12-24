var express = require('express')
  , routes  = require('./routes')
  , user    = require('./routes/user')
  , task    = require('./routes/task')
  , subtask = require('./routes/subtask')
  , http    = require('http')
  , path    = require('path')
  , db      = require('./models')
  , api     = require('./api/v0');
 
var app = express()
 
// all environments
app.set('port', process.env.PORT || 3000)
app.set('views', __dirname + '/views')
app.set('view engine', 'jade')
app.use(express.favicon())
app.use(express.logger('dev'))
app.use(express.json())
app.use(express.bodyParser())
app.use(express.urlencoded())
app.use(express.methodOverride())
app.use(app.router)
app.use(express.static(path.join(__dirname, 'public')))
 
// development only
if ('development' === app.get('env')) {
  app.use(express.errorHandler())
}
 
app.get('/', routes.index)
app.get('/user',api.user.get);
app.post('/user',api.user.post);



app.post('/users/create', user.create)
app.post('/users/:user_id/tasks/create', task.create)
app.get('/users/:user_id/tasks/:task_id/destroy', task.destroy)
app.post('/users/:user_id/tasks/:task_id/subtasks/create', subtask.create)
 
db
  .sequelize
  .sync({ force: true })
  .complete(function(err) {
    if (err) {
      throw err
    } else {
      http.createServer(app).listen(app.get('port'), function(){
        console.log('Express server listening on port ' + app.get('port'))
      })
    }
  })