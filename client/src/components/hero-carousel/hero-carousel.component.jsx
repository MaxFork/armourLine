import React,{ useState } from 'react'
import Slider from "react-slick";

import "./hero-carousel.styles.css"

export default function HeroCarousel() {
    const [slideImg, setSlideImg] = useState([
        {id: 1,  src: require("../../assets/hero-image1.jpg")},
        {id: 2,  src: require("../../assets/hero-image2.jpg") }
    ]);

    const slider = () => {
        return slideImg.map(img => {
            return (
                <img key={img.id} src={img.src} alt="armour Line" />
            )
        })
    }

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3500,
        pauseOnHover: false
      };

    return (
        <div className="container-fluid carousel-main-container">
            <div className="wrap">
                <div className="slider">
                    <div className="slide">
                        <div className="img-container">
                            <Slider {...settings}>
                                {slider()}
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
