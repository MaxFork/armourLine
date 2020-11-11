import React from 'react';

import './App.css';
import Carousel from './components/carousel/carousel.component';
import Header from "./components/header/header.component"
import MiddleCarousel from "./components/middle-carousel/middle-carousel.component"
import TextCarousel from './components/text-carousel/text-carousel.component';
import FindVehicle from "./components/find-vehicle/find-vehicle.component"
import ProductItem from './components/product-item/product-item.component';

function App() {
  return (
    <div className="App">
      <Header />
      <FindVehicle />
      <Carousel />
      <MiddleCarousel/>
      <TextCarousel/>
      <ProductItem/>
    </div>
  );
}

export default App;