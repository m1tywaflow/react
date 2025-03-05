import React from 'react';

const StarRating = () => {
    return (
        <div className="star-rating">
          <input type="radio" id="star5" name="rating" value="5" />
          <label htmlFor="star5" title="5 stars">&#9733;</label>
          <input type="radio" id="star4" name="rating" value="4" />
          <label htmlFor="star4" title="4 stars">&#9733;</label>
          <input type="radio" id="star3" name="rating" value="3" />
          <label htmlFor="star3" title="3 stars">&#9733;</label>
          <input type="radio" id="star2" name="rating" value="2" />
          <label htmlFor="star2" title="2 stars">&#9733;</label>
          <input type="radio" id="star1" name="rating" value="1" />
          <label htmlFor="star1" title="1 star">&#9733;</label>
        </div>
    );
};

export default StarRating;