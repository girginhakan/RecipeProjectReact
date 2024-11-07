import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import DataContext from "../context/DataContext";
import '../assets/style/recipeDetail.scss'
import DefaultRecipeImage from "../assets/img/default-recipe.jpg";
 

const RecipeDetail = () => {
  const { recipes } = useContext(DataContext);
  const params = useParams();
  const parametre = params.recipeId;
  return (
    <div className="product-detail">
      <img
        className="product-image"
        src={recipes[parametre-1].image ? recipes[parametre-1].image : DefaultRecipeImage}
        alt="Recipe"
      />
      <h2 className="product-title">{recipes[parametre - 1].title}</h2>
      <p className="product-description">
      {recipes[parametre - 1].description}
      </p>
      <Link className="returnRecipeList" to="/recipe-app/recipelist">Return All Recipes</Link>
    </div>
  );
};

export default RecipeDetail;
