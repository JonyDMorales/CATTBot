var Facebook = require('../Funciones/Facebook.js');
var Buttons = require('./Buttons.js');

function putFacebook(face) {
    Facebook = face;
}

function processMessage(senderID, message) {
    if (message.includes('MENUPRICIPAL')) {
        message = message.replace('MENUPRICIPAL', '');
        Facebook.sendMessageTextAndButtons(senderID, message, Buttons.menuPrincipal);
    } else if (message.includes('OPCIONES')) {
        message = message.replace('OPCIONES', '');
        Facebook.sendMessageTextAndButtons(senderID, message, Buttons.opciones);
    } else {
        Facebook.sendTextMessage(senderID, message);
    }
}

module.exports = {
    processMessage,
    putFacebook
}