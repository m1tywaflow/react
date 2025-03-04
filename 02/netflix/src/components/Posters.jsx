import React from "react";

const Posters = () => {
  return (
    <>
      <div class="infowork">
        <h2 class="info-title">POPULAR THIS WEEK</h2>
        <div class="strelku">
          <button class="leftarrow">
            <img src="img/netflixpage/leftvector.svg" alt="" />
          </button>
          <button class="rightarrow">
            <img src="img/netflixpage/rightvector.svg" alt="" />
          </button>
        </div>
      </div>
      <div class="films">
        <div class="films-img">
          <img src="img/netflixpage/breakingbad.png" alt="firsfilm" />
        </div>
        <div class="films-img">
          <img src="img/netflixpage/therain.png" alt="secondfilm" />
        </div>
        <div class="films-img">
          <img src="img/netflixpage/lifenayear.png" alt="thirdfilm" />
        </div>
        <div class="films-img">
          <img src="img/netflixpage/moneyheist.png" alt="fourthfilm" />
        </div>
        <div class="films-img">
          <img src="img/netflixpage/squidgame.png" alt="fifthfilm" />
        </div>
      </div>
    </>
  );
};

export default Posters;
