const express = require('express');
const logger = require('morgan');

const routes = require('./routes/routes');

const app = express();

const db = require("./config/database")

db.authenticate()
.then(()=> console.log("DB connection is established"))


const cors = require('cors') 
app.use(cors())


app.use(logger('dev'));
app.use(express.json());

app.use('/', routes);

module.exports = app;
