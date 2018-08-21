var menuPrincipal = [{
        type: "postback",
        title: "TT1",
        payload: "TT1"
    },
    {
        type: "postback",
        title: "TT2",
        payload: "TT2"
    },
    {
        type: "postback",
        title: "Protocolo",
        payload: "PROTOCOLO"
    },
    {
        type: "postback",
        title: "Electiva",
        payload: "ELECTIVA"
    },
    {
        type: "web_url",
        title: "Facebook Page",
        url: "https://www.facebook.com/escom.iscipn.9/",
    }
];

var templete = [{
    title: "Trabajo Terminal 1",
    subtitle: "Trabajo terminal uno.",
    image_url: "",
    buttons: [{
        type: "postback",
        title: "Duda sobre TT1",
        payload: "TT1"
    }]
}, {
    title: "Trabajo Terminal 2",
    subtitle: "Trabajo terminal dos.",
    image_url: "",
    buttons: [{
        type: "postback",
        title: "Duda sobre TT2",
        payload: "TT2"
    }]
}, {
    title: "Protocolo",
    subtitle: "Protocolo",
    image_url: "",
    buttons: [{
        type: "postback",
        title: "Protocolo",
        payload: "PROTOCOLO"
    }]
}, {
    title: "Pagina de facebook",
    subtitle: "Pagina de facebook de la CATT",
    image_url: "",
    buttons: [{
        type: "web_url",
        title: "Facebook",
        url: "https://www.facebook.com/escom.iscipn.9/",
    }]
}];

module.exports = {
    menuPrincipal,
    templete
}