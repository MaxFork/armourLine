import React,{ useState, useRef, useEffect } from 'react'
import { BsDroplet } from "react-icons/bs"
import { ImStopwatch } from "react-icons/im"
import { GiBiceps } from "react-icons/gi"

import "./text-carousel.styles.css"

export default function TextCarousel() {
    const [feature, setFeature] = useState([
        {id: 0, icon: <BsDroplet/>, title: "Made to order for your car", desc: "Each set is made to order according to your vehicle's make and model, using precise manufacturer measurements to ensure perfect 360° coverage." },
        {id: 1, icon: <BsDroplet/>, title: "Waterproof and Stain Resistant", desc: "Floor protection is top priority. All our luxury car mats are waterproof, stain resistant and scratch resistant - suitable for use in all types of weather conditions."},
        {id: 2, icon: <ImStopwatch/>, title: "Easy and Quick Installation", desc: "5 minute, hassle free installation and removal. Unique design to ensure easy fit with no signs of damage to your vehicle."},
        {id: 3, icon: <GiBiceps/>, title: "Extra Durable", desc: "Using the most durable materials, our car floor mats are guaranteed to last 5x longer than standard fabric mats, protecting your car floors and your investment."},
        {id: 4, icon: <BsDroplet/>, title: "Easy Cleaning", desc: "Stains, dirt, salt, and road chemicals never penetrate the mat. This helps with cleaning and maintenance. A quick vacuuming is all they need to look like new."}
    ])

    const [isDown, setIsDown] = useState(false);
    const [startX, setStartX] = useState(undefined);
    const [scrollLeft, setScrollLeft] = useState(undefined);
    const [walk, setWalk] = useState(undefined);


    const slideRef = useRef();
    const boxRef = useRef();
    boxRef.current = new Array(feature.length);

    const slideMouseDown = (e) => {
        setIsDown(true);
        slideRef.current.classList.add("active-text-carousel");
        setStartX(e.pageX - slideRef.current.offsetLeft);
        setScrollLeft(slideRef.current.scrollLeft);
    }

    const slideMouseLeave = (e) => {
        setIsDown(false);
        slideRef.current.classList.remove("active-text-carousel");
    }

    const slideMouseUp = (e) => {
        setIsDown(false);
        slideRef.current.classList.remove("active-text-carousel");
    }

    const slideMouseMove = (e) => {
        if(!isDown) return;
        e.preventDefault();
        const x = e.pageX - slideRef.current.offsetLeft;
        // console.log({ x, startX })
        // setWalk(x - startX);
        const walk = (x - startX) * 3;

        slideRef.current.scrollLeft = scrollLeft - walk;
    }

    const nextImg = () => {
        console.log("next img called");
        slideRef.current.scrollLeft = `-618px`;
        // boxRef.current.filter(item => item.style.transform = `translateX(-618px)`);
    }

    const prevImg = () => {
        console.log("prev img called");
        slideRef.current.scrollLeft = `0px`;
        // boxRef.current.filter(item => item.style.transform = `translateX(0px)`);
    }

    // useEffect(() => {
    //     console.log({scrollLeft, walk})
    // }, [scrollLeft, walk])


    return (
        <div className="grid-container">
            <div onMouseDown={slideMouseDown} onMouseLeave={slideMouseLeave}
                onMouseUp={slideMouseUp} onMouseMove={slideMouseMove} ref={slideRef} className="slide-container">
            {
                feature.map((item, idx) => (
                    <div ref={el => boxRef.current[idx] = el} key={item.id} id={item.id} className="box p-2 ">
                        <div>
                        <div className="icon-container text-center">
                            {item.icon}
                        </div>
                        <div className="feature-content text-center">
                            <h2 className="display-4 my-3"> {item.title} </h2>
                            <p> {item.desc} </p>
                        </div>
                        </div>
                    </div>
                ))
            }
            </div>
            <div className="desktop-buttons text-center">
                <span onClick={prevImg}  className="mx-2"></span>
                <span onClick={nextImg}  className="mx-2"></span>
            </div>
        </div>
    )
}
