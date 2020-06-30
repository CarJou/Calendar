const express = require('express');
const router = express.Router();


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
    id: 3,
        titulo: "Call",
        descripcion: "Conectarme a la tarde",
        participantes: "Facu y Diego"
}
]



router.get('/', (req, res) => {
    res.json(events);
})

router.get('/:id', (req, res) => {
    
    let events =  productos.filter( events => events.id == req.params.id );
                    
    if (events.length == 1){
        events = events[0];
    }

    res.json(events);

})

module.exports = router;