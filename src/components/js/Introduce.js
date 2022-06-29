/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "../css/Introduce.css";
import Sorting from "./Sorting"

export default function Introduce(props) {

  return (
    <section className={props.darkMode ? "dark": ""} >
        <h1 className="food-header">Join Italian’s Best Recipes!</h1>
        <p className="food-text">The essence of Italian cooking today is simplicity. One uses the freshest seasonal ingredients and basic cooking techniques to simply enhance the natural flavor of the food.</p>
                
        <div class="popupButton">
            <a onClick={props.newRecipe} href="#0" id="btn-2" class="popup-button">ADD NEW RECIPE</a>
        </div>

        <Sorting 
          sorting = {props.sorting}
        />
        
    </section>
  );
}
