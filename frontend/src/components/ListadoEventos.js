import React, { useState, useEffect } from "react";
import Row from "react-bootstrap/Row";
import CardEvent from "./CardEvent";
import NavBarMisEventos from './NavBarMisEventos';
import EventsModal from './EventsModal'

const ListadoEventos = (props) => {
  const [events, setEvents] = useState([]);


  const [showEventsModal, setShowEventsModal ] = useState(false);

  const handleHideEventsModal = ()=>{
      setShowEventsModal(false);
  }

const onShowEventsModal = ()=>{
  setShowEventsModal(true);
}

  let endpoint = 'events';

  if ( props.user && props.type === 'miseventos'){
      endpoint = 'events/user/' + props.user.id;
  }


  useEffect(() => {

    fetch(`http://localhost:8888/${endpoint}`)
   .then((response) => response.json())
      .then((data) => {
        setEvents(data);
      });
  }, []
  );

  return (
      <>
      { props.type === 'miseventos' && 
      <NavBarMisEventos handleShowEventsModal={onShowEventsModal}/> }

    <Row className="m-4">

      {
      events.map( events =>{
          return(

<CardEvent
        
        titulo={events.titulo}
        descripcion={events.descripcion}
        participantes={events.participantes}
        id={events.id}
        type={props.type}
      />
          )
      }
      )
      }

      
    </Row>


    <EventsModal show={showEventsModal}
    handleHide={handleHideEventsModal}
    />


    </>

  );
};
export default ListadoEventos;
