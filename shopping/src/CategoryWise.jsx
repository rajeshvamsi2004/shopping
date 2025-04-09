import React from 'react'
import './Main.css'

const CategoryWise = (props) => {
  const {title,image6,image7,image8,image9,image10,image11,image12,image13,image14,image15,image16,image17,image18,image19,image20}=props.variable
  return (
    <div>
      <div>
        <h1 className='heading2'>{title}</h1>
      </div>
      <section className="gallery">
        <div className='container-lg'>
          <div id='categorydiv'  className='row gy-4 row-cols-2 row-cols-sm-3 row-cols-md-5'>
            <div className='col'>
              <img src={image6} alt="" />
            </div>
            <div className='col'>
              <img src={image7} alt="" />
            </div>
            <div className='col'>
              <img src={image8} alt="" />
            </div>
            <div className='col'>
              <img src={image9} alt="" />
            </div>
            <div className='col'>
              <img src={image10} alt="" />
            </div>
            <div className='col'>
              <img src={image11} alt="" />
            </div>
            <div className='col'>
              <img src={image12} alt="" />
            </div>
            <div className='col'>
              <img src={image13} alt="" />
            </div>
            <div className='col'>
              <img src={image14} alt="" />
            </div>
            <div className='col'>
              <img src={image15} alt="" />
            </div>
             <div className='col'>
              <img src={image16} alt="" />
            </div>
            <div className='col'>
              <img src={image17} alt="" />
            </div> 
            <div className='col'>
              <img src={image18} alt="" />
            </div>
            <div className='col'>
              <img src={image19} alt="" />
            </div>
            <div className='col'>
              <img src={image20} alt="" />
            </div>
          </div>

        </div>

      </section>
      
    </div>
  )
}

export default CategoryWise
