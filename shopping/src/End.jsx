import React, { useState } from 'react'
import './Main.css'
import end from './endimg.jpeg'
import google from './Google.jpeg'
import myntra from './raj.jpeg'
import some from './The.svg'


const End = () => {
  return (
    <div className='end'>
      <img className='endimage' src={end} alt="" />
      <h1 className='endheading'>MORE KNOCKOUT OFFERS WAITING!</h1>
      <p className='endpara'>Only On The Myntra   <img className='myntra' src={myntra}alt="Myntra"  /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; App</p>
       <p className='downloadpara'>DownloadNow</p>
       <img className='googles' src={google} alt="" />
       <img className='storing' src={some} alt="" />
    </div>
  )
}

export default End
