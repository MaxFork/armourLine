import React,{ useEffect, useState } from 'react';
import { Route, Switch } from "react-router-dom"

import './App.css';
import Header from "./components/header/header.component"
import ProductItem from './components/product-item/product-item.component';
import Homepage from './pages/homepage.component';
import ProductForm from "./components/product-form/product-form.component";

function App() {


  useEffect(() => {
    callBackedApi()
      .then(res => console.log(res))
      .catch(err => console.log(err))
  }, [])

  const callBackedApi = async () => {
    
    const response = await fetch("/express");
    const body = await response.json();

    if(response.status !== 200){
      throw Error(body.message)
    }
    return body;
  }

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