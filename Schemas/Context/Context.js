var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Context;
var assert = require('assert');
var fs = require('fs');
var ca = [ fs.readFileSync(__dirname + "/servercert.crt") ];
var url = 'mongodb://admin:DEXATOYMUMBLOBQL@sl-us-south-1-portal.12.dblayer.com:30248,sl-us-south-1-portal.13.dblayer.com:30248/Context?authSource=admin&ssl=true';
//var url = 'mongodb://JonyD:1234@ds131621.mlab.com:31621/context';
var options = {
    mongos: {
      ssl: true,
      sslValidate: true,
      sslCA: ca
    }
}

mongoose.connect(url, options, (error)=>{
	if(error) {
        console.log("Error context: " + error);    
    }else{
        console.log("Conexion context exitosa")
    }
});

var schema = new Schema({}, { strict: false });
var Context = mongoose.model("Context",schema);
module.exports.Context = Context;