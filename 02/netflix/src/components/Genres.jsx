import React from 'react';
import line from "../assets/vector.png";
const Genres = () => {
    return (
        <div className="genres">
          <a href="#">Drama</a>
          <div className="lines">
            <img src={line} alt="line" />
          </div>
          <a href="#">Thriller</a>
          <div className="lines">
            <img src={line} alt="line" />
          </div>
          <a href="#">Supernatural</a>
        </div>
    );
};

export default Genres;