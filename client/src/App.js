import React,{ useEffect, useState } from 'react';
import { Route, Switch } from "react-router-dom"

import './App.css';
import Header from "./components/header/header.component"
import ProductItem from './components/product-item/product-item.component';
import Homepage from './pages/homepage.component';
import ProductForm from "./components/product-form/product-form.component";

function App() {

  const [backendData, setBackendData] = useState("No Fetching")

  useEffect(() => {
    callBackedApi()
      .then(res => setBackendData(res.express))
      .catch(err => console.log(err))
  }, [])

  const callBackedApi = async () => {
    
    const data = await fetch("/express").then(response => response.json()).then(data => data);

    return data;
  }

  return (
    <div className="App">
      {backendData}
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