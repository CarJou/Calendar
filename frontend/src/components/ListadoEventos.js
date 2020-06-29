import React, {useState, useEffect} from "react";
import Row from "react-bootstrap/Row";
import CardEvent from './CardEvent';

const ListadoEventos = () =>{


   const [events, setEvents] = useState([])

  useEffect( ()=>{
     fetch('http://localhost:8888/events');
  })


    return(

        <Row className="m-4">
            
            <CardEvent titulo="Reunion"
            descripcion="Mañana por la mañana"
            id="1"/>
{/*
            <CardEvent titulo="Dentista"
            descripcion="Ir al abasto"/>

            <CardEvent titulo="Call"
            descripcion="Conectarme por la mañana"
            participantes="Facu y Diego"/> */}
        </Row>
    );
}
export default ListadoEventos;