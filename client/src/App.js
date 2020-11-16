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

  async function callBackedApi(){
    
    const response = await fetch("/express", {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const body = await response.json();
    console.log(body)
    if(response.status !== 200){
      throw Error(body.message)
    }
    return body;
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