import React from 'react';
import './Aboutus-style.css';

function Aboutus() {
  return (
    <div className='aboutus'>
      <div className='aboutus-text'>
        <h1>WHO ARE WE</h1>
        <p>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod
        </p>
        <p>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod
        </p>
        <p>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod
        </p>
        <button>Read More</button>
      </div>
      <div className='aboutus-img'>
       <img src='./assets/Who-we-are.png' alt=''/>
      </div>
    </div>
  )
}

export default Aboutus
