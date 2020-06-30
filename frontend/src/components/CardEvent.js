import React from "react";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import save from '../save.png';
import {Link} from 'react-router-dom';


export default (props) => 
      <Col
        md={4}
        lg={3}
        xl={2}
        className="mb-4 d-flex align-items-stretch justify-content-center"
      >
        <Card>
          <Card.Body>
             <a className="nav-link p-0 text-right">
                 <img src={save}></img>
             </a>



            
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

         
        </Card>
      </Col>
    //<Link to={"/events/" + props.id} className="nav-link p-0"> 