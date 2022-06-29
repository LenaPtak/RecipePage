/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import StarRating from "./StarRating";
import "../css/Recipe.css";

export default function Recipe(props) {

  function message() { console.log("Create new recipe to rate!")}

  const recipeElements = props.recipes.map((recipe, index) => (
    <div key={recipe.id}>
      <div className="card">
        <div className={props.darkMode ? "darkCard" : "popup"}>
          <div class="popup-content">
            <h2 class="popup-title">{recipe.title}</h2>
            <img src={`../images/${recipe.coverImg}`} className="card--image" />
            <div className="card--stats">
              <span className="rating">Rating {recipe.rating}</span>
              <span className="gray">({recipe.reviewCount}) • </span>
              <span className="gray">{recipe.type}</span>
            </div>

            <StarRating 
              cardId={recipe.id}
              clickStar={message}
              hoverStar={message}
              rating={props.rating}
              hover={props.hover}
            />

            <p className="card--price">
              <span className="bold">{recipe.kcal} kcal</span> / person
            </p>
            <p class="popup-body">{recipe.description}</p>
            <a
              onClick={(event) => props.deleteRecipe(event, recipe.id)}
              href="#0"
              class="popup-button"
            >
              Remove recipe
            </a>
          </div>
        </div>
      </div>
    </div>
  ));

  return (
    <section className={props.darkMode ? "dark" : ""}>
      <div class="cards-list">
        {props.item.map((item) => (
          <div
            style={{
              display: !props.check.includes(item.id) ? "block" : "none",
            }}
          >
            <div className="card">
              <div className={props.darkMode ? "darkCard" : "popup"}>
                <div class="popup-content">
                  <h2 class="popup-title">{item.title}</h2>
                  <img src={`./images/${item.coverImg}`} className="card--image" />
                  <div className="card--stats">
                    <span className="rating">Rating {item.rating}</span>
                    <span className="gray"> ({item.reviewCount}) • </span>
                    <span className="gray"> {item.type}</span>
                  </div>

                  <StarRating 
                      cardId={item.id}
                      clickStar={props.clickStar}
                      hoverStar={props.hoverStar}
                      rating={props.rating}
                      hover={props.hover}
                  />

                  <p className="card--price">
                    <span className="bold">{item.kcal} kcal</span> / person
                  </p>
                  <p class="popup-body">{item.description}</p>
                  <a
                    onClick={(event) =>
                      props.deleteRecipeFromJSON(event, item.id)
                    }
                    href="#0"
                    class="popup-button"
                  >
                    Remove recipe
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
        {recipeElements}
      </div>
    </section>
  );
}
