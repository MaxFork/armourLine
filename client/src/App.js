import React from 'react';
import { Route, Switch } from "react-router-dom"

import './App.css';
import Header from "./components/header/header.component"
import ProductItem from './components/product-item/product-item.component';
import Homepage from './pages/homepage.component';
import ProductForm from "./components/product-form/product-form.component";

function App() {
  return (
    <div className="App">
      <Header />
      <div>
        <Switch>
          <Route exact path="/" component={Homepage} /> 
          <Route path="/product" component={ProductItem} />
          <Route path="/product-form" component={ProductForm} />
        </Switch>
      </div>
    </div>
  );
}

export default App;