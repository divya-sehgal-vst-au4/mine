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


app.use("/table", require('../routes/tableRoutes'))
app.use("/waiter", require('../routes/waiterRoutes'))
app.use("/menu", require('../routes/menuRoutes'))
app.use("/order", require('../routes/orderRoutes'))




module.exports = app;
