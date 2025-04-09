import React from 'react'
import myn from './raj.jpeg'
import lastimg from './endimg.jpeg'
import google from './Google.jpeg'
import apple from './The.svg'
const End2 = () => {
  return (
    <div>
      <div className='enddiv'>
        <p><b className='paramen'>MORE KNOCKOUT OFFERS WAITING</b></p>
        <p className='paramen2'><b className='b'>Only On The Myntra &nbsp;&nbsp;&nbsp;&nbsp; <img className='mynimage' src={myn} alt="" /> App</b></p>
        <img className='end2image' src={lastimg} alt="" />
        <img className='goo' src={google} alt="" />
        <img className='apple2' src={apple} alt="" />
        <b className='download2'>Download Now</b>

      </div>
      <div>,</div>
    </div>
  )
}

export default End2
