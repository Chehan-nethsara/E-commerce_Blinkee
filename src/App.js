import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Navbar from "./component/navbar";
import home from './component/home';
import './App.css';
import cart from "./component/cart";
import about_us from "./component/about_us";
import product from "./component/product";
import productPage from "./component/productPage";

function App() {
  return (
      <BrowserRouter>
    <div className="App">
      <Switch>
        <Route exact path= '/home'component={ home } />
        <Route exact path='/navbar' component={ Navbar } />
        <Route exact path= '/cart' component={ cart } />
        <Route exact path= '/about_us' component={ about_us } />
        <Route exact path= '/product' component={product} />
        <Route exact path= '/productPage' component={productPage} />
      </Switch>

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.

        </p>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
      </BrowserRouter>
  );
}

export default App;
