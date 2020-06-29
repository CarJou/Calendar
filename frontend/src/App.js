import React from 'react';
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
  return (
    <>
    <Router>


    <NavBar user=""/>

<Route exact path='/'
children={
  <>
    <Slider/>
    <ListadoEventos />
    </>
}
/>


    <Switch>

<Route exact path='/events/:id' children={ 

<>
    <EventsDetail />
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
