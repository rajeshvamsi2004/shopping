import React from 'react'
import './Main.css'
import {Link} from 'react-router-dom'

const Main = () => {
  return (
    <div>
       <div className='listdiv'>
        <ul>
          <li><Link className='list1' to='/'>HOME</Link></li>
          <li><Link className='list1' to='Mening'>MEN</Link></li>
          <li><Link className='list1' to='women'>WOMEN</Link></li>
          <li><Link className='list1' to='kid'>KIDS</Link></li>
          <li><Link className='list1' to='home'>HOME AND LIVING</Link></li>
          <li>BEAUTY</li>
        </ul>
       </div>
    </div>
  );
}

export default Main
