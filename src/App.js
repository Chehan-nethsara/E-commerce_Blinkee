import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from "./component/navbar";
import home from './component/home';
import Contactus from './component/contactus';
import './App.css';
import cart from "./component/cart";
import about_us from "./component/about_us";
import product from "./component/product";
import productPage from "./component/productPage";


import cartPage from "./component/cartPage";

import register from "./component/register";


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
        <Route exact path= '/cartPage' component={cartPage} />


        <Route exact path= '/register' component={ register } />

        <Route exact path='/contactus' component={ Contactus } />

      </Switch>

      <header className="App-header">

      </header>
    </div>
      </BrowserRouter>
  );
}

export default App;
