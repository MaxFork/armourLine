import React, { useState, useRef, useEffect } from 'react'
import { BsDroplet } from "react-icons/bs"
import { ImStopwatch } from "react-icons/im"
import { GiBiceps } from "react-icons/gi"

import "./middle-carousel.styles.css"

export default function MiddleCarousel() {

    const [feature, setFeature] = useState([
        {id: 0, icon: <BsDroplet/>, title: "Made to order for your car", desc: "Each set is made to order according to your vehicle's make and model, using precise manufacturer measurements to ensure perfect 360° coverage." },
        {id: 1, icon: <BsDroplet/>, title: "Waterproof and Stain Resistant", desc: "Floor protection is top priority. All our luxury car mats are waterproof, stain resistant and scratch resistant - suitable for use in all types of weather conditions."},
        {id: 2, icon: <ImStopwatch/>, title: "Easy and Quick Installation", desc: "5 minute, hassle free installation and removal. Unique design to ensure easy fit with no signs of damage to your vehicle."},
        {id: 3, icon: <GiBiceps/>, title: "Extra Durable", desc: "Using the most durable materials, our car floor mats are guaranteed to last 5x longer than standard fabric mats, protecting your car floors and your investment."},
        {id: 4, icon: <BsDroplet/>, title: "Easy Cleaning", desc: "Stains, dirt, salt, and road chemicals never penetrate the mat. This helps with cleaning and maintenance. A quick vacuuming is all they need to look like new."}
      ])
    
    const [clientWidth, setClientWidth] = useState(0);
    const [width, setWidth] = useState(0);

    const [count, setCount] = useState(0);

    const featureMainContainerRef = useRef();
    const prevContainerRef = useRef();
    const nextContainerRef = useRef();

    const containerRef = useRef();
    containerRef.current = new Array(feature.length);

    const currentSlideRef = useRef();
    currentSlideRef.current = new Array(feature.length);

    const threeButtonsRef = useRef();
    threeButtonsRef.current = new Array(3);
    
    useEffect(() => {
    threeButtonsRef.current[0].classList.add("active-square");
    }, [threeButtonsRef])

    useEffect(() => {
    currentSlideRef.current[0].classList.add("active-square");
    }, [currentSlideRef])
    
    useEffect(() => {
        const featureMainContainerWidth = featureMainContainerRef.current.clientWidth;
        const featureWidth = containerRef.current[0].clientWidth;

        setWidth(featureWidth);

        const margin = 48;

        setClientWidth( -featureMainContainerWidth +( featureWidth + margin));

        prevContainerRef.current.classList.add("active-square");
    }, [containerRef])
    
    useEffect(() => {
        containerRef.current.filter(item => item.style.transform = `translateX(${-width * count}px)`)
    }, [count, width])
    
    const nextContainer = () => {
        prevContainerRef.current.classList.remove("active-square");
        containerRef.current.filter(item => item.classList.add("transform-transition"));
        containerRef.current.filter(item => item.style.transform = `translateX(${clientWidth}px)`)
        nextContainerRef.current.classList.add("active-square");
    }
    
    const prevContainer = () => {
        nextContainerRef.current.classList.remove("active-square");
        containerRef.current.filter(item => item.classList.add("transform-transition"));
        containerRef.current.filter(item => item.style.transform = `translateX(${0}px)`);
        prevContainerRef.current.classList.add("active-square");
    }
    
    const threeButtonsClick = (e) => {
        const removeActive = threeButtonsRef.current.filter(item => item.id !== e.target.id);
        removeActive.filter(item => item.classList.remove("active-square"));
    
        containerRef.current.filter(item => item.classList.add("transform-transition"));
        setCount(parseFloat(e.target.id))
    
        const currentActive = threeButtonsRef.current.filter(item => item.id === e.target.id);
        currentActive.filter(item => item.classList.add("active-square"));
    }
    
    const currentSlide = (e) => {
        const removeActive = currentSlideRef.current.filter(item => item.id !== e.target.id);
        removeActive.filter(item => item.classList.remove("active-square"));
    
        setCount(parseInt(e.target.id))
    
        const currentActive = currentSlideRef.current.filter(item => item.id === e.target.id);
        currentActive.filter(item => item.classList.add("active-square"));
    }

    return (
        <div className="container feature-top-container my-5">
            <div ref={featureMainContainerRef} className="feature-main-container d-flex ">
            {
            feature.map((item, idx) => (
                <div ref={el => containerRef.current[idx] = el} key={item.id} id={item.id} className="feature p-2 mx-5">
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
            <div className="desktop-buttons text-center">
                <span ref={prevContainerRef} onClick={prevContainer} className="mx-2"></span>
                <span ref={nextContainerRef} onClick={nextContainer} className="mx-2"></span>
            </div>
            <div className="threebutton-container">
            {
            Array(0,2.7,4).map((item, idx) => (
                <span ref={el => threeButtonsRef.current[idx] = el} key={item} className="mx-2" id={item} onClick={threeButtonsClick}> </span>
            ))
            }
            </div>
            <div className="current-slide-container text-center">
            {
            feature.map((item, idx) => (
                <span ref={el => currentSlideRef.current[idx] = el} key={item.id} id={item.id} onClick={currentSlide} className="mx-2"></span>
            ))
            }
            </div>
        </div>
    )
}
