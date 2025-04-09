import React, { useState } from 'react'
import som from './The.svg'
import {Name} from './Hi'


const Check = () => {
  const [checkk,setCheckk]=useState(false)
  const [photo,setPhoto]=useState("")
  
  const handle=(event)=>{
    setCheckk(event.target.checked)
    if(event.target.checked)
    {
      setPhoto(Name.map(city=>{
        return (
          <div>
            {city.name}
          </div>
        )
      }))
    }
    else
    {
      setPhoto("");
    }
  }
  return (
    <div>
      <input type="checkbox" id='ra' checked={checkk} onChange={handle} />
      <p>{photo}</p>
    </div>
  )
}

export default Check
