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
    } else if (message.includes('SELECT')) {
        message = message.replace('SELECT', '');
        Facebook.sendMessageTextAndTemplate(senderID, message, Buttons.select);
    } else if (message.includes('CONTENIDOTT2')) {
        message = message.replace('CONTENIDOTT2', '');
        Facebook.sendMessageTextAndTemplate(senderID, message, Buttons.docTT2Contenido);
    } else if (message.includes('ENCUESTA')) {
        message = message.replace('ENCUESTA', '');
        Facebook.sendMessageTextAndTemplate(senderID, message, Buttons.encuesta);
    } else if (message.includes('MEME')) {
        message = message.replace('MEME', '');
        Facebook.sendTextMessage(senderID, message);
        Facebook.sendImage(senderID, 'blob:https://web.whatsapp.com/a1c6d2b2-a3bc-440c-95a7-429542ad42b5');
    } else if (message.includes('CATALOGO')) {
        message = message.replace('CATALOGO', '');
        Facebook.sendMessageTextAndTemplate(senderID, message, Buttons.catalogo);
    } else if (message.includes('ELECTIVA')) {
        message = message.replace('ELECTIVA', '');
        Facebook.sendMessageTextAndTemplate(senderID, message, Buttons.electiva);
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
        Facebook.sendTextMessage(senderID, message);
    }
}

module.exports = {
    processMessage,
    putFacebook
}