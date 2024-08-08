import {Routes,Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import Navbarr from './Components/Navbar';
import Footer from './Components/Footer';
import CharityCard from './Components/CharityCard';
import Home from './Components/Home';
import About from './Components/About';
import Ngos from './Components/Ngofetch';
import LoginForm from './Components/LoginForm';
import Gallery from './Components/Gallery';
import { initializeApp } from "firebase/app";
import firebaseConfig from './firebase';
import DonorSignUpForm from './Components/DonorSignUpForm';


function App() {
  initializeApp(firebaseConfig);
  return (
    <>
    <BrowserRouter>
    <Navbarr />
    <Routes>
      <Route path='/' element={<Home />} />
    <Route path="/charity" element={<CharityCard />} />
    <Route path="/ngos" element={<Ngos />} />
    <Route path='/about' element={<About />} />
    <Route path='/gallery' element={<Gallery />} />
    <Route  path='/login' element={<LoginForm />} /> 
    <Route path='/join' element={<DonorSignUpForm />} />
    <Route path='/signupdonor' element={<DonorSignUpForm />} />
    </Routes>
    <Footer />
    </BrowserRouter>
    
    </>
  );
}

export default App;






