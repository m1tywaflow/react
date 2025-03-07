import React, { useState, useEffect } from "react";
import logo from "../assets/netflix.png";
import searchIcon from "../assets/search.png";
import avatarImg from "../assets/avatar.png"; 
import "../App.css";

const Header = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [avatar, setAvatar] = useState("");

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("user"));
        if (user) {
            setIsLoggedIn(true);
            setAvatar(user.avatar || avatarImg);
        }
    }, []);

    const handleLogin = () => {
        const userData = { avatar: avatarImg };
        localStorage.setItem("user", JSON.stringify(userData));
        setIsLoggedIn(true);
        setAvatar(userData.avatar);
    };

    const handleLogout = () => {
        // delate user from localStorage 
        localStorage.removeItem("user");
        setIsLoggedIn(false);
        setAvatar("");
    };

    return (
        <header>
            <div className="container1">
                <div className="netflix">
                    <div className="logo">
                        <img src={logo} alt="logo" />
                    </div>
                </div>

                <div className="right-side">
                    <button className="search-butt">
                        <img src={searchIcon} alt="search" />
                    </button>

                    {isLoggedIn ? (
                        <div className="user-section">
                            <div className="ava">
                                <img src={avatar} alt="avatar" />
                            </div>
                            <button className="logout-butt btn btn-primary" onClick={handleLogout}>
                                Logout
                            </button>
                        </div>
                    ) : (
                        <button className="login-butt btn btn-primary" onClick={handleLogin}>
                            Login
                        </button>
                    )}
                </div>
            </div>
        </header>
    );
};

export default Header;
