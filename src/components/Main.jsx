import React, { useContext } from "react";
import "../assets/style/main.scss";
import MainPhoto from "../assets/img/main-photo.jpg";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <>
      <div className="main">
        <h1>Welcome to the Recipe Sharing Platform</h1>
        <h4>Find and share the best recipes from around the world!!!</h4>
        <Link className="image-container" to="/recipe-app/recipelist">
        <img src={MainPhoto} alt="Delicious Food" />
        <span className="tooltip">Click to see all recipes</span>
        </Link>
        <p>
          Discover the world of flavors and culinary delights with our curated
          recipes. Whether you're a seasoned chef or a kitchen novice, you'll
          find something to inspire and delight your taste buds. Let's get
          cooking!
        </p>
      </div>
    </>
  );
};

export default Main;
