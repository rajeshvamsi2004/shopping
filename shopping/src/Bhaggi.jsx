import React from 'react'
import Banner2 from './Banner2.jpeg'
import './Main.css'

const Bhaggi = (props) => {
  const {title,image21,image22,image23,image24,image25,image26,image27,image28,image29,image30}=props.S
  return (
    <div>
      <img className='menimage' src={Banner2} alt="" />
      <h1 className='heading4'>{title}</h1>
      <section className="gallery">
        <div className='container-lg'>
          <div id='categorydiv'  className='row gy-4 row-cols-2 row-cols-sm-3 row-cols-md-5'>
            <div className='col'>
              <img src={image21} alt="" />
            </div>
            <div className='col'>
              <img src={image22} alt="" />
            </div>
            <div className='col'>
              <img src={image23} alt="" />
            </div>
            <div className='col'>
              <img src={image24} alt="" />
            </div>
            <div className='col'>
              <img src={image25} alt="" />
            </div>
            <div className='col'>
              <img src={image26} alt="" />
            </div>
            <div className='col'>
              <img src={image27} alt="" />
            </div>
            <div className='col'>
              <img src={image28} alt="" />
            </div>
            <div className='col'>
              <img src={image29} alt="" />
            </div>
            <div className='col'>
              <img src={image30} alt="" />
            </div>
          </div>

        </div>

      </section>
    </div>  
  )
}

export default Bhaggi
