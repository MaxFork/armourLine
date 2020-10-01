import React from 'react';

import './App.css';
import Carousel from './components/carousel/carousel.component';
import Header from "./components/header/header.component"
import MiddleCarousel from "./components/middle-carousel/middle-carousel.component"

function App() {
  return (
    <div className="App">
      <Header />
      <Carousel />
      <MiddleCarousel />
    </div>
  );
}

export default App;