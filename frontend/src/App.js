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


const onLogout = ()=>{

    let url = 'http://localhost:8888/auth';

    fetch(url, {
                  method: 'DELETE',
                  credentials : 'include'
               }
    ).then( response => response.json() )
     .then( data => {
                      setUsuario(null);
                    }
     )

  }


  return (
    <>
    <Router>


    <NavBar user={usuario}
            handleLoginSuccess = {onLoginSuccess}
            handleLogout = {onLogout}/>


<Switch>
<Route exact path='/'
children={
  <>
    <Slider/>
    <ListadoEventos type="eventos"/>
    
    </>
}
/>

<Route exact path="/miseventos"
children={
  <ListadoEventos
  type="miseventos" 
  user={usuario}/>
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
