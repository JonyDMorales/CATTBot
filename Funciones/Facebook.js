var Watson = require('./Conversation.js');
var request = require('sync-request');
var DatosUsuario = require("../Schemas/Facebook/Datos de Facebook.js").DatosF;

var token = 'EAAeYOSRZC1XEBAEZCMI0S5ZADIeZB6cKfJlwCB75Mbd5LzAOmE59rWt7aVPSzlPs25bUdTp2oSdllXwGXvPRvrbVawYTD7TG0ZAeFZACyVayZALRY85mco0kwmRV1nDtoGNnuGqGYD2gkZAIaochktPU0DSZCZBqt0slUgnY9gbsa8HAZDZD';

function veryfyToken(req, res) {
    if (req.query['hub.mode'] === 'subscribe' &&
        req.query['hub.verify_token'] === token) {
        console.log('Validating webhook');
        res.status(200).send(req.query['hub.challenge']);
    } else {
        console.error("Failed validation. Make sure the validation tokens match.");
        res.sendStatus(403);
    }
}

function callSendAPI(messageData) {
    var res = request('POST', 'https://graph.facebook.com/v2.6/me/messages', {
        uri: 'https://graph.facebook.com/v2.6/me/messages',
        qs: { access_token: token },
        json: messageData
    });
}

function callGetDataUser(senderID) {
    var res = request('GET',
        'https://graph.facebook.com/v2.6/' + senderID + '?fields=first_name,last_name,locale,gender,email&access_token=' + token, {
            uri: 'https://graph.facebook.com/v2.6/' + senderID + '?fields=first_name,last_name,locale,gender,email&access_token=' + token,
            method: 'GET'
        });
    return res.getBody('utf-8');
}

function sendTextMessage(recipientId, messageText) {
    var messageData = {
        recipient: {
            id: recipientId
        },
        message: {
            text: messageText
        }
    };
    callSendAPI(messageData);
}

function receivedMessage(event) {
    var senderID = event.sender.id;
    var message = event.message;
    var messageText = message.text;
    var audio = message.attachments;
    var DataUser = null;

    if (messageText) {
        Watson.callWatsonAPI(senderID, messageText);
    } else if (message.attachments) {
        /*
        var json = JSON.stringify(message.attachments);
        json = json.replace('[','');
        json = json.replace(']','');

        if(json.includes('mp4')){
            json = JSON.parse(json);
            SpeechToText.sendVoice(senderID, json.payload.url);
        }else if(json.includes('jpg') || json.includes('png')){
            json = JSON.parse(json);
            AnalyzeImage.processImage(senderID,json.payload.url);
        }*/
    }
}

function receivedPostback(event) {
    var senderID = event.sender.id;
    var message = event.postback.payload;

    if (message) {
        DataUser = callGetDataUser(senderID);
        //if (DataUser) {
        var Json = JSON.parse(DataUser);
        DatosUsuario.findOneAndUpdate({ senderId: senderID }, Json, { upsert: true }, (err, doc) => { if (err) throw err; });
        Watson.sendUserName(senderID, Json.first_name);
        //} else {
        Watson.callWatsonAPI(senderID, message);
        //}
    } else {
        console.log("Error postback");
    }
}

function sendMessageTextAndButtons(recipientId, text, buttons) {
    var messageData = {
        recipient: {
            id: recipientId
        },
        message: {
            "text": text,
            "quick_replies": buttons
        }
    };
    callSendAPI(messageData);
}

function sendMessageTextAndTemplate(recipientId, text, buttons) {
    var messageData = {
        recipient: {
            id: recipientId
        },
        message: {
            "attachment": {
                "type": "template",
                "payload": {
                    "template_type": "button",
                    "text": text,
                    "buttons": buttons
                }
            }
        }
    };
    callSendAPI(messageData);
}

function sendMessageTextAndMenu(recipientId, text, menu) {
    var messageData = {
        recipient: {
            id: recipientId
        },
        message: {
            "attachment": {
                "type": "template",
                "payload": {
                    "template_type": "button",
                    "text": text,
                    "buttons": menu
                }
            }
        }
    };
    callSendAPI(messageData);
}

function sendVideo(recipientId, elements) {
    var messageData = {
        recipient: {
            id: recipientId
        },
        "message": {
            "attachment": {
                "type": "template",
                "payload": {
                    "template_type": "media",
                    "elements": elements
                }
            }
        }
    };
    callSendAPI(messageData);
}

function sendImage(recipientId, urlImage) {
    var messageData = {
        recipient: {
            id: recipientId
        },
        message: {
            "attachment": {
                "type": "image",
                "payload": { "url": urlImage }
            }
        }
    };
    callSendAPI(messageData);
}

function sendMessageImageAndButtons(recipientId, urlImage, jsonButtons) {
    var messageData = {
        recipient: {
            id: recipientId
        },
        message: {
            "attachment": {
                "type": "image",
                "payload": { "url": urlImage }
            },
            "quick_replies": [jsonButtons]
        }
    };
    callSendAPI(messageData);
}

function receivedData(req, res) {
    var data = req.body;
    if (data.object === 'page') {
        data.entry.forEach(function(entry) {
            var pageID = entry.id;
            var timeOfEvent = entry.time;
            entry.messaging.forEach(function(event) {
                if (event.message) {
                    receivedMessage(event);
                } else if (event.postback) {
                    receivedPostback(event);
                }
            });
        });
        res.sendStatus(200);
    }
}

module.exports = {
    veryfyToken,
    sendTextMessage,
    sendMessageTextAndButtons,
    sendMessageTextAndMenu,
    sendMessageImageAndButtons,
    sendImage,
    sendVideo,
    sendMessageTextAndTemplate,
    receivedData
};