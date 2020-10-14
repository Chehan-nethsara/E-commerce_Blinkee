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
import discount from "./component/discount";
import feedback from "./component/feedback"
import coupon from "./component/coupon"

import dropshipping from "./component/dropshipping";


function App() {
  return (
      <BrowserRouter>
    <div className="App">
      <Switch>
        <Route exact path= '/home'component={ home } />
        <Route exact path='/navbar' component={ Navbar } />
        <Route exact path= '/register' component={ register } />
        <Route exact path= '/feedback' component={ feedback } />
        <Route exact path= '/coupon' component={ coupon } />

        <Route exact path= '/cart' component={ cart } />
        <Route exact path= '/about_us' component={ about_us } />
        <Route exact path= '/product' component={product} />
        <Route exact path= '/productPage' component={productPage} />
        <Route exact path= '/cartPage' component={cartPage} />


        <Route exact path= '/register' component={ register } />

        <Route exact path='/contactus' component={ Contactus } />
        <Route exact path='/discount' component= {discount } />
        <Route exact path= '/dropshipping' component={ dropshipping } />

      </Switch>

      <header className="App-header">

      </header>
    </div>
      </BrowserRouter>
  );
}

export default App;
