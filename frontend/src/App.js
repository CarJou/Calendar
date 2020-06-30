import React, {useState} from 'react';
import NavBar from './components/NavBar';
import ListadoEventos from './components/ListadoEventos';
import Slider from './components/Slider';
import EventsDetail from './components/EventsDetail'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';



function App() {

  const [usuario, setUsuario] = useState(null);
  const onLoginSuccess = (loggedUser) =>{
    setUsuario(loggedUser);
  }

  return (
    <>
    <Router>


    <NavBar user={usuario}
            handleLoginSuccess = {onLoginSuccess}/>


<Switch>
<Route exact path='/'
children={
  <>
    <Slider/>
    <ListadoEventos />
    </>
}
/>




</Switch>


</Router>


    </>
  );
}

export default App;

/*
<Route exact path='/events/:id' children={ 


    <EventsDetail />
    

    
}
/>*/
