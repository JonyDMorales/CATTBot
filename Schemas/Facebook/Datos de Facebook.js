var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var DatosF;
var assert = require('assert');
var fs = require('fs');
var ca = [ fs.readFileSync(__dirname + "/servercert.crt") ];
var url = 'mongodb://admin:EWADCGVLKCMXKZZA@sl-us-south-1-portal.16.dblayer.com:30271,sl-us-south-1-portal.17.dblayer.com:30271/DatosF?authSource=admin&ssl=true';
//var url = 'mongodb://JonyD:1234@ds131621.mlab.com:31621/context';
var options = {
    mongos: {
      ssl: true,
      sslValidate: true,
      sslCA: ca
    }
}

mongoose.createConnection(url, options, (error)=>{
	if(error) {
        console.log("Error db facebook: " + error);    
    }else{
        console.log("Conexion datos de facebook exitosa")
    }
});

var schema = new Schema({}, { strict: false });
var DatosF = mongoose.model("facebookData",schema);
module.exports.DatosF = DatosF;