import './App.css';
import Main from './Main';
import Banner from './Banner';
import Search from './Search';
import MensWare from './MensWare';
import { useState } from 'react';
import {Men, SeparateMen, SepartateWomen,Kidding, Living} from './keys';
import { Category} from './keys';
import CategoryWise from './CategoryWise';
import Check from './Check';
import { BrowserRouter, Link, Route, Routes} from 'react-router-dom';
import Bhaggi from './Bhaggi';
import End2 from './End2';
import Women from './Women';
import End3 from './End3';
import Kids from './Kids';
import 'bootstrap/dist/css/bootstrap.min.css';
import Inpage from './Inpage';
import Home from './Home';









function App() {
  const [mens,setMens]=useState(Men)
  const [category,setCategory]=useState(Category)
  const [separate,setSeparate]=useState(SeparateMen)
  const [women,setWomen]=useState(SepartateWomen)
  const [ki,setKi]=useState(Kidding)
  const [ho,setho]=useState(Living)
  return (
    <div className="App">
      <BrowserRouter>
      <Main/>
      <Routes>
        <Route path='/' element={
            <>
              <Banner /> 
              <MensWare Mens={mens} /> 
               <CategoryWise variable={category} />
              {/* <End/> */}
               <Check/> 
            </>
          }
        />
        <Route path='/Mening' element={
          <>
        <Bhaggi S={separate}/>
        <End2/>
        </>
        }
       /> 
       <Route path='/women' element={<>
       <Women w={women}/>
       <End3/>

       </>}/>
        <Route path='/kid' element={<Kids k={ki}/>}/>
        <Route path='/in' element={<Inpage/>}/>
        <Route path='/home' element={<Home h={ho}/>}/>
      </Routes>
      </BrowserRouter>
      
      <Search/>
     
    </div>
    
  );
}
export default App;
