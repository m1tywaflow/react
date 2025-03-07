// import React from "react";

// const AgeСategory = () => {
//   return (
//     <div className="block">
//       <span className="age">16+</span>
//     </div>
//   );
// };

// export default AgeСategory;

import React from "react";

const AgeCategory = ({ age }) => {
  return (
    <div className="block">
      <span className="age">{age}</span> {/* Динамічне відображення вікової категорії */}
    </div>
  );
};

export default AgeCategory;

