import React, { useState, useRef } from 'react';
import { BsDroplet } from "react-icons/bs"
import { ImStopwatch } from "react-icons/im"
import { GiBiceps } from "react-icons/gi"

import './App.css';
import Carousel from './components/carousel/carousel.component';
import Header from "./components/header/header.component"


function App() {

  const [feature, setFeature] = useState([
    {id: 1, icon: <BsDroplet/>, title: "Made to order for your car", desc: "Each set is made to order according to your vehicle's make and model, using precise manufacturer measurements to ensure perfect 360° coverage." },
    {id: 2, icon: <BsDroplet/>, title: "Waterproof and Stain Resistant", desc: "Floor protection is top priority. All our luxury car mats are waterproof, stain resistant and scratch resistant - suitable for use in all types of weather conditions."},
    {id: 3, icon: <ImStopwatch/>, title: "Easy and Quick Installation", desc: "5 minute, hassle free installation and removal. Unique design to ensure easy fit with no signs of damage to your vehicle."},
    {id: 4, icon: <GiBiceps/>, title: "Extra Durable", desc: "Using the most durable materials, our car floor mats are guaranteed to last 5x longer than standard fabric mats, protecting your car floors and your investment."},
    {id: 5, icon: <BsDroplet/>, title: "Easy Cleaning", desc: "Stains, dirt, salt, and road chemicals never penetrate the mat. This helps with cleaning and maintenance. A quick vacuuming is all they need to look like new."}
  ])

  const containerRef = useRef();
  containerRef.current = new Array(feature.length)

  const nextContainer = () => {
    containerRef.current.filter(item => item.classList.remove("current-transform"));
    containerRef.current.filter(item => item.classList.add("left-transform"));
  }

  const prevContainer = () => {
    containerRef.current.filter(item => item.classList.remove("left-transform"));
    containerRef.current.filter(item => item.classList.add("current-transform"));
  }

  return (
    <div className="App">
      <Header />
      <Carousel />

      <div className="container my-5">
        <div className="feature-main-container d-flex ">
        {
          feature.map((item, idx) => (
            <div ref={el => containerRef.current[idx] = el} key={item.id} id={item.id} className="feature p-2">
              <div className="icon-container text-center my-3">
                {item.icon}
              </div>
              <div className="feature-content text-center">
                <h2 className="display-4 my-3"> {item.title} </h2>
                <p> {item.desc} </p>
              </div>
            </div>
          ))
        }
        </div>
        <button onClick={prevContainer}>prev</button>
        <button onClick={nextContainer}>next</button>
      </div>
    </div>
  );
}

export default App;