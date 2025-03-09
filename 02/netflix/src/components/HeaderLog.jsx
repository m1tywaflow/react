// import React, { useState, useEffect } from "react";
// import logo from "../assets/netflix.png";
// import searchIcon from "../assets/search.png";
// import avatarImg from "../assets/avatar.png";
// import "../App.css";

// const Header = () => {
//     const [isLoggedIn, setIsLoggedIn] = useState(false);
//     const [avatar, setAvatar] = useState("");

//     useEffect(() => {
//         const user = JSON.parse(localStorage.getItem("user"));
//         if (user) {
//             setIsLoggedIn(true);
//             setAvatar(user.avatar || avatarImg);
//         }
//     }, []);

//     const handleLogin = () => {
//         const userData = { avatar: avatarImg };
//         localStorage.setItem("user", JSON.stringify(userData));
//         setIsLoggedIn(true);
//         setAvatar(userData.avatar);
//     };

//     const handleLogout = () => {
//         // delate user from localStorage
//         localStorage.removeItem("user");
//         setIsLoggedIn(false);
//         setAvatar("");
//     };

//     return (
//         <header>
//             <div className="container1">
//                 <div className="netflix">
//                     <div className="logo">
//                         <img src={logo} alt="logo" />
//                     </div>
//                 </div>

//                 <div className="right-side">
//                     <button className="search-butt">
//                         <img src={searchIcon} alt="search" />
//                     </button>

//                     {isLoggedIn ? (
//                         <div className="user-section">
//                             <div className="ava">
//                                 <img src={avatar} alt="avatar" />
//                             </div>
//                             <button className="logout-butt btn btn-primary" onClick={handleLogout}>
//                                 Logout
//                             </button>
//                         </div>
//                     ) : (
//                         <button className="login-butt btn btn-primary" onClick={handleLogin}>
//                             Login
//                         </button>
//                     )}
//                 </div>
//             </div>
//         </header>
//     );
// };

// export default Header;

// import React, { useState, useEffect } from "react";
// import logo from "../assets/netflix.png";
// import searchIcon from "../assets/search.png";
// import avatarImg from "../assets/avatar.png";
// import line from "../assets/vector.png";
// import "../App.css";

// const Header = () => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [avatar, setAvatar] = useState("");
//   const [currentDate, setCurrentDate] = useState("");
//   useEffect(() => {
//     const user = JSON.parse(localStorage.getItem("user"));
//     if (user) {
//       setIsLoggedIn(true);
//       setAvatar(user.avatar || avatarImg);
//     }
//     const options = { weekday: "long", month: "long", day: "numeric" };
//     const formattedDate = new Date().toLocaleDateString("en-US", options);
//     setCurrentDate(formattedDate);
//   }, []);

//   const handleLogin = () => {
//     const userData = { avatar: avatarImg };
//     localStorage.setItem("user", JSON.stringify(userData));
//     setIsLoggedIn(true);
//     setAvatar(userData.avatar);
//   };

//   const handleLogout = () => {
//     localStorage.removeItem("user");
//     setIsLoggedIn(false);
//     setAvatar("");
//   };
//   let [inputVisible, setVisible] = useState(false);

//   return (
//     <header>
//       <div className="container1">
//         <div className="netflix">
//           <div className="logo">
//             <img src={logo} alt="logo" />
//           </div>
//           <span className="date">{currentDate}</span>
//         </div>

//         <div className="right-side">
//           <button className="search-butt">
//             <img src={searchIcon} alt="search" />
//           </button>

//           {isLoggedIn ? (
//             <div className="user-section">
//               <div className="ava">
//                 <img src={avatar} alt="avatar" />
//               </div>
//               <button
//                 className="logout-butt btn btn-primary"
//                 onClick={handleLogout}
//               >
//                 Logout
//               </button>
//             </div>
//           ) : (
//             <button
//               className="login-butt btn btn-primary"
//               onClick={handleLogin}
//             >
//               Login
//             </button>
//           )}
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;

// import React, { useState, useEffect } from "react";
// import logo from "../assets/netflix.png";
// import searchIcon from "../assets/search.png";
// import avatarImg from "../assets/avatar.png";
// import "../App.css";

// const Header = () => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [avatar, setAvatar] = useState("");
//   const [currentDate, setCurrentDate] = useState("");
//   const [inputVisible, setInputVisible] = useState(false);
//   const [searchQuery, setSearchQuery] = useState("");

//   useEffect(() => {
//     const user = JSON.parse(localStorage.getItem("user"));
//     if (user) {
//       setIsLoggedIn(true);
//       setAvatar(user.avatar || avatarImg);
//     }
//     const options = { weekday: "long", month: "long", day: "numeric" };
//     setCurrentDate(new Date().toLocaleDateString("en-US", options));
//   }, []);

//   const handleLogin = () => {
//     const userData = { avatar: avatarImg };
//     localStorage.setItem("user", JSON.stringify(userData));
//     setIsLoggedIn(true);
//     setAvatar(userData.avatar);
//   };

//   const handleLogout = () => {
//     localStorage.removeItem("user");
//     setIsLoggedIn(false);
//     setAvatar("");
//   };

//   return (
//     <header>
//       <div className="container1">
//         <div className="netflix">
//           <div className="logo">
//             <img src={logo} alt="logo" />
//           </div>
//           <span className="date">{currentDate}</span>
//         </div>
//         <div className="right-side">
//           {/* search input */}
//           {inputVisible && (
//             <input
//               type="text"
//               className="search-input"
//               placeholder="Пошук..."
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//               autoFocus
//             />
//           )}

//           {/* btn searcj */}
//           <button
//             className="search-butt"
//             onClick={() => setInputVisible(!inputVisible)}
//           >
//             <img src={searchIcon} alt="search" />
//           </button>
//           {isLoggedIn ? (
//             <div className="user-section">
//               <div className="ava">
//                 <img src={avatar} alt="avatar" />
//               </div>
//               <button
//                 className="logout-butt btn btn-primary"
//                 onClick={handleLogout}
//               >
//                 Logout
//               </button>
//             </div>
//           ) : (
//             <button
//               className="login-butt btn btn-primary"
//               onClick={handleLogin}
//             >
//               Login
//             </button>
//           )}
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;

// import React, { useState, useEffect } from "react";
// import logo from "../assets/netflix.png";
// import searchIcon from "../assets/search.png";
// import avatarImg from "../assets/avatar.png";
// import "../App.css";

// const Header = () => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [avatar, setAvatar] = useState("");
//   const [currentDate, setCurrentDate] = useState("");
//   const [inputVisible, setInputVisible] = useState(false);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [searchResults, setSearchResults] = useState([]);

//   useEffect(() => {
//     const user = JSON.parse(localStorage.getItem("user"));
//     if (user) {
//       setIsLoggedIn(true);
//       setAvatar(user.avatar || avatarImg);
//     }
//     const options = { weekday: "long", month: "long", day: "numeric" };
//     setCurrentDate(new Date().toLocaleDateString("en-US", options));
//   }, []);

//   const handleLogin = () => {
//     const userData = { avatar: avatarImg };
//     localStorage.setItem("user", JSON.stringify(userData));
//     setIsLoggedIn(true);
//     setAvatar(userData.avatar);
//   };

//   const handleLogout = () => {
//     localStorage.removeItem("user");
//     setIsLoggedIn(false);
//     setAvatar("");
//   };

//   // Фейкові дані (можна замінити на API)
//   const fakeMovies = [
//     { id: 1, title: "Stranger Things", year: "2016"  },
//     { id: 2, title: "Stranger Things 2", year: "2017"  },
//   ];

//   // Фільтрація результатів пошуку
//   useEffect(() => {
//     if (searchQuery.trim() === "") {
//       setSearchResults([]);
//       return;
//     }
//     const results = fakeMovies.filter(movie =>
//       movie.title.toLowerCase().includes(searchQuery.toLowerCase())
//     );
//     setSearchResults(results);
//   }, [searchQuery]);

//   return (
//     <header>
//       <div className="container1">
//         <div className="netflix">
//           <div className="logo">
//             <img src={logo} alt="logo" />
//           </div>
//           <span className="date">{currentDate}</span>
//         </div>

//         <div className="right-side relative">
//           {/* Інпут пошуку */}
//           {inputVisible && (
//             <div className="search-container">
//               <input
//                 type="text"
//                 className="search-input"
//                 placeholder="Пошук..."
//                 value={searchQuery}
//                 onChange={(e) => setSearchQuery(e.target.value)}
//                 autoFocus
//               />
//               {/* Блок результатів пошуку */}
//               {searchResults.length > 0 && (
//                 <div className="search-results">
//                   {searchResults.map((movie) => (
//                     <div key={movie.id} className="search-item">
//                       <img src={movie.img} alt={movie.title} />
//                       <div>
//                         <p>{movie.title}</p>
//                         <span>{movie.year}</span>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               )}
//             </div>
//           )}

//           {/* Кнопка пошуку */}
//           <button
//             className="search-butt"
//             onClick={() => setInputVisible(!inputVisible)}
//           >
//             <img src={searchIcon} alt="search" />
//           </button>

//           {/* Авторизація */}
//           {isLoggedIn ? (
//             <div className="user-section">
//               <div className="ava">
//                 <img src={avatar} alt="avatar" />
//               </div>
//               <button className="logout-butt btn btn-primary" onClick={handleLogout}>
//                 Logout
//               </button>
//             </div>
//           ) : (
//             <button className="login-butt btn btn-primary" onClick={handleLogin}>
//               Login
//             </button>
//           )}
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;

import React, { useState, useEffect } from "react";
import logo from "../assets/netflix.png";
import searchIcon from "../assets/search.png";
import avatarImg from "../assets/avatar.png";
import "../App.css";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [avatar, setAvatar] = useState("");
  const [currentDate, setCurrentDate] = useState("");
  const [inputVisible, setInputVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      setIsLoggedIn(true);
      setAvatar(user.avatar || avatarImg);
    }
    const options = { weekday: "long", month: "long", day: "numeric" };
    setCurrentDate(new Date().toLocaleDateString("en-US", options));
  }, []);

  const handleLogin = () => {
    const userData = { avatar: avatarImg };
    localStorage.setItem("user", JSON.stringify(userData));
    setIsLoggedIn(true);
    setAvatar(userData.avatar);
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    setIsLoggedIn(false);
    setAvatar("");
  };

  // fake but (can change on API)
  const fakeMovies = [
    { id: 1, title: "Breaking Bad", year: "2008" },
    { id: 2, title: "The Rain", year: "2018" },
    { id: 3, title: "Life in a Year", year: "2020" },
    { id: 4, title: "Money Heist", year: "2017" },
    { id: 5, title: "Squid Game", year: "2021" },
    { id: 6, title: "Stranger Things", year: "2019" }
  ];

  // filter result only <=3
  useEffect(() => {
    if (searchQuery.trim().length < 3) {
      setSearchResults([]);
      return;
    }
    const results = fakeMovies.filter((movie) =>
      movie.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setSearchResults(results);
  }, [searchQuery]);

  return (
    <header>
      <div className="container1">
        <div className="netflix">
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
          <span className="date">{currentDate}</span>
        </div>

        <div className="right-side relative">
          {/* search input */}
          {inputVisible && (
            <div className="search-container">
              <input
                type="text"
                className="search-input"
                placeholder="Пошук..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                autoFocus
              />
              {/* search result */}
              {searchResults.length > 0 && (
                <div className="search-results">
                  {searchResults.map((movie) => (
                    <div key={movie.id} className="search-item">
                      {/* <img src={movie.img} alt={movie.title} /> */}
                      <div>
                        <p>{movie.title}</p>
                        <span>{movie.year}</span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* searcj btn */}
          <button
            className="search-butt"
            onClick={() => setInputVisible(!inputVisible)}
          >
            <img src={searchIcon} alt="search" />
          </button>
          {isLoggedIn ? (
            <div className="user-section">
              <div className="ava">
                <img src={avatar} alt="avatar" />
              </div>
              <button
                className="logout-butt btn btn-primary"
                onClick={handleLogout}
              >
                Logout
              </button>
            </div>
          ) : (
            <button
              className="login-butt btn btn-primary"
              onClick={handleLogin}
            >
              Login
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
