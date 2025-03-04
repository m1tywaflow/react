import React from "react";

const Header = () => {
  return( 
    <div class="container">
    <div class="netflix">
      <div class="logo">
        <img src="img/netflixpage/netflix-logo.png" alt="logo" />
      </div>

      <div class="line">
        <img src="img/netflixpage/line.png" alt="line" />
      </div>

      <div class="date">
        <img src="img/netflixpage/FridayJuly8th.png" alt="date" />
      </div>
    </div>
    <div class="right-side">
      <button class="search-butt">
        <img src="img/netflixpage/fe_search.png" alt="search" />
      </button>
      <div class="ava">
        <img src="img/netflixpage/ava.png" alt="avatar" />
      </div>
    </div>
  </div>
)
};

export default Header;
