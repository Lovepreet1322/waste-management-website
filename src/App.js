import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Services from './pages/Services.jsx';
import Contact from './pages/Contact.jsx';

function App(){
  return (
  <BrowserRouter>
  <Header />
  <Routes>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/About" element={<About/>}></Route>
    <Route path="/Services" element={<Services/>}></Route>
    <Route path="/Contact" element={<Contact/>}></Route>
  </Routes>
  <Footer/>
  </BrowserRouter>
  
  )
}
export default App;