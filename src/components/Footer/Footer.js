import React from 'react';
import './Footer-style.css';


function Footer() {
    return (
        <div className='Footer'>
            <div className='footer-banner'>
                <h1>Discover<br /> Luxurious Ayurveda</h1>
            </div>
            <div className='footer-options'>
                <div className='footer-img'>
                    <img src='./assets/logo.png' alt='logo' />
                </div>
                <div className='support-opt'>
                    <h3>Support</h3>
                    <ul>
                        <li>Contact us</li>
                        <li>Shipping Policy</li>
                        <li>Care Instruction</li>
                    </ul>
                </div>
                <div className='company-opt'>
                    <h3>Company</h3>
                    <ul>
                        <li>Our Story</li>
                        <li>Terms and Condition</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
                <div className='social-opt'>
                    <h3>Follow us @Tressentials</h3>
                    <ul>
                        <li><img src='./assets/fb-logo.png' alt='fb'/></li>
                        <li><img src='./assets/fb-logo1.png' alt='ig'/></li>
                    </ul>
                </div>

            </div>
            <div className='copyright'>
                ©2020 Tressentials. All rights reserved
                <p></p>
            </div>
        </div>
    )
}

export default Footer
