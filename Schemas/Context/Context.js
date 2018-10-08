var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Context;
var url = 'mongodb://JonyD:JDmorales#0131@trabajo-terminal-shard-00-00-jjpal.mongodb.net:27017,trabajo-terminal-shard-00-01-jjpal.mongodb.net:27017,trabajo-terminal-shard-00-02-jjpal.mongodb.net:27017/test?ssl=true&replicaSet=trabajo-terminal-shard-0&authSource=admin';

mongoose.connect(url, (error) => {
    if (error) {
        console.log("Error context: " + error);
    } else {
        console.log("Conexion context exitosa")
    }
});

var schema = new Schema({ senderId: "" }, { strict: false });
var Context = mongoose.model("Context", schema);
module.exports.Context = Context;