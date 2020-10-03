import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from "./component/navbar";
import home from './component/home';
import Contactus from './component/contactus';
import './App.css';

function App() {
  return (
      <BrowserRouter>
    <div className="App">
      <Switch>
        <Route exact path= '/home'component={ home } />
        <Route exact path='/navbar' component={ Navbar } />
        <Route exact path='/contactus' component={ Contactus } />
      </Switch>

      <header className="App-header">

      </header>
    </div>
      </BrowserRouter>
  );
}

export default App;
