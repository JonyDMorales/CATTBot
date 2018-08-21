var express = require('express');
var bodyParser = require('body-parser');
var Facebook = require('../Funciones/Facebook.js');
/****************/
var SendMessage = require('../Procesar mensaje/SendMessage.js');
SendMessage.putFacebook(Facebook);
/***************/
var api = express.Router();

api.get('/webhook', Facebook.veryfyToken);
api.post('/webhook', Facebook.receivedData);

var app = express();
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use('/', api);

module.exports = app;