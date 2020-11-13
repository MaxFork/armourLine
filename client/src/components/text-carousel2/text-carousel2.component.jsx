import React,{ useState } from 'react'
import { BsDroplet } from "react-icons/bs"
import { ImStopwatch } from "react-icons/im"
import { GiBiceps } from "react-icons/gi"
import Slider from "react-slick";

import "./text-carousel2.styles.css"

export default function TextCarousel2() {

    const [feature, setFeature] = useState([
        {id: 0, icon: <BsDroplet/>, title: "Made to order for your car", desc: "Each set is made to order according to your vehicle's make and model, using precise manufacturer measurements to ensure perfect 360° coverage." },
        {id: 1, icon: <BsDroplet/>, title: "Waterproof and Stain Resistant", desc: "Floor protection is top priority. All our luxury car mats are waterproof, stain resistant and scratch resistant - suitable for use in all types of weather conditions."},
        {id: 2, icon: <ImStopwatch/>, title: "Easy and Quick Installation", desc: "5 minute, hassle free installation and removal. Unique design to ensure easy fit with no signs of damage to your vehicle."},
        {id: 3, icon: <GiBiceps/>, title: "Extra Durable", desc: "Using the most durable materials, our car floor mats are guaranteed to last 5x longer than standard fabric mats, protecting your car floors and your investment."},
        {id: 4, icon: <BsDroplet/>, title: "Easy Cleaning", desc: "Stains, dirt, salt, and road chemicals never penetrate the mat. This helps with cleaning and maintenance. A quick vacuuming is all they need to look like new."}
    ])

    const slides = () => {
        return feature.map((item) => {
            return (
                    <div key={item.id} className="box2 p-2">
                        <div>
                            <div className="icon-container my-5 text-center">
                                {item.icon}
                            </div>
                            <div className="feature-content text-center">
                                <h2 className="display-4 my-3"> {item.title} </h2>
                                <p> {item.desc} </p>
                            </div>
                        </div>
                    </div>
                )
        })
    }

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 900,
                settings: {
                    dots: true,
                    infinite: false,
                    speed: 500,
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }

            },
            {
                breakpoint: 700,
                settings: {
                    dots: true,
                    infinite: false,
                    speed: 500,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
      };

    return (
        <div className="grid-container2">
            <div className="slide-container2">
                <Slider {...settings}>
                    {slides()}
                </Slider>
            </div>
        </div>
    )
}
