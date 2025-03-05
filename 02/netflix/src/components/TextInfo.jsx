import React from "react";

const TextInfo = () => {
  return (
    <>
      <div className="title">
        <h1>Stranger Things</h1>
      </div>
      <div className="text-info">
        <div className="datefilm">
          <p>2019</p>
        </div>
        <div className="director">
          <span>DIRECTOR :</span>
          <span className="author">Shawn Levy</span>
        </div>

        <div className="season">
          <span>seasons:</span>
          <span className="episode">3 (5 Episodes)</span>
        </div>
      </div>
      <div className="about">
        <p>
          In 1980s Indiana, a group of young friends witness supernatural forces
          and secret government exploits. As they search for answers, the
          children unravel a series of extraordinary mysteries.
        </p>
      </div>
    </>
  );
};

export default TextInfo;
