import React from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css';
import CustomLeftArrow from './CustomLeftArrow';
import CustomRightArrow from './CustomRightArrow';
const CertificateRiyazkisanDrJanardhanamsWebinarbyROSG=require("../../src/Images/Certificates/1CertificateRiyazkisanDrJanardhanamsWebinarbyROSG.jpg")
const RiyazkisanCertificateAZLingual=require("../../src/Images/Certificates/2RiyazkisanCertificateAZLingual.jpg")
const WOHDCertificate417DrRiyazkisan=require("../../src/Images/Certificates/3WOHDCertificate417DrRiyazkisan.jpg")
const WebinarCertificate=require("../../src/Images/Certificates/4WebinarCertificate.jpg")
const Riyazhuseinkisan=require("../../src/Images/Certificates/5Riyazhuseinkisan.jpg")
const certificateClearaligner=require("../../src/Images/Certificates/6certificateClearaligner.jpg")
const CertRiyazhuseinKisan1024_1=require("../../src/Images/Certificates/7_29025RiyazhuseinKisan1024_1.jpg")
const RKCertificate=require("../../src/Images/Certificates/8RKCertificate.jpg")
const Cert39=require("../../src/Images/Certificates/9_39.jpg")
const CertificateforDrRiyazkisan=require("../../src/Images/Certificates/10CertificateforDrRiyazkisan.jpg")

function CertificatesHome() {
  
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
  <h3 className='text-success d-none d-sm-flex'>Achievement and Awards</h3>
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
  dotListClass="custom-dot-list-style"
  itemClass="carousel-item-padding-40-px" 
  className='mb-5'
  >
    <div className='p-3'>
    <img src={CertificateRiyazkisanDrJanardhanamsWebinarbyROSG} style={{width:"100%", maxWidth:"400px", border:"1px solid black"}}/>
    </div>
    <div className='p-3'>
    <img src={RiyazkisanCertificateAZLingual} style={{width:"100%", maxWidth:"400px", border:"1px solid black"}}/>
    </div>
    <div className='p-3'>
    <img src={WOHDCertificate417DrRiyazkisan} style={{width:"100%", maxWidth:"400px", border:"1px solid black"}}/>
    </div>
    <div className='p-3'>
    <img src={WebinarCertificate} style={{width:"100%", maxWidth:"400px", border:"1px solid black"}}/>
    </div>
    <div className='p-3'>
    <img src={Riyazhuseinkisan} style={{width:"100%", maxWidth:"400px", border:"1px solid black"}}/>
    </div>
    <div className='p-3'>
    <img src={certificateClearaligner} style={{width:"100%", maxWidth:"400px", border:"1px solid black"}}/>
    </div>
    <div className='p-3 text-center'>
    <img src={CertRiyazhuseinKisan1024_1} style={{height:"100%", maxHeight:"265px", alignItems:"center", border:"1px solid black"}}/>
    </div>
    <div className='p-3'>
    <img src={RKCertificate} style={{width:"100%", maxWidth:"400px", border:"1px solid black"}}/>
    </div>
    <div className='p-3'>
    <img src={Cert39} style={{width:"100%", maxWidth:"400px", border:"1px solid black"}}/>
    </div>
    <div className='p-3'>
    <img src={CertificateforDrRiyazkisan} style={{width:"100%", maxWidth:"400px", border:"1px solid black"}}/>
    </div>
</Carousel>
  </>
  )
}

export default CertificatesHome