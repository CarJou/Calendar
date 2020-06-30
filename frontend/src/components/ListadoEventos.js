import React, { useState, useEffect } from "react";
import Row from "react-bootstrap/Row";
import CardEvent from "./CardEvent";

const ListadoEventos = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8888/events")
      .then((response) => response.json())
      .then((data) => {
        setEvents(data);
      });
  }, []
  );

  return (
    <Row className="m-4">

      {
      events.map( events =>{
          return(

<CardEvent
        
        titulo={events.titulo}
        descripcion={events.descripcion}
        participantes={events.participantes}
        id={events.id}
      />
          )
      }
      )
      }

      
    </Row>
  );
};
export default ListadoEventos;
