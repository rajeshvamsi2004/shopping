
import React from 'react'
import Banner3 from './banner3.jpeg'
import './Main.css'

const Women = (props) => {
  const {title,image31,image32,image33,image34,image35,image36,image37,image38,image39,image40}=props.w
  return (
    <div>
      <img className='womenimage' src={Banner3} alt="" />
      <h1 className='heading3'>{title}</h1>
      <section className="gallery">
        <div className='container-lg'>
          <div id='womendiv'  className='row gy-4 row-cols-2 row-cols-sm-3 row-cols-md-5'>
            <div className='col'>
              <img src={image31} alt="" />
            </div>
            <div className='col'>
              <img src={image32} alt="" />
            </div>
          <div className='col'>
              <img src={image33} alt="" />
            </div>
            <div className='col'>
              <img src={image34} alt="" />
            </div>
            <div className='col'>
              <img src={image35} alt="" />
            </div>
            <div className='col'>
              <img src={image36} alt="" />
            </div>
            <div className='col'>
              <img src={image37} alt="" />
            </div>
            <div className='col'>
              <img src={image38} alt="" />
            </div>
            <div className='col'>
              <img src={image39} alt="" />
            </div>
            <div className='col'>
              <img src={image40} alt="" />
            </div>
          </div>

        </div>

      </section>
      
    </div>
  )
}

export default Women
