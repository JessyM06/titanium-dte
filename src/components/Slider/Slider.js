import React from 'react'
import './Slider.css'
import Carousel from 'react-bootstrap/Carousel';
import Img1 from '../../assets/img/slider/img1.jpg'
import Img2 from '../../assets/img/slider/img2.jpg'
import Img3 from '../../assets/img/slider/img3.jpg'
import Img4 from '../../assets/img/slider/img4.jpg'
import Img5 from '../../assets/img/slider/img5.jpg'
import Img6 from '../../assets/img/slider/img6.jpg'

const Slider = () => {
  return (
    <>
     <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img style={{height:'50vh'}}
          className="d-block w-100"
          src={Img1}
          alt="First slide"
        />
        <Carousel.Caption>
         
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img style={{height:'50vh'}}
          className="d-block w-100"
          src={Img2}
          alt="Second slide"
        />
        <Carousel.Caption>
         
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img style={{height:'50vh'}}
          className="d-block w-100"
          src={Img3}
          alt="Third slide"
        />
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img style={{height:'50vh'}}
          className="d-block w-100"
          src={Img4}
          alt="First slide"
        />
        <Carousel.Caption>
         
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img style={{height:'50vh'}}
          className="d-block w-100"
          src={Img5}
          alt="First slide"
        />
        <Carousel.Caption>
         
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img style={{height:'50vh'}}
          className="d-block w-100"
          src={Img6}
          alt="First slide"
        />
        <Carousel.Caption>
         
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </>
  )
}

export default Slider