var Facebook = require('../Funciones/Facebook.js');
var Buttons = require('./Buttons.js');

function putFacebook(face){
    Facebook = face;
}

function processMessage(senderID, message){
    if(message.includes('TEMPLATE')){
        message = message.replace('TEMPLATE', '');
        Facebook.sendVideo(senderID, Buttons.videoSaludoMax);
        Facebook.sendMessageTextAndButtons(senderID, message, Buttons.template);
    }else if(message.includes('CONTINUAR')){
        message = message.replace('CONTINUAR','');
        Facebook.sendMessageTextAndButtons(senderID, message, Buttons.buttonContinuar);
    }else if(message.includes('SINO')){
        message = message.replace('SINO','');
        Facebook.sendMessageTextAndButtons(senderID, message, Buttons.buttonSINO);
    }else if(message.includes('ENCUESTA')){
        message = message.replace('ENCUESTA','');
        Facebook.sendMessageTextAndMenu(senderID, message, Buttons.menuOpciones);
    }else if(message.includes('REDESSOCIALES')){
        message = message.replace('REDESSOCIALES','');
        Facebook.sendVideo(senderID, Buttons.videoMaxDespedida);
        Facebook.sendMessageTextAndMenu(senderID, message, Buttons.menuRedesSociales);
    }else if(message.includes('SALIR')){
        message = message.replace('SALIR','');
        Facebook.sendMessageTextAndButtons(senderID, message, Buttons.buttonSalir);
    }else if(message.includes('IMAGENINDEMNIZACION')){
        message = message.replace('IMAGENINDEMNIZACION','');
        Facebook.sendTextMessage(senderID, message);
        Facebook.sendImage(senderID,'http://files.fractalabogados.webnode.mx/200000097-025e2035f3/450/MIndemnizacion.png');
    }else if(message.includes('IMAGENFINIQUITO')){
        message = message.replace('IMAGENFINIQUITO','');
        Facebook.sendTextMessage(senderID, message);
        Facebook.sendImage(senderID, 'http://files.fractalabogados.webnode.mx/200000095-e8d4be9cef/200/MFiniquito.png');
    }else if(message.includes('IMAGENAGUINALDO')){
        message = message.replace('IMAGENAGUINALDO','');
        Facebook.sendTextMessage(senderID, message);
        Facebook.sendImage(senderID,'http://files.fractalabogados.webnode.mx/200000101-15e6916e1e/700/MSueldo.png');
    }else if(message.includes('IMAGENVACACIONES')){
        message = message.replace('IMAGENVACACIONES','');
        Facebook.sendTextMessage(senderID, message);
        Facebook.sendImage(senderID,'http://files.fractalabogados.webnode.mx/200000096-99b899ab60/700/MVacaciones.png');
    }else if(message.includes('IMAGENPRIMAVACACIONAL')){
        message = message.replace('IMAGENPRIMAVACACIONAL','');
        Facebook.sendTextMessage(senderID, message);
        Facebook.sendImage(senderID, 'http://files.fractalabogados.webnode.mx/200000099-025d103562/450/MPrimaVacacional.png');
    }else if(message.includes('IMAGENPRIMANTIGUEDAD')){
        message = message.replace('IMAGENPRIMANTIGUEDAD','');
        Facebook.sendTextMessage(senderID, message);
        Facebook.sendImage(senderID, 'http://files.fractalabogados.webnode.mx/200000093-025b50354b/450/MPrimaDeAntiguedad.png');
    }else if(message.includes('IMAGENLIQUIDACION')){
        message = message.replace('IMAGENLIQUIDACION','');
        Facebook.sendTextMessage(senderID, message);
        Facebook.sendImage(senderID,'http://files.fractalabogados.webnode.mx/200000098-6fc4870b8e/450/MLiquidacion.png');
    }
    /*Aqui comienza Marcas*/
    else if(message.includes('MENUTIPOS')){
        message = message.replace('MENUTIPOS','');
        Facebook.sendMessageTextAndMenu(senderID, message, Buttons.menuTipos);
    }else if(message.includes('MANUPRODUCTO')){
        message = message.replace('MANUPRODUCTO','');
        Facebook.sendMessageTextAndMenu(senderID, message, Buttons.menuProducto);
    }else if(message.includes('IMAGENMARCAS')){
        message = message.replace('IMAGENMARCAS','');
        Facebook.sendTextMessage(senderID, message);
        Facebook.sendImage(senderID,'http://files.fractalabogados.webnode.mx/200000102-99e909ae32/450/I.%20Marca%20Nominativa..png');
        Facebook.sendImage(senderID,'http://files.fractalabogados.webnode.mx/200000104-597585a704/450/II.%20Marca%20Innominada..png');
        Facebook.sendImage(senderID,'http://files.fractalabogados.webnode.mx/200000105-7e8d97f8ee/450/III.%20Marca%20Tridimensional..png');
        Facebook.sendImage(senderID,'http://files.fractalabogados.webnode.mx/200000103-23c0b24bab/450/IV.%20Marca%20Mixta..png');
    }else if(message.includes('UNOOMAS')){
        message = message.replace('UNOOMAS','');
        Facebook.sendMessageTextAndButtons(senderID, message, Buttons.buttonUNOMAS);
    }else if(message.includes('MENUTERMINOS')){
        message = message.replace('MENUTERMINOS','');
        Facebook.sendMessageTextAndMenu(senderID, message, Buttons.menuTerminos);
    }else if(message.includes('DUDAS')){
        message = message.replace('DUDAS','');
        Facebook.sendMessageTextAndButtons(senderID, message, Buttons.buttonDudas);
    }else if(message.includes('MENUSKYPE')){
        message = message.replace('MENUSKYPE','');
        Facebook.sendMessageTextAndMenu(senderID, message, Buttons.menuSkype);
    }else if(message.includes('IMAGENVIABILIDAD')){
        message = message.replace('IMAGENVIABILIDAD','');
        Facebook.sendTextMessage(senderID, message);
    }else if(message.includes('EMPRESAOUT')){
        message = message.replace('EMPRESAOUT','');
        Facebook.sendMessageTextAndButtons(senderID, message, Buttons.buttonEmpresaOut);
    }else if(message.includes('PAGO')){
        message = message.replace('PAGO','');
        Facebook.sendMessageTextAndMenu(senderID, message, Buttons.buttonComprar);
    }else if(message.includes('CHISTE')){
        message = message.replace('CHISTE','');
        Facebook.sendTextMessage(senderID, message);
        var rand = Math.floor((Math.random() * 2) + 0);;
        console.log("Rand:" + rand);
        if(rand == 0)
        	Facebook.sendImage(senderID,'http://files.fractalabogados.webnode.mx/200000136-1d3b71e35d/450/Pasted%20image%20at%202017_12_06%2005_04%20PM.png');
        if(rand == 1)
        	Facebook.sendImage(senderID,'http://files.fractalabogados.webnode.mx/200000135-657c3667a0/450/Pasted%20image%20at%202017_12_06%2005_03%20PM.png');
    }else{
        Facebook.sendTextMessage(senderID, message);
    }
}

module.exports = {
	processMessage,
	putFacebook
}