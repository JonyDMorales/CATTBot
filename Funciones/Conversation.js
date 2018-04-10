var ContextDB = require("../Schemas/Context/Context.js").Context;
var Watson = require('watson-developer-cloud/conversation/v1');
var SendMessage = require('../Procesar mensaje/SendMessage.js');
var ProcessText = require('../Procesar mensaje/ProcessText.js');

var workspace_id = 'e3d7a02f-b1f8-4114-ba40-0a643126ff59';
var conversation = new Watson({
    username: 'b2be6ab3-8074-4cf7-9c16-b4761598e30c',
    password: 'UCEXSOCt2Xgp',
    path: { workspace_id: workspace_id },
    version_date: '2017-08-09'
});

function restaFechas(first, second) {
    return Math.round((second - first) / (1000 * 60 * 60 * 24));
}

function dias_Vacaciones(años_trabajados) {
    switch (años_trabajados) {
        case 1:
            return 6;
            break;
        case 2:
            return 8;
            break;
        case 3:
            return 10;
            break;
        case 4:
            return 12;
            break;
        default:
            return 14;
    }
}

function processContextFormula(response) {
    var expresion = response.context.formula.split('=');
    var datos = expresion[1].split(';');
    var operacion = expresion[0];

    var fecha_ingreso = new Date(datos[0]);
    var datos_ingreso = datos[0].split("-");
    var fecha_baja = new Date(datos[1]);
    var año_baja = datos[1].split("-");
    var salario = Number(datos[2]);

    var fecha_en_curso = new Date(año_baja[0] + "-01-01");
    var fecha_aniver = new Date(año_baja[0] + "-" + datos_ingreso[1] + "-" + datos_ingreso[2]);
    var años_trabajados = año_baja[0] - datos_ingreso[0];
    var dias;
    var porcentaje;
    /*Se calcula el salario diario*/
    var salario_diario = salario / 30;
    response.context.salario_diario = salario_diario.toFixed(2);
    /*Se calcula el aguinaldo*/
    dias = restaFechas(fecha_en_curso, fecha_baja);
    porcentaje = (dias * 15) / 365;
    var aguinaldo = salario_diario * porcentaje;
    response.context.aguinaldo = aguinaldo.toFixed(2);
    /*Se calculan las vacaciones*/
    if (fecha_baja > fecha_aniver) {
        dias = restaFechas(fecha_aniver, fecha_baja);
        dias_corresponden = dias_Vacaciones(años_trabajados + 1);
    } else {
        var año = año_baja[0] - 1;
        var fecha_aux = new Date(año + "-" + datos_ingreso[1] + "-" + datos_ingreso[2]);
        dias = restaFechas(fecha_aux, fecha_baja);
        dias_corresponden = dias_Vacaciones(años_trabajados);
    }
    var vacaciones = ((dias * dias_corresponden) / 365) * salario_diario;
    response.context.vacaciones = vacaciones.toFixed(2);
    /*Se calcula la prima vacacional*/
    var prima_vacacional = vacaciones * 0.25;
    response.context.prima_vacacional = prima_vacacional.toFixed(2);
    /*Se calcula finiquito*/
    var finiquito = aguinaldo + vacaciones + prima_vacacional;
    response.context.finiquito = finiquito.toFixed(2);
    if (operacion == 'liquidacion') {
        /*Se calcula indemnizacion*/
        dias_corresponden = dias_Vacaciones(años_trabajados + 1);
        var porcentaje_salario = (salario_diario * 15) / 365;
        var porcentaje_vacaciones = (salario_diario * dias_corresponden * 0.25) / 365;
        var salario_diario_integrado = porcentaje_salario + porcentaje_vacaciones + salario_diario;
        response.context.salario_diario_integrado = salario_diario_integrado.toFixed(2);
        var indemnizacion = salario_diario_integrado * 90;
        response.context.indemnizacion = indemnizacion.toFixed(2);
        /*Se calcula prima de antiguedad*/
        var prima_antiguedad;
        dias = restaFechas(fecha_ingreso, fecha_baja);
        if (salario_diario > 160.08) {
            prima_antiguedad = ((dias) / 365) * 160.08 * 12;
        } else {
            prima_antiguedad = ((dias) / 365) * salario_diario * 12;
        }
        response.context.prima_antiguedad = prima_antiguedad.toFixed(2);
        /*Se calcula liquidacion*/
        var liquidacion = finiquito + indemnizacion + prima_antiguedad;
        response.context.liquidacion = liquidacion.toFixed(2);
    }
    return response;
}

function sendUserName(senderID, userName, messagePostback) {
    ContextDB.findOne({ senderId: senderID }, function(err, context) {
        if (err) {
            console.log("Error en findOne: " + err);
        }
        sendToConversation.apply({ context: context, messageText: userName });
    });

    function sendToConversation() {
        var that = this;
        conversation.message({
            input: { text: that.messageText },
            context: that.context,
            workspace_id: workspace_id
        }, function processResponse(err, response) {
            if (err) {
                console.error('Error en conversation: ' + err);
            }
            response.context.nombre = that.messageText;
            ContextDB.findOneAndUpdate({ senderId: senderID }, response.context, { upsert: true }, function(err, doc) {
                if (err) throw err;
                return;
            });
            callWatsonAPI(senderID, messagePostback);
        });
    }
}

function callWatsonAPI(senderID, messageUserText) {
    if (messageUserText == "salir" || messageUserText == "Salir" || messageUserText == "empezar" || messageUserText == "Empezar") {
        ContextDB.find({ senderId: senderID }).remove().exec();
        console.log('Se elimino correctamente.');
        callWatsonAPI(senderID, "Hola");
    } else {
        ContextDB.findOne({ senderId: senderID }, function(err, context) {
            if (err) {
                console.log("Error en findOne: " + err);
            }
            sendToConversation.apply({ context: context, messageText: messageUserText });
        });
    }

    function sendToConversation() {
        var that = this;
        conversation.message({
            input: { text: that.messageText },
            context: that.context,
            workspace_id: workspace_id
        }, function processResponse(err, response) {
            if (err || (response == null)) {
                console.error('Error en conversation: ');
                console.log(err);
                return;
            }
            if (response.output.text.length != 0) {
                for (var i = 0; i < response.output.text.length; i++) {
                    var messageAnswerWatson = response.output.text[i];

                    if (messageAnswerWatson.includes('CORROBORAR')) {
                        var expresion = messageAnswerWatson.split('=');
                        var datos = expresion[1].split(';');
                        var operacion = expresion[0];
                        var fecha_ingreso = new Date(datos[0]);
                        var fecha_baja = new Date(datos[1]);
                        var salario = Number(datos[2]);

                        if (fecha_ingreso <= fecha_baja) {
                            response.context.salir = true;
                        } else {
                            response.context.salir = false;
                        }
                        messageAnswerWatson = 'Procesando tu información. :)';
                    }

                    if (response.context.formula) {
                        if (response.context.formula == 'info') {
                            ProcessText.sendData(response);
                        } else {
                            response = processContextFormula(response);
                            SendMessage.processMessage(senderID, messageAnswerWatson);
                        }
                    } else {
                        SendMessage.processMessage(senderID, messageAnswerWatson);
                    }
                    var newContext = response.context;
                    delete newContext["formula"];
                    ContextDB.findOneAndUpdate({ senderId: senderID }, newContext, { upsert: true }, function(err, doc) {
                        if (err) throw err;
                        return;
                    });
                }
            }
        });
    }
}

module.exports = {
    sendUserName,
    callWatsonAPI
};