import React from 'react'

const CustomRightArrow = ({ onClick, ...rest }:any) => {
    const {
      onMove,
      carouselState: { currentSlide, deviceType }
    } = rest;
    // onMove means if dragging or swiping in progress.
    return  <button onClick={() => onClick() }><a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
  </a></button>;
  };

export default CustomRightArrow