var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');


var app = express();



app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));



app.use("/movie", require('./routes/moviesRoutes'))
app.use("/award", require('./routes/awardsRoutes'))
app.use("/genre", require('./routes/genreRoutes'))

app.use("/singer", require('./routes/singerRoutes'))
app.use("/language", require('./routes/languagesRoutes'))
app.use("/song", require('./routes/songsRoutes'))




module.exports = app;
