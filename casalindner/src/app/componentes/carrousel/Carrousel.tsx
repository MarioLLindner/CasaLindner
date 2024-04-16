'use client'
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { CarrouselItem } from './CarrouselItem';
import "bootstrap/dist/css/bootstrap.css";
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";

import Bicicletas from '../../../../Public/Carrousel/Bicicletas.png'
import Colchones from '../../../../Public/Carrousel/Colchones.png'
import Electro from '../../../../Public/Carrousel/Electro.png'
import Hogar from '../../../../Public/Carrousel/Hogar.png'
import Muebles from '../../../../Public/Carrousel/Muebles.png'
import Pesca from '../../../../Public/Carrousel/Pesca.png'


import { useState } from 'react';

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex:any) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} style={{border: 5, borderColor: "#292020", borderStyle: 'solid',borderWidth: 10}}>
      <Carousel.Item>
      <CarrouselItem
          imgSrc={Bicicletas.src}
          altText='Bicicletas'/>
      </Carousel.Item>
      <Carousel.Item>
      <CarrouselItem
          imgSrc={Colchones.src}
          altText='Colchones'/>
      </Carousel.Item>
      <Carousel.Item>
      <CarrouselItem
          imgSrc={Electro.src}
          altText='Electro'/>
      </Carousel.Item>
      <Carousel.Item>
      <CarrouselItem
          imgSrc={Hogar.src}
          altText='Hogar'/>
      </Carousel.Item>
      <Carousel.Item>
      <CarrouselItem
          imgSrc={Muebles.src}
          altText='Muebles'/>
      </Carousel.Item>
      <Carousel.Item>
      <CarrouselItem
          imgSrc={Pesca.src}
          altText='Pesca'/>
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel;
