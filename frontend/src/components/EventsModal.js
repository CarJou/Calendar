import React, {useState, useEffect} from 'react';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Swal from 'sweetalert2';

export default props =>{

    const [eventsTitulo, setEventsTitulo]   = useState('');
    const [eventsDescripcion, setEventsDescripcion] = useState('');
    const [eventsParticipantes, setEventsParticipantes] = useState('');
    

    const handleEventsTituloChange = event => {
        setEventsTitulo( event.target.value );
    }

    const handleEventsDescripcionChange = event => {
        setEventsDescripcion( event.target.value );
    }

    const handleEventsParticipantesChange = event => {
        setEventsParticipantes( event.target.value );

    }

    const handleSave = ()=>{

        const formData = new FormData();

        formData.append('eventsTitulo', eventsTitulo);
        formData.append('eventsDescripcion', eventsDescripcion);
        formData.append('eventsParticipantes', eventsParticipantes);

        let url    = 'http://localhost:8888/events';
        let method = 'POST';

        if ( props.idEvents ){
            url += '/' + props.idEvents;
            method = 'PUT';
        }

        fetch( url, {
            method: method,
            body: formData,
            credentials: 'include'
        })
        .then( response => response.json() )
        .then( data => {
            
            if ( data.status === 'ok' ){
                props.onEventsSaved(data.message);
            }
            else{
                Swal.fir({
                    text: data.message,
                    icon: 'error'
                })
              
            }

        })
        .catch( error => {
            console.log('Error');
        })
    }

    useEffect(
        ()=>{
            if (props.idEvents){
                
                fetch(`http://localhost:8888/events/` + props.idEvents).then(
                    response => response.json()
                ).then(
                    data =>{
                        setEventsTitulo(data.titulo);
                        setEventsDescripcion(data.descripcion);
                        setEventsParticipantes(data.participantes);
                    }
                )

            }
            else{
                setEventsTitulo('');
                setEventsDescripcion('');
                setEventsParticipantes('');
                
            }
        }, [props.idEvents]
    )

    return (
        <Modal show={props.show} onHide={props.handleHide}>

            <Modal.Header closeButton>
                <Modal.Title>Nuevo evento</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                
                <Form>

                    <Form.Group>
                        <Form.Label>Titulo</Form.Label>

                        <Form.Control type="text"
                                      value={eventsTitulo}
                                      onChange={handleEventsTituloChange}
                        />

                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Descripcion</Form.Label>

                        <Form.Control type="text"
                                      value={eventsDescripcion}
                                      onChange={handleEventsDescripcionChange}
                        
                        />
                    </Form.Group>

        

                    <Form.Group>
                        <Form.Label>Participantes</Form.Label>

                        <Form.Control type="text"
                                      value={eventsParticipantes}
                                      onChange={handleEventsParticipantesChange}
                        />
                    </Form.Group>

                </Form>

            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary">
                    Cancelar
                </Button>

                <Button variant="primary"
                        onClick={ handleSave }
                >
                    Guardar
                </Button>

            </Modal.Footer>
        
        </Modal>
    )

}