var buttonContinuar = [
    {
        "content_type":"text",
        "title":"Salir",
        "payload": "SALIR"
    },{
        "content_type":"text",
        "title":"Continuar",
        "payload":"CONTINUAR"
}];

var buttonSalir = [{
    "content_type":"text",
    "title":"Salir",
    "payload":"SALIR"
}];

var videoSaludoMax = [{
    "media_type": "video",
    "url": "https://www.facebook.com/fractal.abogados/videos/1148624918601497/"
}];

var videoMaxDespedida = [{
    "media_type": "video",
    "url": "https://www.facebook.com/fractal.abogados/videos/1148628741934448/"
}];

var buttonSINO = [{
        "content_type":"text",
        "title":"No",
        "payload": "NO"
    },{
        "content_type":"text",
        "title":"Si",
        "payload":"CONTINUAR"
}];

var menuOpciones = [{
    "type":"web_url",
    "url":"https://docs.google.com/forms/d/e/1FAIpQLSfjSiX1hNjMum5EYGI-WG2xnXBHTe3hw4IcrabUrZkXJjckqA/viewform",
    "title":"Encuesta"
}];

var urlArticulo = [{
    "type":"web_url",
    "url":"http://www.fractalabogados.com/me-despidieron-de-mi-trabajo-ahora-que-hago/",
    "title":"Leer artículo"
}];

var menuRedesSociales = [
    {"type":"web_url",
    "url":"https://www.facebook.com/fractal.abogados/",
    "title":"Facebook"},
    {"type":"web_url",
    "url":"http://www.fractalabogados.com/",
    "title":"Página web"},
    {"type":"postback",
    "title":"Regresar",
    "payload":"HOLA"}
];

var menuTipos = [
    {"type":"postback",
    "title":"Logo",
    "payload":"LOGO"},
    {"type":"postback",
    "title":"Nombre",
    "payload":"NOMBRE"},
    {"type":"postback",
    "title":"Logo y nombre",
    "payload":"LOGO Y NOMBRE"}
];

var menuProducto = [
    {"type":"postback",
    "title":"Producto",
    "payload":"PRODUCTO"},
    {"type":"postback",
    "title":"Servicio",
    "payload":"SERVICIO"},
    {"type":"postback",
    "title":"Ambos",
    "payload":"AMBOS"}
];

var buttonUNOMAS = [{
        "content_type":"text",
        "title":"uno",
        "payload": "1"
    },{
        "content_type":"text",
        "title":"Más de una",
        "payload":"2"
}];

var menuTerminos = [{
    "type":"web_url",
    "url":"",
    "title":"Terminos y Condiciones"
}];

var buttonDudas = [{
        "content_type":"text",
        "title":"No",
        "payload": "NO"
    },{
        "content_type":"text",
        "title":"Tengo dudas",
        "payload":"DUDAS"
    },{
        "content_type":"text",
        "title":"Si",
        "payload":"SI"
}];

var menuSkype = [{
    "type":"web_url",
    "url":"http://www.fractalabogados.com/contacto/",
    "title":"Agendar Cita"
}];

var buttonEmpresaOut = [{
        "content_type":"text",
        "title":"Empresa",
        "payload": "EMPRESA"
    },{
        "content_type":"text",
        "title":"Outsourcing",
        "payload":"OUTSORCING"
}];

var template = [{
        "content_type":"text",
        "title":"Registrar Marca",
        "payload": "MARCA"
    },{
        "content_type":"text",
        "title":"Liquidacion(Despido)",
        "payload":"LIQUIDACION"
    },{
        "content_type":"text",
        "title":"Finiquito(Renunciar)",
        "payload":"FINIQUITO"
    },{
        "content_type":"text",
        "title":"Aguinaldo",
        "payload":"AGUINALDO"
    },{
        "content_type":"text",
        "title":"Vacaciones",
        "payload":"VACACIONES"
}];
/*
var buttonComprar = [{
    "type":"payment",
    "title":"Pagar",
    "payload":"PAGO",
    "payment_summary":{
        "currency":"<CURRENCY_ABBREVIATION>",
        "payment_type":"FLEXIBLE_AMOUNT",
        "is_test_payment": true, 
        "merchant_name":"Servicios Profesionales",
        "requested_user_info":[
            "finanzas@fractalabogados.com",
            "Fractal Abogados",
            "contact_phone",
            "hola@fractalabogados.com"
        ],
        "price_list":[{
            "label":"Pagar Marca",
            "amount":"$2,5000"
        }]
    }
}];
*/
var buttonComprar = [{
    "type":"web_url",
    "url":"paypal.me/fractalabogados",
    "title":"Pagar"
}];

/*
var template = [
    {   
        title: "Registro de Marcas",
        subtitle: "Existen cuatro tipos de marcas: nominativa, innominada, tridimensional y mixta.",           
        image_url: "http://files.fractalabogados.webnode.mx/200000109-93f4d94ef1/450/FARegistroMarca.png",
        buttons: [{
            type: "web_url",
            url: "http://www.fractalabogados.com/",
            title: "Más sobre Fractal"
        }, {
            type: "postback",
            title: "Marca",
            payload: "MARCA",
        }]
    },{
        title: "Liquidación (Despido)",
        subtitle: "Se compone de: Indemnización más Finiquito y Prima de Antigüedad.",             
        image_url: "http://files.fractalabogados.webnode.mx/200000108-d1796d2746/450/FALiquidacion.png",
        buttons: [{
            type: "web_url",
            url: "http://www.fractalabogados.com/",
            title: "Más sobre Fractal"
        }, {
            type: "postback",
            title: "Liquidación",
            payload: "LIQUIDACION",
        }],
    },{
        title: "Finiquito (Renuncia)",
        subtitle: "Se compone de: Aguinaldo más Vacaciones y Prima Vacacional.",           
        image_url: "http://files.fractalabogados.webnode.mx/200000107-da449db3e1/450/FAFiniquito.png",
        buttons: [{
            type: "web_url",
            url: "http://www.fractalabogados.com/",
            title: "Más sobre Fractal"
        }, {
            type: "postback",
            title: "Finiquito",
            payload: "FINIQUITO",
        }]
    },{
        title: "Vacaciones",
        subtitle: "¿Cuántos días me corresponden por ley?",           
        image_url: "http://files.fractalabogados.webnode.mx/200000110-5671c576a0/450/FAVacaciones.png",
        buttons: [{
            type: "web_url",
            url: "http://www.fractalabogados.com/",
            title: "Más sobre Fractal"
        }, {
            type: "postback",
            title: "Vacaciones",
            payload: "VACACIONES",
        }]
    },{
        title: "Aguinaldo",
        subtitle: "¿Cuántos días de aguinaldo se deben pagar y en qué fechas se deben pagar?",           
        image_url: "http://files.fractalabogados.webnode.mx/200000106-8646287403/FAAguinaldo.jpg",
        buttons: [{
            type: "web_url",
            url: "http://www.fractalabogados.com/",
            title: "Más sobre Fractal"
        }, {
            type: "postback",
            title: "Aguinaldo",
            payload: "AGUINALDO",
        }]
    }
];
*/
module.exports = {
    buttonContinuar,
    buttonSalir,
    buttonSINO,         
    menuOpciones,
    menuRedesSociales,
    menuTipos,
    menuProducto,         
    buttonUNOMAS,
    menuTerminos,
    buttonDudas,      
    menuSkype,
    buttonEmpresaOut,
    template,
    videoSaludoMax,
    videoMaxDespedida,
    buttonComprar,
    urlArticulo
}