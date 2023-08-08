import React from 'react'
import React, { useState } from 'react';
export default function Reviews() {

    const [reviews, setReviews] = useState([]);
    const [newReview, setNewReview] = useState('');
  
    const handleReviewSubmit = (e) => {
      e.preventDefault();
      if (newReview.trim() !== '') {
        setReviews([...reviews, newReview]);
        setNewReview('');
      }
    };
  
  return (
   <>
   
   <div>
      <h1>Customer Reviews</h1>
      <form onSubmit={handleReviewSubmit}>
        <input
          type="text"
          value={newReview}
          onChange={(e) => setNewReview(e.target.value)}
          placeholder="Write a review..."
        />
        <button type="submit">Submit Review</button>
      </form>
      <div>
        {reviews.length > 0 ? (
          <ul>
            {reviews.map((review, index) => (
              <li key={index}>{review}</li>
            ))}
          </ul>
        ) : (
          <p>No reviews yet.</p>
        )}
      </div>
    </div>
  ;

   
   </>
  )
}
