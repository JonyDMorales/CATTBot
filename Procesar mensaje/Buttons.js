var docsProtocolo = [
    {
      "type":"web_url",
      "url":"http://www.isc.escom.ipn.mx/docs/catt/formProtocolo.doc",
      "title":"Formato de Protocolo"
    },
    {
      "type":"web_url",
      "url":"http://www.isc.escom.ipn.mx/docs/catt/evalFormProtocolo.doc",
      "title":"Evaluación de Protocolo"
    }
];

var docsTT1 = [
    {
      "type":"web_url",
      "url":"http://www.isc.escom.ipn.mx/docs/catt/solicitudCambioTT.pdf",
      "title":"Solicitud de modificación"
    },
    {
        "type":"web_url",
        "url":"http://www.isc.escom.ipn.mx/docs/catt/formatoCambioFechaPresTT.docx",
        "title":"Cambio de fecha"
    },
    {
        "type":"web_url",
        "url":"http://www.isc.escom.ipn.mx/docs/catt/acuseSinodales2017.doc",
        "title":"Acuse"
    }
];

var docTTCambioFecha = [
    {
      "type":"web_url",
      "url":"http://www.isc.escom.ipn.mx/docs/catt/formatoCambioFechaPresTT.docx",
      "title":"Cambio de fecha"
    }
];

var docTTAcuse = [
    {
      "type":"web_url",
      "url":"http://www.isc.escom.ipn.mx/docs/catt/acuseSinodales2017.doc",
      "title":"Acuse"
    }
];

var docTTContenido = [
    {
      "type":"web_url",
      "url":"http://www.isc.escom.ipn.mx/docs/catt/requisitos_TTI_20191.pdf",
      "title":"Contenido"
    }
];

var docTT2Contenido = [
    {
      "type":"web_url",
      "url":"http://www.isc.escom.ipn.mx/docs/catt/requisitos_TTIIR_20191.pdf",
      "title":"Contenido"
    }
];

var docFechas = [
    {
      "type":"web_url",
      "url":"http://www.isc.escom.ipn.mx/docs/catt/calEvaluaciones2019_1.pdf",
      "title":"Fechas"
    }
];

var menuPrincipal = [
    {
        "content_type": "text",
        "title": "Protocolo",
        "payload": "PROTOCOLO"
    },
    {
        "content_type": "text",
        "title": "TT1",
        "payload": "TT1"
    },
    {
        "content_type": "text",
        "title": "TT2",
        "payload": "TT2"
    },
    {
        "content_type": "text",
        "title": "TTR",
        "payload": "TTR"
    }, 
    {
        "content_type": "text",
        "title": "Electiva",
        "payload": "MATERIA ELECTIVA"
    }
];

var opciones = [
    {
        "content_type": "text",
        "title": "Requisitos",
        "payload": "REQUISITOS"
    },
    {
        "content_type": "text",
        "title": "Inscripción",
        "payload": "INSCRIPCION"
    },
    {
        "content_type": "text",
        "title": "Documentos",
        "payload": "DOCUMENTOS"
    },
    {
        "content_type": "text",
        "title": "Otra",
        "payload": "Otra"
    }
];

var opcionesTT = [{
    "content_type": "text",
    "title": "Requisitos",
    "payload": "REQUISITOS"
},
{
    "content_type": "text",
    "title": "Inscripción",
    "payload": "INSCRIPCION"
},
{
    "content_type": "text",
    "title": "Documentos",
    "payload": "DOCUMENTOS"
},
{
    "content_type": "text",
    "title": "Presentación",
    "payload": "PRESENTACION"
},
{
    "content_type": "text",
    "title": "Otra",
    "payload": "Otra"
}
];

module.exports = {
    menuPrincipal,
    opcionesTT,
    docsProtocolo,
    docFechas,
    docTTCambioFecha,
    docTTAcuse,
    docsTT1,
    docTTContenido,
    docTT2Contenido,
    opciones
}