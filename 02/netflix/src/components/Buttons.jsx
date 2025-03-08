// import React from "react";
// import play from "../assets/play.png";
// const Buttons = () => {
//   const callAlert = () => {
//     alert("34 episodes have been released so far.");
//   };
//   const openTrailer = () => {
//     window.open("https://www.youtube.com/watch?v=b9EkMc79ZSU", "_blank");
//   };

//   return (
//     <div className="play">
//       <button onClick={openTrailer} className="playnow" >
//         <p className="textfirst">STREAM NOW</p>
//         <img src={play} alt="play" />
//       </button>
//       <button onClick={callAlert} className="episodes">
//         <p className="textsecond">ALL EPISODES</p>
//       </button>
//     </div>
//   );
// };

// export default Buttons;

import React, { useState } from "react";
import play from "../assets/play.png";

const Buttons = () => {
  const [isOpen, setIsOpen] = useState(false);

  const callAlert = () => {
    alert("34 episodes have been released so far.");
  };

  return (
    <div className="play">
      <button className="playnow" onClick={() => setIsOpen(true)}>
        <p className="textfirst">STREAM NOW</p>
        <img src={play} alt="play" />
      </button>
      <button onClick={callAlert} className="episodes">
        <p className="textsecond">ALL EPISODES</p>
      </button>

      {/* Модальне вікно */}
      {isOpen && (
        <div className="modal" onClick={() => setIsOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close" onClick={() => setIsOpen(false)}>
              &times;
            </span>
            <iframe
             src="https://www.youtube.com/embed/b9EkMc79ZSU?autoplay=1"
             frameBorder="0"
             allow="autoplay; encrypted-media"
             allowFullScreen
             title="trailer"
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
};

export default Buttons;
