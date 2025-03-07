// import React from "react";
// import first from "../assets/first.svg";
// import second from "../assets/second.svg";
// import third from "../assets/third.svg";
// import four from "../assets/four.svg";
// import five from "../assets/five.svg";
// import leftArrow from "../assets/left.png";
// import rightArrow from "../assets/right.png";
// const Posters = () => {
//   return (
//     <>
//       <div className="infowork">
//         <h2 className="info-title">POPULAR THIS WEEK</h2>
//         <div className="strelku">
//           <button className="leftarrow">
//             <img src={leftArrow} alt="larrow" />
//           </button>
//           <button className="rightarrow">
//             <img src={rightArrow} alt="rarrow" />
//           </button>
//         </div>
//       </div>
//       <div className="films">
//         <div className="films-img">
//           <img src={first} alt="firsfilm" />
//         </div>
//         <div className="films-img">
//           <img src={second} alt="secondfilm" />
//         </div>
//         <div className="films-img">
//           <img src={third} alt="thirdfilm" />
//         </div>
//         <div className="films-img">
//           <img src={four} alt="fourthfilm" />
//         </div>
//         <div className="films-img">
//           <img src={five} alt="fifthfilm" />
//         </div>
//       </div>
//     </>
//   );
// };

// export default Posters;

import React from "react";

const Posters = ({ posters, leftArrow, rightArrow }) => {
  return (
    <>
      <div className="infowork">
        <h2 className="info-title">POPULAR THIS WEEK</h2>
        <div className="strelku">
          <button className="leftarrow">
            <img src={leftArrow} alt="larrow" />
          </button>
          <button className="rightarrow">
            <img src={rightArrow} alt="rarrow" />
          </button>
        </div>
      </div>
      <div className="films">
        {posters.map((poster, index) => (
          <div className="films-img" key={index}>
            <img src={poster} alt={`film-${index}`} />
          </div>
        ))}
      </div>
    </>
  );
};

export default Posters;
