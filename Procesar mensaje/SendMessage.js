var Facebook = require('../Funciones/Facebook.js');
var Buttons = require('./Buttons.js');

function putFacebook(face) {
    Facebook = face;
}

function processMessage(senderID, message) {
    console.log('entro');
    if (message.includes('MENUPRICIPAL')) {
        console.log('entro1');
        message = message.replace('MENUPRICIPAL', '');
        Facebook.sendMessageTextAndMenu(senderID, message, Buttons.menuPrincipal);
    } else if (message.includes('TEMPLATE')) {
        console.log('entro2');
        message = message.replace('TEMPLATE', '');
        Facebook.sendGenericMessage(senderID, message, Buttons.templete);
    } else {
        console.log('entro3');
        Facebook.sendTextMessage(senderID, message);
    }
}

module.exports = {
    processMessage,
    putFacebook
}