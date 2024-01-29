import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from './component/Sidebar'
import NavbarComp from './component/NavbarComp';
import "./App.css"
import Entetet from './component/Entete';
import Hotel from './Hotel/Hotel';
import {motion} from 'framer-motion'
import axios from 'axios';
const URL = 'http://localhost:3001/home' ;
  const fetchHandler = async()=>{
    return axios.get(URL).then(res=>res.data)
    
   .catch(err=>console.log(err))
  }

function Home() {
  const [hotels, setHotels]=useState()
  useEffect(()=>{
    fetchHandler().then(res=>setHotels(res))
  },[])
  console.log(hotels);
  
  return (
    <motion.div 
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    exit={{opacity: 0}}
    transition={{ 
      easeInOut: [0.17, 0.67, 0.83, 0.67],
      duration: 5,
      
    }} className='d-flex'>
      <div className="col-2 col-md-2">
        <Sidebar />
      </div>
      <div className="col-10 col-md-10">
        < NavbarComp />
        <hr />
        <Entetet />
        <Hotel/>
      </div>
    </motion.div>
  )
}

export default Home