var nodemailer = require('nodemailer');
var fs = require('fs');

function replaceLiquidacion(response, informacion){
    if (response.context.nombre) {
        informacion = informacion.replace('%nombre%',response.context.nombre);
    }else{
        informacion = informacion.replace('%nombre%',' no proporciono su nombre.');
    } 
    
    if (response.context.contratacion) {
        informacion = informacion.replace('%contratacion%',response.context.contratacion);
    } else{
        informacion = informacion.replace('%contratacion%',' no dejo su tipo de contratación');
    }
    
    if (response.context.historia) {
        informacion = informacion.replace('%historia%',response.context.historia);    
    } else{
        informacion = informacion.replace('%historia%',' no dejo su historia.');
    }
    informacion = informacion.replace('%fecha_ingreso%',response.context.fecha_ingreso);
    informacion = informacion.replace('%fecha_baja%',response.context.fecha_baja);
    informacion = informacion.replace('%salario%',response.context.salario);
    informacion = informacion.replace('%liquidacion%',response.context.liquidacion);
    informacion = informacion.replace('%salario_diario%',response.context.salario_diario);
    informacion = informacion.replace('%salario_diario%',response.context.salario_diario);
    informacion = informacion.replace('%salario_integrado%',response.context.salario_diario_integrado);
    informacion = informacion.replace('%indemnizacion%',response.context.indemnizacion);
    informacion = informacion.replace('%prima_antiguedad%', response.context.prima_antiguedad);
    informacion = informacion.replace('%finiquito%', response.context.finiquito);
    informacion = informacion.replace('%aguinaldo%', response.context.aguinaldo);
    informacion = informacion.replace('%vacaciones%', response.context.vacaciones);
    informacion = informacion.replace('%prima_vacacional%', response.context.prima_vacacional);
    
    if (response.context.pago) {
        informacion = informacion.replace('%pago%', response.context.pago);
    } else {
        informacion = informacion.replace('%pago%', ' no dejo si le pagan lo que le corresponde.');
    }

    if (response.context.pago_empresa) {
        informacion = informacion.replace('%pago_empresa%', response.context.pago_empresa);
    } else {
        informacion = informacion.replace('%pago_empresa%', ' no dejo cuanto le pagan.');
    }

    if (response.context.contactar) {
        informacion = informacion.replace('%contactar%', response.context.contactar);
    } else {
        informacion = informacion.replace('%contactar%', ' no dejo si lo quieren contactar.');    
    }    
    
    if (response.context.correo) {
        informacion = informacion.replace('%correo%', response.context.correo);
    } else {
        informacion = informacion.replace('%correo%', ' no dejo su contacto.');
    }
    
    return informacion;
}

function replaceMarca(response, informacion){
    if (response.context.nombre) {
        informacion = informacion.replace('%nombre%',response.context.nombre);
    }else{
        informacion = informacion.replace('%nombre%',' no proporciono su nombre.');
    } 
    informacion = informacion.replace('%marca%',response.context.marca);
    informacion = informacion.replace('%tipo%', response.context.tipos);
    informacion = informacion.replace('%giro%', response.context.giro);
    if (response.context.web) {
        informacion = informacion.replace('%web%', response.context.web);
    } else {
        informacion = informacion.replace('%web%', ' no dejo su página web.');    
    }
    informacion = informacion.replace('%porcentaje%', response.context.porcentaje);
    if (response.context.contactar) {
        informacion = informacion.replace('%contactar%', response.context.contactar);
    } else {
        informacion = informacion.replace('%contactar%', ' no dejo si lo quieren contactar.');    
    }    
    
    if (response.context.correo) {
        informacion = informacion.replace('%correo%', response.context.correo);
    } else {
        informacion = informacion.replace('%correo%', ' no dejo su contacto.');
    }
    return informacion;
}

function replaceFiniquito(response, informacion){
    if (response.context.nombre) {
        informacion = informacion.replace('%nombre%',response.context.nombre);
    }else{
        informacion = informacion.replace('%nombre%',' no proporciono su nombre.');
    } 
    informacion = informacion.replace('%fecha_ingreso%',response.context.fecha_ingreso);
    informacion = informacion.replace('%fecha_baja%',response.context.fecha_baja);
    informacion = informacion.replace('%salario%',response.context.salario);
    informacion = informacion.replace('%finiquito%', response.context.finiquito);
    informacion = informacion.replace('%salario_diario%',response.context.salario_diario);
    informacion = informacion.replace('%aguinaldo%', response.context.aguinaldo);
    informacion = informacion.replace('%vacaciones%', response.context.vacaciones);
    informacion = informacion.replace('%prima_vacacional%', response.context.prima_vacacional);
    if (response.context.pago) {
        informacion = informacion.replace('%pago%', response.context.pago);
    } else {
        informacion = informacion.replace('%pago%', ' no dejo lo que le pagan.');
    }

    if (response.context.contactar) {
        informacion = informacion.replace('%contactar%', response.context.contactar);
    } else {
        informacion = informacion.replace('%contactar%', ' no dejo si lo quieren contactar.');    
    }    
    
    if (response.context.correo) {
        informacion = informacion.replace('%correo%', response.context.correo);
    } else {
        informacion = informacion.replace('%correo%', ' no dejo su contacto.');
    }
    return informacion;
}


function sendData(response){
    var data;
    var informacion;
    if(response.context.liquidacion){
        data = fs.readFileSync('./Procesar mensaje/txt/liquidacion.txt');
        informacion = data.toString();
        informacion = replaceLiquidacion(response, informacion);

    }else if(response.context.marca){
        data = fs.readFileSync('./Procesar mensaje/txt/marca.txt');
        informacion = data.toString();
        informacion = replaceMarca(response, informacion);
        sendDataToEmail('edavila@fractalabogados.com', informacion, 'Consulta Max asesoría');
    }else if(response.context.finiquito){
        data = fs.readFileSync('./Procesar mensaje/txt/finiquito.txt');
        informacion = data.toString();
        informacion = replaceFiniquito(response, informacion);
    }else{
        console.log('Hubo un error.');
    }
    sendDataToEmail('utelles@fractalabogados.com', informacion, 'Consulta Max asesoría');
    sendDataToEmail('asumano@fractalabogados.com', informacion, 'Consulta Max asesoría');
}

function sendDataToEmail(email, text, subject){
    var transporter = nodemailer.createTransport({
        host: 'mail2.webnode.com',
        port: 465,
        secure: true, // true for 465, false for other ports
        auth: {
            user: 'hola@fractalabogados.com',
            pass: 'abogadostic123'
        }
    });

    var mailOptions = {
        from: 'hola@fractalabogados.com',
        to: email,
        subject: subject,
        text: text
    };

    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console.log(error);
        }
    });
}

module.exports = {
    sendData
};