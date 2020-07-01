import React, { useEffect, useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";

import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);

require("moment/locale/es.js");

export default (props) => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:8888/events/statics/pubscalendar/${props.user.id}`)
      .then((response) => response.json())
      .then((data) => {
        setEvents(data);
      });
  }, []);
  const myEventsList= [{
    title: "today",
    start: new Date('2019-05-05 10:22:00'),
    end: new Date('2019-05-05 10:42:00')
  },
  {
    title: "string",
     start: new Date('2019-05-05 12:22:00'),
    end: new Date('2019-05-05 13:42:00')
  }]
 

  return (
    <>
      

      <Row className="mx-0 my-5">
        <Col className="d-flex justify-content-center">
          <Calendar
            localizer={localizer}
            events={events}
            style={{ width: "75vw", height: "85vh" }}
            startAccessor="start"
            endAccessor="end"
            messages={{
              next: "Siguiente",
              previous: "Anterior",
              today: "Hoy",
              month: "Mes",
              week: "Semana",
              day: "Día",
            }}
            
          />
        </Col>
      </Row>
    </>
  );
};
