var Conversation = require('./Conversation.js');
var request = require('sync-request');

function processImage(senderID, url){
	console.log(url);
	/*
	var res = request('POST', 'http://c0f57a53.ngrok.io/', { 
        headers: {'content-type' : 'application/x-www-form-urlencoded'},
	    body: 'image = ' + url
    });*/
    //SendMessage.processMessage(senderID, 'Gracias, ahora el audio del nombre de tu marca. :D');
	//Conversation.callWatsonAPI(senderID, 'Continuar');
}

module.exports = {
	processImage
}