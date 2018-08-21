var app = require('./Rutas/Rutas.js');
var message = require('./Procesar mensaje/SendMessagesAll.js');

var port = process.env.PORT || 8080;
app.listen(port, function(){
	console.log('Api REST corriendo en http://localhost:' + port);
	//message.sendMessagesAll();
});