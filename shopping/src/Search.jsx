import React,{useState} from 'react'
import './Main.css'
import {FaRegUser,FaRegHeart,FaRegClipboard} from 'react-icons/fa6';
import {Name} from './Hi'
const Search = () => {
  const [search,setSearch]=useState("")
  const [display,setDisplay]=useState(false)
  const handle=(e)=>
  {
    const value=e.target.value
    setSearch(value)
    setDisplay(value.length>0)
  }
  return (
    
    <div>
      <div className='searchdiv'>
        <input className='searchh' type="text" value={search} placeholder='Search for products,brands and more' onChange={handle} />
        
        {Name.filter(city=>city.name.toLowerCase().includes(search.toLowerCase())).map(city=>{
          return (
             <div className='namediv'>
            {city.name}
             </div>
            
          )
          
        })}
        <FaRegUser className='user'/><br />
        <FaRegHeart className='heart'/>
        <FaRegClipboard className='clipboard'/>
      </div>
      
    </div>
  )
}

export default Search
