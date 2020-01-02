import React, { useState } from "react";
import Carousel from 'react-bootstrap/Carousel'

import testStyles from './testimonials.module.scss'


function Testimonials() {
    const [index, setIndex] = useState(0);
    const [direction, setDirection] = useState(null);
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
        setDirection(e.direction);
    };
    return (
    
    <Carousel className={testStyles.reviews} activeIndex={index} direction={direction} onSelect={handleSelect}>
        <Carousel.Item>
        <h1>Earl Taylor</h1>
                <p>"Had to get my Porche shipped enclosed my car from NJ to Miami and back. Rivka did a terrific job from start to finish. A to Z Logisitics were very professional. "</p>
        </Carousel.Item>
        <Carousel.Item>
        <h1>Scott Evans</h1>
                <p>"A-to-Z Logistics got the job down. Will definitely be using them again for my equipment."</p>
        </Carousel.Item>
        <Carousel.Item>
        <h1>Tyler Ross</h1>
                <p>"Mark over at A to Z Logistics did a super job in securing me a car shippment from Los Angeles to Hawaii"</p>
        </Carousel.Item>
    </Carousel>
    
    );
}

export default Testimonials
