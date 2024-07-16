import React from 'react';
import './Services-style.css';

function Services() {
    const services = [
        {
            "name": "100% Ayurvedic ",
            "service_pic": "./assets/Ayurvedic-icon-1.png",
            "desc": "Our products are certified 100% natural and inspired by ayurveda recipes by he ministry of AYUSH. We conform to the highest quality control standards.",
        },
        {
            "name": "Plant Based",
            "service_pic": "./assets/Plant-base-icon-2.png",
            "desc": "We harness the power of plant extracts as a part of out commitment to using naturally effective and sustainably sourced ingredients to achieve superior results organically.",
        },
        {
            "name": "Free Shipping",
            "service_pic": "./assets/Free-shipping-icon-3.png",
            "desc": "Free Shipping on all international orders above INR 9,999 & on all domestic orders above INR 475/. Cash on Delivery payment option available on all domestic orders above INR 3000/-",
        }
    ]
  return (
 
      <div className='services'>
                {services.map((service, index) => (
                    <div key={index} className="services-card">
                        <img src={service.service_pic} alt={service.name} />
                        <h2>{service.name}</h2>
                        <p>{service.desc}</p>
                    </div>
                ))}
            </div>
  
  )
}

export default Services
