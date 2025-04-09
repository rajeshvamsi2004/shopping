import React from 'react'
import './Main.css'

const Home = (props) => {
  const{banner,title,image51,image52,image53,image54,image55,image56,image58,image59,image60}=props.h
  return (
    <div>
    <img className='womenimage' src={banner} alt="" />
      <h1 className='heading3'>{title}</h1>
      <section className="gallery">
        <div className='container-lg'>
          <div id='womendiv'  className='row gy-4 row-cols-2 row-cols-sm-3 row-cols-md-5'>
            <div className='col'>
              <img src={image51} alt="" />
            </div>
            <div className='col'>
              <img src={image52} alt="" />
            </div>
          <div className='col'>
              <img src={image53} alt="" />
            </div>
            <div className='col'>
              <img src={image54} alt="" />
            </div>
            <div className='col'>
              <img src={image55} alt="" />
            </div>
            <div className='col'>
              <img src={image56} alt="" />
            </div>
            <div className='col'>
              <img src={image58} alt="" />
            </div>
            <div className='col'>
              <img src={image59} alt="" />
            </div>
            <div className='col'>
              <img src={image60} alt="" />
            </div>
            
          </div>

        </div>

      </section>
      
    </div>
  )
}

export default Home
