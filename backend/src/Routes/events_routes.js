const express = require('express');
const router = express.Router();
const conexion = require('../connection');
const path = require('path');


router.get("/", (req, res) => {
  let sql = `SELECT events_id AS id, events_titulo AS titulo, 
  events_descripcion AS descripcion, events_participantes AS participantes
  FROM events`;
                       
  conexion.query(sql, function(err, result, fields){
      if (err) throw err;
      res.json(result);
  })
})


router.get('/user/:id', (req, res) => {

    let sql = `SELECT events_id AS id, events_titulo AS titulo, events_descripcion AS descripcion, events_participantes AS
    participantes 
    FROM events
    WHERE user_id = ${req.params.id}`;

    conexion.query(sql, function(err, result, fields){
        if (err) throw err;

        res.json(result);
    })
});

router.get('/:id', (req, res) => {

    let sql = `SELECT events_id AS id, events_titulo AS titulo, events_descripcion AS descripcion, events_participantes AS participantes 
               FROM events 
               WHERE events_id = ${req.params.id}`;

    conexion.query(sql, function(err, result, fields){
        if (err) throw err;

        res.json(result[0]);
    })

})


router.post('/', (req, res) => {

    let sqlInsert = `INSERT INTO events(events_titulo, events_descripcion, events_participantes, user_id)
    VALUES(
        '${req.body.eventsTitulo}',
        '${req.body.eventsDescripcion}',
        '${req.body.eventsParticipantes}',
        '${req.session.userId}'
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

router.put('/:id', (req, res) =>{
    let sqlUpdate = `UPDATE events
    SET events_titulo = ?,
     events_descripcion = ?,
     events_participantes = ?`; 
    
     let values = [ 
         req.body.eventsTitulo,
        req.body.eventsDescripcion,
        req.body.eventsParticipantes,
        
        ];

        sqlUpdate += ' WHERE events_id = ?';
    values.push( req.params.id );

    conexion.query(sqlUpdate, values, function(err, result, fields){
        if ( err ) { 
            res.json(
                {
                    status : 'error',
                    message : 'Error al modificar la publicación'
                }
            )
        }else{
            res.json(
                {
                    status : 'ok',
                    message : 'Publicación modificada correctamente'
                }
            )
        }
    })

})


 
module.exports = router;
