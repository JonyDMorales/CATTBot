var ContextDB = require("../Schemas/Context/Context.js").Context;
var Watson = require('watson-developer-cloud/conversation/v1');
var SendMessage = require('../Procesar mensaje/SendMessage.js');

var workspace_id = 'c417375b-831e-417f-9164-91d11826fd7a';
var conversation = new Watson({
    username: 'b3ef4c79-939b-406f-bca4-2c8d25e44deb',
    password: 'sxTNklb5jzFo',
    path: { workspace_id: workspace_id },
    version_date: '2017-08-09'
});

function sendUserName(senderID, userName) {
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
            delete response["__v"];
            ContextDB.findOneAndUpdate({ senderId: senderID }, response.context, { upsert: true }, function(err, doc) {
                if (err) throw err;
                return;
            });
            //callWatsonAPI(senderID, messagePostback);
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
                    //console.log(that.messageText);
                    //console.log(messageAnswerWatson);

                    /*if (response.context.formula) {
                        response = processContextFormula(response);
                        SendMessage.processMessage(senderID, messageAnswerWatson);
                    } else {*/
                    SendMessage.processMessage(senderID, messageAnswerWatson);
                    //}
                    var newContext = response.context;
                    delete newContext["formula"];
                    delete newContext["__v"];
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