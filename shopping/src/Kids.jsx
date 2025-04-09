import Carousel from 'react-bootstrap/Carousel';
import React from 'react'
import './Main.css'
import kid1 from './kid1.jpeg'
import kid2 from './kid2.jpeg'
import kid3 from './kid3.jpeg'


const Kids = (props) => {
  const {title,image41,image42,image43,image44,image45,image46,image47,image48,image49,image50}=props.k

  return (
    <div>
      <Carousel data-bs-theme="dark">
      <Carousel.Item id='kid1div'>
        <img id='kidimage1'
          className="d-block w-100"
          src={kid1}
          alt=""
        />
      </Carousel.Item>
      <Carousel.Item id='kid2div'>
        <img id='kidimage2'
          className="d-block w-100"
          src={kid2}
          alt=""
        />
      </Carousel.Item>
      <Carousel.Item id='kid3div'>
        <img id='kidimage3'
          className="d-block w-100"
          src={kid3}
          alt=""
        />
      </Carousel.Item>
    </Carousel>
    <div>
      <h1 className='kidheading'>{title}</h1>
    </div>
      <section className="gallery">
        <div className='container-lg'>
          <div id='mendiv'  className='row gy-4 row-cols-2 row-cols-sm-3 row-cols-md-5'>
            <div className='col'>
              <img src={image41} alt="" />
            </div>
            <div className='col'>
              <img src={image42} alt="" />
            </div>
          <div className='col'>
              <img src={image43} alt="" />
            </div>
            <div className='col'>
              <img src={image44} alt="" />
            </div>
            <div className='col'>
              <img src={image45} alt="" />
            </div>
            <div className='col'>
              <img src={image46} alt="" />
            </div>
            <div className='col'>
              <img src={image47} alt="" />
            </div>
            <div className='col'>
              <img src={image48} alt="" />
            </div>
            <div className='col'>
              <img src={image49} alt="" />
            </div>
            <div className='col'>
              <img src={image50} alt="" />
            </div>
          </div>

        </div>

      </section>
    </div>
  )
}

export default Kids
