//express using express-handlebars server
var express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
//initi express
var app = express();
//set view path
app.set('views', path.join(__dirname, 'views'));
//set express-handlebars engine
app.engine('.hbs', exphbs.engine({
    extname: '.hbs', 
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials')
}));
//set handlebars view engine
app.set('view engine', 'hbs');
//set static path
app.use(express.static(path.join(__dirname, 'public')));
//set routes
const indexRoutes = require('./routes/indexRoutes');
app.use(indexRoutes);
//set app port with process.env.PORT
const port = process.env.PORT || 3000;
//set server
app.set('port',port);
//export app
module.exports = app;



