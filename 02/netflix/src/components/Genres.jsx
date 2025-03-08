// import React from "react";
// import line from "../assets/vector.png";
// const Genres = () => {
//   return (
//     <div className="genres">
//       {/* <a href="#">Drama</a> */}
//       <div className="lines">
//         <img src={line} alt="line" />
//       </div>
//       {/* <a href="#">Thriller</a> */}
//       <div className="lines">
//         <img src={line} alt="line" />
//       </div>
//       {/* <a href="#">Supernatural</a> */}
//     </div>
//   );
// };

// export default Genres;

import React, { useState } from "react";
import line from "../assets/vector.png";

const genresList = [
  {
    name: "Drama",
    description:
      "Drama is a genre that relies on realistic stories, emotions, and conflicts.",
  },
  {
    name: "Thriller",
    description: "Thrillers are known for suspense, tension, and excitement.",
  },
  {
    name: "Supernatural",
    description:
      "Supernatural genre includes ghosts, magic, and unexplained phenomena.",
  },
];

const Genres = () => {
  const [selectedGenre, setSelectedGenre] = useState(null);

  const handleGenreClick = (genre) => {
    setSelectedGenre(selectedGenre?.name === genre.name ? null : genre);
  };

  return (
    <div>
      <div className="genres">
        {genresList.map((genre, index) => (
          <span key={index} className="genre-item">
            <a href="#" onClick={() => handleGenreClick(genre)}>
              {genre.name}
            </a>
            {index < genresList.length - 1 && <img src={line} alt="line" />}
          </span>
        ))}
      </div>

      {/* show info about genre */}
      {selectedGenre && (
        <div className="genre-info">
          <h3>{selectedGenre.name}</h3>
          <p>{selectedGenre.description}</p>
        </div>
      )}
    </div>
  );
};

export default Genres;
