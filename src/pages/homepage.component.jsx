import React from 'react'

import "./homepage.styles.css"
import FindVehicle from "../components/find-vehicle/find-vehicle.component"
import TextCarousel2 from '../components/text-carousel2/text-carousel2.component';
import HeroCarousel from '../components/hero-carousel/hero-carousel.component';

export default function Homepage() {
    return (
        <div>
            <FindVehicle />
            <HeroCarousel/>
            <TextCarousel2/>
        </div>
    )
}
