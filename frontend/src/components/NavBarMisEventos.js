import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

export default props =>
    <Row className="my-3 ml-4 text-center">

        <Col>
            <Button onClick={props.handleShowEventsModal}>
                Nuevo evento
            </Button>
        </Col>

    </Row>