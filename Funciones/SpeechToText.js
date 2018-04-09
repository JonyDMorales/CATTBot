var SpeechToTextV1 = require('watson-developer-cloud/speech-to-text/v1');
var SendMessage = require('../Procesar mensaje/SendMessage.js');
var download = require('download');
var fs = require('fs');
var wav = require('wav');
var path = require('path');

var speech_to_text = new SpeechToTextV1 ({
    username: '262a64df-3191-401b-9842-b43cc26bbcc6',
  	password: 'QrzNzTe8XxJP'
});

var params = {
	model: 'es-ES_BroadbandModel',
	content_type: 'audio/wav',
	'interim_results': true,
	'max_alternatives': 3,
	'word_confidence': false,
	timestamps: false
};

var recognizeStream = speech_to_text.createRecognizeStream(params);

recognizeStream.pipe(fs.createWriteStream('transcription.txt'));

recognizeStream.setEncoding('utf8');

recognizeStream.on('data', function(event) { onEvent('Data:', event); });

function onEvent(name, event) {
	console.log(name + '   '+ event);
};

function sendVoice(senderID,url){	
	try {	
		console.log();
		console.log(url);
		console.log();


		SendMessage.processMessage(senderID, '¡Ya casi esta listo!, ahora escribe del nombre de tu marca. :)');
		/*
		var absolutePath = path.resolve('Funciones/Audio'); 
		
		download(url).then(data => {
		    fs.writeFileSync(absolutePath + '/audio.wav', data);
		    
		    var reader = new wav.Writer(); 
		
			reader.on('format', function (format) {
				console.log('Entro1');	 
			});
			var file = fs.createReadStream(absolutePath +'/audio.wav');
			file.pipe(data);
		    console.log('Entro2');
		});
		

		fs.createReadStream(absolutePath + '/audio.mp3').pipe(recognizeStream);
		*/
	} catch (e) {
		console.log(e);
	}
}

module.exports = {
	sendVoice
}