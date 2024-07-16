import React from 'react';
import './Hairrange-style.css';

function Hairrange() {
    const hairRange = [
        {
            "name": "Herbs Hair Oil",
            "service_pic": "./assets/1-Herb.png",
        },
        {
            "name": "Hair Cleanser",
            "service_pic": "./assets/2-Hair-Cleanser.png",
        },
        {
            "name": "Hair Conditioner",
            "service_pic": "./assets/3-Hair-Conditioner.png",
        },
        {
            "name": "Hair Pack",
            "service_pic": "./assets/4-Hai-Pack.png",
        },
        {
            "name": "Hair Mist",
            "service_pic": "./assets/5-Hair-Mist.png",
        },
    ]
    return (
        <div className='Hairrange'>
            <div className='head-range-head'>
                <h1>DISCOVER OUR HEAD RANGE HEADS</h1>
            </div>
            <div className='range'>
                {hairRange.map((range, index) => (
                    <div key={index} className="range-card">
                        <img src={range.service_pic} alt={range.name} />
                        <p>{range.name}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Hairrange
