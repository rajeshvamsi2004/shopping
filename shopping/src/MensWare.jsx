import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Main.css';


const MensWare = (props) => {
  const { title, image1, image2, image3, image4, image5 } = props.Mens;

  return (
    <div>
      <div>
        <h1 className='heading'>{title}</h1>
      </div>
      <section className="gallery">
        <div className='container-lg'>
          <div id='mendiv'  className='row gy-4 row-cols-2 row-cols-sm-3 row-cols-md-5'>
            <div className='col'>
              <img src={image1} alt="" />
            </div>
            <div className='col'>
              <img src={image2} alt="" />
            </div>
          <div className='col'>
              <img src={image3} alt="" />
            </div>
            <div className='col'>
              <img src={image4} alt="" />
            </div>
            <div className='col'>
              <img src={image5} alt="" />
            </div>
          </div>

        </div>

      </section>
         
    </div>
  )
}

export default MensWare;
