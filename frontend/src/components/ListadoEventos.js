import React, { useState, useEffect } from "react";
import Row from "react-bootstrap/Row";
import CardEvent from "./CardEvent";
import NavBarMisEventos from './NavBarMisEventos';
import EventsModal from './EventsModal'
import Swal from "sweetalert2";


const ListadoEventos = (props) => {
  const [events, setEvents] = useState([]);


  const [showEventsModal, setShowEventsModal ] = useState(false);

  const [ selectedEvents, setSelectedEvents ] = useState(null);


  const handleHideEventsModal = ()=>{
      setSelectedEvents(null);
      setShowEventsModal(false);
  }

const onShowEventsModal = ()=>{
  setSelectedEvents(null);
  setShowEventsModal(true);
}


  const handleEventsSaved = (message) => {
    setShowEventsModal(false);
    cargarListadoEventos();

    Swal.fire({
      text: message,
      icon: "success",
      button: "Aww yiss!"
    });
  };

  let endpoint = "events";

  if (props.user && props.type === "miseventos") {
    endpoint = "events/user/" + props.user.id;
  }

  const cargarListadoEventos = () => {
    fetch(`http://localhost:8888/${endpoint}`)
      .then((response) => response.json())
      .then((data) => {
        setEvents(data);
      });
  };

  useEffect(cargarListadoEventos, []);

  const handleEditClick = (idEvents) => {
    setSelectedEvents(idEvents);
    setShowEventsModal(true);
  };


  return (
      <>
      { props.type === 'miseventos' &&  ( 
      <NavBarMisEventos handleShowEventsModal={onShowEventsModal}/> 
)}
    <Row className="m-4">

      {
      events.map( (events) =>{
          return(

<CardEvent
        
        titulo={events.titulo}
        descripcion={events.descripcion}
        participantes={events.participantes}
        id={events.id}
        type={props.type}
        onEditClick={handleEditClick}
      />
          )
      }
      )
      }

      
    </Row>


    <EventsModal show={showEventsModal}
    handleHide={handleHideEventsModal}
    onEventsSaved={handleEventsSaved}
    idEvents={selectedEvents}
    />


    </>

  );
};
export default ListadoEventos;
