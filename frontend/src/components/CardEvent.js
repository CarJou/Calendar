import React from "react";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import save from '../save.png';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'



export default (props) =>{ 

  const handleEditClick = ()=>{
    props.onEditClick( props.id );
  }

  const handleDeleteClick = ()=>{
    props.onDeleteClick( props.id );
  }


  return( 

   
      <Col
        md={4}
        lg={3}
        xl={3}
        className="mb-5 text-center d-flex align-items-stretch justify-content-center"
      >
        <Card> 

        <Card.Body>
           


            
              <Card.Title
                style={{ fontSize: "2rem" }}
                className="mb-2 text-center"
              >
               {props.titulo}
              </Card.Title>

            

            <Card.Text
              style={{ fontSize: "1rem" }}
              className="mb-2 text-center p-2"
            >
             {props.descripcion}
            </Card.Text>

            <Card.Text
              style={{ fontSize: "1rem" }}
              className="mb-2 text-center p-2"
            >
             {props.participantes}
            </Card.Text>


          </Card.Body>

          <Card.Footer className="text-center"></Card.Footer>

         { props.type === 'miseventos' &&
          <Row className="my-2">
          <Col>
              <Button className="m-2" variant="light"
              onClick={handleEditClick}>
                  <FontAwesomeIcon color="green" icon={faEdit} />
              </Button>

              <Button className="m-2" variant="light"
              onClick={handleDeleteClick}>
                  <FontAwesomeIcon color="red" icon={faTrash} />
              </Button>
          </Col>
      </Row>
         }
        </Card>
      </Col>
      )}