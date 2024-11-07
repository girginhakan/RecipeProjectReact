import React, { useContext } from "react";
import "../assets/style/recipe.scss";
import DefaultRecipeImage from "../assets/img/default-recipe.jpg";
import DataContext from "../context/DataContext";
import { Link } from "react-router-dom";
import AuthContext from "../context/AuthContext";

const Recipe = ({ recipe }) => {
  const { recipeSil, recipeDuzenle, search } = useContext(DataContext);
  const { isAuthenticated } = useContext(AuthContext);
  const buttonStyle = isAuthenticated ? { width: '100%' } : {};

  return (
    recipe.title.toLowerCase().startsWith(search.toLowerCase()) && (
      <div className="card">
        <img
          src={recipe.image ? recipe.image : DefaultRecipeImage}
          alt={recipe.title + "_kapak"}
        />

        <div className="card-body">
          <h4>{recipe.title}</h4>

          <p>
            {recipe.description.substring(
              0,
              recipe.description.substring(0, 30).lastIndexOf(" ")
            ) + "..."}
          </p>
          <div className="button-group">
            {isAuthenticated && (
              <>
                <button onClick={() => recipeSil(recipe.id)} className="delete">
                  Sil
                </button>
                <Link to="/recipe-app/forms">
                  <button
                    onClick={() => recipeDuzenle(recipe.id)}
                    className="edit"
                  >
                    Düzenle
                  </button>
                </Link>
              </>
            )}
            <Link to={recipe.id} key={recipe.id} className="link-button">
              <button className="detail" style={buttonStyle} >Detay</button>
            </Link>
          </div>
        </div>
      </div>
    )
  );
};

export default Recipe;
