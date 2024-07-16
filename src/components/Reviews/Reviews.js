import React from 'react';
import './Reviews.css';


export default function Reviews() {
    const reviews = [
        {
            "name": "Nisha",
            "pfp": "./assets/1-Herb.png",
            "star": "./assets/star.png",
            "comment": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut",
        },
        {
            "name": "Reena",
            "pfp": "./assets/1-Herb.png",
            "star": "./assets/star.png",
            "comment": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut",
        },
        {
            "name": "Sangita",
            "pfp": "./assets/1-Herb.png",
            "star": "./assets/star.png",
            "comment": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut",
        }
    ]
    return (
        <div className='reviews'>
            <div className='head-range-head'>
                <h1>Testimonials</h1>
            </div>
            <div className='reviewers'>
                {reviews.map((review, index) => (
                    <div key={index} className="reviews-card">
                        <div className='comment-pfp'> <img src={review.pfp} alt={review.name} /></div>
                        <img src={review.star} alt={review.name} />
                        <p>{review.comment}</p>
                        <h2>{review.name}</h2>
                    </div>
                ))}
            </div>
        </div>
    )
}
