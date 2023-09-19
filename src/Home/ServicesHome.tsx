import React from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css';
import CustomLeftArrow from './CustomLeftArrow';
import CustomRightArrow from './CustomRightArrow';
// import "./ServicesCarousel.css"
const MetalBraces=require("../../src/Images/Services/MetalBraces.jpg")
const CeramicBraces=require("../../src/Images/Services/CeramicBraces.jpg")
const MetalSelfLigatingBraces=require("../../src/Images/Services/MetalSelfLigatingBraces.jpg")
const ClearAligners=require("../../src/Images/Services/ClearAligners.jpg")
const CeramicSelfLigatingBraces=require("../../src/Images/Services/CeramicSelfLigatingBraces.jpeg")
const BracesForKids=require("../../src/Images/Services/BracesForKids.jpg")

function ServicesHome() {
  
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
  return (<>
  <h3 className='text-success d-none d-sm-flex'>Services</h3>
  <Carousel
  swipeable={true}
  draggable={false}
  showDots={true}
  responsive={responsive}
  ssr={true} // means to render carousel on server-side.
  infinite={true}
  autoPlay={true}
  autoPlaySpeed={3000}
  keyBoardControl={true}
  transitionDuration={500}
  containerClass="carousel-container"
  // removeArrowOnDeviceType={["tablet", "mobile"]}
  dotListClass="custom-dot-list-style"
  itemClass="carousel-item-padding-40-px"
  customRightArrow={<CustomRightArrow />} 
  customLeftArrow={<CustomLeftArrow />} 
  >
    <div className='p-3'>
    <img src={MetalBraces} style={{width:"100%", maxWidth:"400px", border:"1px solid black"}}/>
    <p className='p-2 text-center border'><b>Metal Braces</b></p>
    </div>
    <div className='p-3'>
    <img src={CeramicBraces} style={{width:"100%", maxWidth:"400px", border:"1px solid black"}}/>
    <p className='p-2 text-center border'><b>Ceramic Braces</b></p>
    </div>
    <div className='p-3'>
    <img src={MetalSelfLigatingBraces} style={{width:"100%", maxWidth:"400px", border:"1px solid black"}}/>
    <p className='p-2 text-center border'><b>Metal Self Ligating Braces</b></p>
    </div>
    <div className='p-3'>
    <img src={CeramicSelfLigatingBraces} style={{width:"100%", maxWidth:"400px", border:"1px solid black"}}/>
    <p className='p-2 text-center border'><b>Ceramic Self Ligating Braces</b></p>
    </div>
    <div className='p-3'>
    <img src={ClearAligners} style={{width:"100%", maxWidth:"400px", border:"1px solid black"}}/>
    <p className='p-2 text-center border'><b>Clear Aligners</b></p>
    </div>
    <div className='p-3'>
    <img src={BracesForKids} style={{width:"100%", maxWidth:"400px", border:"1px solid black"}}/>
    <p className='p-2 text-center border'><b>Braces for Kids</b></p>
    </div>
</Carousel>
  </>
  )
}

export default ServicesHome