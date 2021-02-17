import React, { useState } from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import 'react-awesome-slider/dist/captioned.css';
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';

export const ForeCastSlider = () => {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };
  
    return (
      <AwesomeSlider animation="cubeAnimation" >
          <div data-src="https://via.placeholder.com/200x100" />
          <div data-src="https://via.placeholder.com/400x100" />
          <div data-src="https://via.placeholder.com/200x100" />
      </AwesomeSlider>
    );
  }