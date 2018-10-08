var buttonTypeQuick = [{
    "content_type": "text",
    "title": "TT1",
    "payload": "TT1"
}];

var buttonTypeMenu = [{
    type: "postback",
    title: "TT",
    payload: "TT"
}];

var menuPrincipal = [{
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
    }
];

var opciones = [{
        "content_type": "text",
        "title": "Requisitos",
        "payload": "REQUISITOS"
    },
    {
        "content_type": "text",
        "title": "Inscriciones",
        "payload": "INSCRIPCION"
    },
    {
        "content_type": "text",
        "title": "Otra",
        "payload": "Otra"
    }
];

module.exports = {
    menuPrincipal,
    opciones
}