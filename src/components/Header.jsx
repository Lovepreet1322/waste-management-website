import React from 'react';
import './Header.css';
import Logo from './Logo';
import { Link } from 'react-router-dom';
import Services from '../pages/Services';

const Header = () => {
  return (
 <header className='Header'>
     
     {/*insert logo from header  */}
     <div className='Logo'>
        <h1><Logo/></h1>
        {/*navigation bar */}
        <div className='nav'>
             <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><Link to="/Services" element={<Services/>}>Services</Link></li>
            <li><a href="/Contact">Contact</a></li>
          </ul>
        </div>
     </div>
    </header>
)
}

export default Header;