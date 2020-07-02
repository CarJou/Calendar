import React, {useState, useEffect} from 'react';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Swal from 'sweetalert2';

export default props =>{

    const [eventsTitulo, setEventsTitulo]   = useState('');
    const [eventsDescripcion, setEventsDescripcion] = useState('');
    const [eventsParticipantes, setEventsParticipantes] = useState('');
    const [eventsFecha, setEventsFecha] = useState('');
    const [eventsHora, setEventsHora] = useState('');


    const handleEventsTituloChange = event => {
        setEventsTitulo( event.target.value );
    }

    const handleEventsDescripcionChange = event => {
        setEventsDescripcion( event.target.value );
    }

    const handleEventsParticipantesChange = event => {
        setEventsParticipantes( event.target.value );

    }

    const handleEventsFechaChange = event =>{
        setEventsFecha( event.target.value);
    }
 
    const handleEventsHoraChange = event =>{
        setEventsHora( event.target.value);
    }
    const handleSave = ()=>{

        const formData = new FormData();

        formData.append('eventsTitulo', eventsTitulo);
        formData.append('eventsDescripcion', eventsDescripcion);
        formData.append('eventsParticipantes', eventsParticipantes);
        formData.append('eventsFecha', eventsFecha);

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
                Swal.fire({
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
                        setEventsFecha(data.fecha);
                    }
                )

            }
            else{
                setEventsTitulo('');
                setEventsDescripcion('');
                setEventsParticipantes('');
                setEventsFecha('');
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

                    <Form.Group>
                        <Form.Label>Fecha</Form.Label>
               <Form.Control 
                       type="date"
                       
                        value={eventsFecha}
                     onChange={handleEventsFechaChange}
                 
                />
</Form.Group>
             <Form.Group>
                        <Form.Label>Hora</Form.Label>
               <Form.Control 
                       type="time"
                        
                        value={eventsHora}
                        onChange={handleEventsHoraChange}
                        
                  />

</Form.Group>



                </Form>


</Modal.Body>
            

            <Modal.Footer>
                <Button variant="secondary">
                    Cancelar
                </Button>

                <Button variant="success"
                        onClick={ handleSave }

                >
                  
                    Guardar
                </Button>

            </Modal.Footer>
        
        </Modal>
        
    )

}

