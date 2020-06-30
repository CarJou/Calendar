import React, { useState, useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useParams } from "react-router-dom";

export default () => {
  let { id } = useParams();

  let [events, setEvents] = useState(null);


  
  useEffect( () => {

    fetch('http://localhost:8888/events/' + id)
    .then( response => response.json()
    ).then(data => {
        setEvents(data);
        console.log(data);
      })
  }, []
  );

  return (

    events &&
     
      <Row className="d-flex justify-content-center">
        <Col md={4}>
          <h1>{events.titulo}</h1>
          <p>{events.descripcion}</p>
          <p>{events.participantes}</p>
        </Col>
      </Row>
    
  );
};
