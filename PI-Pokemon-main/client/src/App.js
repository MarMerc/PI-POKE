import React from 'react';
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import LandingPage from './Components/LandingPage.js';
import Home from './Components/Home.js';
import Create from './Components/PokeCreate.js';
import Detail from './Components/Details.js';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path='/' component={LandingPage} />
          <Route path= '/home' component={Home} />  
          <Route path= '/pokemons/:id' component={Detail} />  
          <Route path= '/create' component={Create} />          
        </Switch>    
      </div>
    </BrowserRouter>
  );
}

export default App;
