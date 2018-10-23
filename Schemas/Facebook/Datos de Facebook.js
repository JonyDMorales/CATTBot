var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var DatosF;

var url = 'mongodb://JonyD:JDmorales#0131@trabajo-terminal-shard-00-00-jjpal.mongodb.net:27017,trabajo-terminal-shard-00-01-jjpal.mongodb.net:27017,trabajo-terminal-shard-00-02-jjpal.mongodb.net:27017/cattbot?ssl=true&replicaSet=trabajo-terminal-shard-0&authSource=admin';

mongoose.createConnection(url, (error) => {
    if (error) {
        console.log("Error db facebook: " + error);
    } else {
        console.log("Conexion datos de facebook exitosa")
    }
});

var schema = new Schema({}, { strict: false });
var DatosF = mongoose.model("facebookData", schema);
module.exports.DatosF = DatosF;