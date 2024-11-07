import React, { useContext, useEffect, useState } from "react";
import "../assets/style/header.scss";
import Logo from "../assets/img/recipe-logo.png";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import axios from "axios";

const Header = () => {
  const { isAuthenticated, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState("");

  const handleLogin = () => {
    navigate("/login");
  };
  const handleLogout = () => {
    logout();
    navigate("/login");
  };
  const getCurrentUser = async () => {
    const url = "https://api.escuelajs.co/api/v1/auth/profile";
    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${
          JSON.parse(localStorage.getItem("user")).access_token
        }`,
      },
    });
    const user = await response.data;
    console.log(user);
    setCurrentUser(user);
  };
  useEffect(() => {
    if (JSON.parse(localStorage.getItem("user"))) {
      getCurrentUser();
    }
  }, []);
  return (
    <div className="app">
      <nav>
        <div className="brand">
          <NavLink to="main">
            <img src={Logo} alt="" />
          </NavLink>
          <h3>Recipe Platform</h3>
        </div>
        <ul className="liste">
          <li>
            <NavLink className="navLink" to="main">
              Home
            </NavLink>
          </li>
          {currentUser && isAuthenticated && (
            <li>
              <NavLink className="navLink" to="forms">
                Add Recipe
              </NavLink>
            </li>
          )}
          <li>
            <NavLink className="navLink" to="recipelist">
              All Recipes
            </NavLink>
          </li>
          <li>
            <NavLink className="navLink" to="about">
              About
            </NavLink>
          </li>
          <li>
            <NavLink className="navLink" to="contact">
              Contact
            </NavLink>
          </li>
          
          <li>
            <NavLink
              onClick={isAuthenticated ? handleLogout : handleLogin}
              className="navLink"
              to="login"
            >
              {isAuthenticated ? "Logout" : "Login"}
            </NavLink>
          </li>
          {currentUser && isAuthenticated &&  (
            <div className="user-info">
              <img
                src={currentUser.avatar}
                alt="User"
                className="user-avatar"
              />
              <div className="user-details">
                <span className="user-email">{currentUser.email}</span>
                <span className="user-role">{currentUser.role}</span>
              </div>
            </div>
          )}
        </ul>
      </nav>

      <Outlet />

      <footer>
        <div className="contact-info">
          <h2>Contact information</h2>
          <ul>
            <li>Email: hakan@hakan.com</li>
            <li>Phone: +90 123 456 789</li>
          </ul>
        </div>
        <div className="social-media">
          <h2>Follow us</h2>
          <ul>
            <li>
              <a
                href="https://www.facebook.com/hakan.girgin.37/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                href="https://x.com/Hakan_girgin24"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/hakangirgin24/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Header;
