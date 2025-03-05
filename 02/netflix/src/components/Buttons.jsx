import React from "react";
import play from "../assets/play.png";
const Buttons = () => {
  return (
    <div className="play">
      <button className="playnow">
        <p className="textfirst">STREAM NOW</p>
        <img src={play} alt="play" />
      </button>
      <button className="episodes">
        <p className="textsecond">ALL EPISODES</p>
      </button>
    </div>
  );
};

export default Buttons;
