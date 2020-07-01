import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import calendar from "../calendario.png";

export default props =>
    <Row className="my-3 ml-4 text-center">

        <Col>
            <Button onClick={props.handleShowEventsModal} 
            style={{ fontSize: "1.5rem" }}>
            <img
          style={{ height: "3rem", marginRight: "0.8rem" }}
          src={calendar}
        ></img> Nuevo evento
            </Button>
        </Col>

    </Row>