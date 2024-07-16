import React from 'react';
import './Navbar-style.css';

function Navbar() {
  return (
    <>
      <div className='nav'>
        <div className='nav-highlight'>
          Home made Ayurvedic workout
        </div>
        <div className='logo-nav'>
          <div className='nav-order'><span class="material-symbols-outlined">
shopping_bag
</span>ORDER NOW</div>
          <img src='./assets/logo.png' alt='app-logo'/>
        </div>
        <div className='option-nav'>
          <ul>
            <li>Home</li>
            <li>Hair</li>
            <li>About Us</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
