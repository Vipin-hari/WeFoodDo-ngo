import React from 'react'
import { useState } from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Navbar from "./Components/Navbar"
import Footer from "./Components/Footer"
import Ngo from "./Components/Ngo"
import About from './Components/About'
import { initializeApp } from "firebase/app";
import firebaseConfig from './firebase';
import Home from './Components/Home'
import LoginForm from './Components/LoginForm'
import SignUpForm from './Components/SignUpForm'
const App = () => {
  initializeApp(firebaseConfig)
  const [username, setUsername] = useState('');
  const [location, setLocation] = useState('');
  const [type,setType] = useState('');
  return (
    <div>
      <BrowserRouter>
      <Navbar /> 
      <Routes>
        <Route path='/dashboard' element={<Ngo user={username} location={location} type={type}/>}/>
        <Route path='/' element = {<Home user={username}/>}/>
        <Route path='/about' element = {<About />}/>
        <Route path='/login' element={<LoginForm setUsername={setUsername} setLocation={setLocation} setType={setType}/>} />
        <Route path='/signup' element={<SignUpForm />} />
      </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
