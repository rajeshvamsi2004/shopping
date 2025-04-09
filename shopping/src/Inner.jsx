import React, { useState } from 'react'
import './Main.css'

const Inner = () => {
  const [open,setOpen] = useState(false)
  const write=()=>{
   setOpen(!open)
  }
  
  return (
    <div>
      <p onClick={write}>rajesh</p>
      {open &&(
      <div className='sample'>
      <input className='check' type="checkbox" name="" id="ra" />
      <label htmlFor="ra">Checkbox</label>
      </div>
      )}
    </div>
  )
}

export default Inner
