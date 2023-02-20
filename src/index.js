const app = require('./app');
//start server with app.get('port')
app.listen(app.get('port'), function() {
    console.log('Server started on port ' + app.get('port'));
});
//export app    
module.exports = app;