var Facebook = require('../Funciones/Facebook.js');
var Buttons = require('./Buttons.js');
var fs = require('fs');

function sendMessagesAll(){
	var message = fs.readFileSync(__dirname + '/txt/message.txt', 'utf8');
	var users = fs.readFileSync(__dirname + '/txt/senderIDs.txt', 'utf8');
	users = users.split(' ');

	for(var senderID of users){
		Facebook.sendImage(senderID, 'http://files.fractalabogados.webnode.mx/200000196-235d02457a/IMG-20180118-WA0002.jpg');
		Facebook.sendMessageTextAndMenu(senderID, message, Buttons.urlArticulo );
		console.log(senderID);
	}
}

module.exports = {
	sendMessagesAll
}