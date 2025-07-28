import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
impme/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavbar from './App';
import Home from './Detials';
import Skills from './Skills';
import Project from './Projects';
import ContactUs from './Contactme';
import Footer from './Footer';



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MyNavbar/>
  <Home/>
  <Skills/>
  <Project/>
  <ContactUs/>
  <Footer/>
  </StrictMode>,
)
