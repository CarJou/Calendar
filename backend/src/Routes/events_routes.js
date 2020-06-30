const express = require("express");
const router = express.Router();
const conexion = require("../connection");

const events = [
  {
    id: 1,
    titulo: "Reunion",
    descripcion: "Mañana por la mañana",
    participantes: "Facu",
  },
  {
    id: 2,
    titulo: "Dentista",
    descripcion: "Ir al abasto",
    participantes: "Pablo",
  },

  {
    id: 3,
    titulo: "Call",
    descripcion: "Conectarme a la tarde",
    participantes: "Facu y Diego",
  },
];

router.get("/", (req, res) => {
  let sql = `SELECT events_id AS id, events_titulo AS titulo, 
  events_descripcion AS descripcion, events_participantes AS participantes
  FROM events`;
                       
  conexion.query(sql, function(err, result, fields){
      if (err) throw err;
      res.json(result);
  })
})


router.get("/user/:id", (req, res) => {
  const eventosUsuario = [
    {
      id: 2,
      titulo: "Dentista",
      descripcion: "Ir al abasto",
      participantes: "Pablo",
    },
  ];
  res.json(eventosUsuario);
});


router.post("/", (req, res) => {

  

let sqlInsert = `INSERT INTO events(events_titulo, events_descripcion, events_participantes)
VALUES(
    '${req.body.eventsTitulo}',
    '${req.body.eventsDescripcion}',
    '${req.body.eventsParticipantes}'
    

)`;
conexion.query(sqlInsert, function(err, result, fields){
    if ( err ) { 
        res.json(
            {
                status : 'error',
                message : 'Error al realizar la publicación'
            }
        )
    }else{
        res.json(
            {
                status : 'ok',
                message : 'Publicación realizada correctamente'
            }
        )
    }
})

})
//res.send({ status: "testing..." });

/*router.get('/:id', (req, res) => {
    
    let events =  productos.filter( events => events.id == req.params.id );
                    
    if (events.length == 1){
        events = events[0];
    }

    res.json(events);

})
*/

 
module.exports = router;
