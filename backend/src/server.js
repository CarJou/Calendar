const express = require('express');
const cors = require('cors');
const app = express();

app.use( cors ({
    credentials: true,
    origin: 
}
))
const events = [

    {
        id: 1,
        titulo: "Reunion",
        descripcion: "Mañana por la mañana",
        participantes: "Facu"
    }, 
    {
    id: 2,
        titulo: "Dentista",
        descripcion: "Ir al abasto",
        participantes: "Pablo"
},

{
    id: 2,
        titulo: "Call",
        descripcion: "Conectarme a la tarde",
        participantes: "Facu y Diego"
}
]

app.get('/events', (req, res) => {
    res.json(events);
})

app.listen(8888, ()=>{console.log('escuchando...')} );