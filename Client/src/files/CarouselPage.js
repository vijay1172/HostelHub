import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import ganga1 from "../components/ganga1.jpg";
import brahm from "../components/brahm.jpeg";

import 'bootstrap/dist/css/bootstrap.min.css';
import './CarouselP.css';

function CarouselComponent() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="carousel-container">
      <Carousel>
        <Carousel.Item>
          <img
            className='carousel-image'
            src={ganga1}
            alt="First slide"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className='carousel-image'
            src={brahm}
            alt="Second slide"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className='carousel-image'
            src={ganga1}
            alt="Third slide"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default CarouselComponent;
