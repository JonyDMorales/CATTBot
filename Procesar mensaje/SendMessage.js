var Facebook = require('../Funciones/Facebook.js');
var Buttons = require('./Buttons.js');

function putFacebook(face) {
    Facebook = face;
}

function processMessage(senderID, message) {
    if (message.includes('MENUPRICIPAL')) {
        message = message.replace('MENUPRICIPAL', '');
        Facebook.sendMessageTextAndButtons(senderID, message, Buttons.menuPrincipal);
    } else if (message.includes('FORMATOSTT')) {
        message = message.replace('FORMATOSTT', '');
        Facebook.sendMessageTextAndTemplate(senderID, message, Buttons.docsTT1);
    } else if (message.includes('CONTENIDOTT1')) {
        message = message.replace('CONTENIDOTT1', '');
        Facebook.sendMessageTextAndTemplate(senderID, message, Buttons.docTTContenido);
    } else if (message.includes('CONTENIDOTT2')) {
        message = message.replace('CONTENIDOTT2', '');
        Facebook.sendMessageTextAndTemplate(senderID, message, Buttons.docTT2Contenido);
    } else if (message.includes('CAMBIOFECHA')) {
        message = message.replace('CAMBIOFECHA', '');
        Facebook.sendMessageTextAndTemplate(senderID, message, Buttons.docTTCambioFecha);
    } else if (message.includes('ACUSETT')) {
        message = message.replace('ACUSETT', '');
        Facebook.sendMessageTextAndTemplate(senderID, message, Buttons.docTTAcuse);
    } else if (message.includes('FORMATOPROTOCOLO')) {
        message = message.replace('FORMATOPROTOCOLO', '');
        Facebook.sendMessageTextAndTemplate(senderID, message, Buttons.docsProtocolo);
    } else if (message.includes('FECHASTT')) {
        message = message.replace('FECHASTT', '');
        Facebook.sendMessageTextAndTemplate(senderID, message, Buttons.docFechas);
    } else if (message.includes('OPCIONESTT')) {
        message = message.replace('OPCIONESTT', '');
        Facebook.sendMessageTextAndButtons(senderID, message, Buttons.opcionesTT);
    } else if (message.includes('OPCIONES')) {
        message = message.replace('OPCIONES', '');
        Facebook.sendMessageTextAndButtons(senderID, message, Buttons.opciones);
    } else {
        console.log('mensaje sencillo');
        Facebook.sendTextMessage(senderID, message);
    }
}

module.exports = {
    processMessage,
    putFacebook
}