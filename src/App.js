
import 'bootstrap/dist/css/bootstrap.min.css';
import FakeFlix from './component/Navbar';
import Home from './Pages/Home';
import './index.css'
import Player from './Pages/Player';
import {BrowserRouter , Routes, Route} from "react-router-dom"
import Notfound from './Pages/Notfound';
import Home1 from './component/firebasecompo/Home/Home1';
import Login from "./component/firebasecompo/Login/Login"
import Signup from "./component/firebasecompo/Signup/Signup"
import React ,{ useEffect, useState } from 'react';
import { auth } from './firebase';






function App() {
  const [userId,setUserId]=useState("")

  useEffect(()=>{
    auth.onAuthStateChanged((user)=>{
      if (user){
        setUserId(user.displayName)
      }else setUserId("");
      console.log(user);
    });
},[]);

  return (
    <>
      {/* <FakeFlix />
      <Home />
      <Player/> */}
      <BrowserRouter>
      <FakeFlix/>
        
     
        <Routes>
        <Route path="/home1" element={<Home1 name={userId}/>} />
        <Route path="/" element={<Signup/> } />
        <Route path="/login" element={<Login/>} />



          <Route path="/home" element={<Home/>}/>
          <Route path="/home/player/:moviename" element={<Player/>} />
          <Route path="*" element={<Notfound/>} />
          <Route  />
        </Routes>
       
      </BrowserRouter>

    </>
  );
}

export default App;
