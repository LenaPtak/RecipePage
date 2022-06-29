import React, { useState } from "react"
import Nav from "./components/js/Nav"
import Recipe from "./components/js/Recipe"
import dane from "./data.json"
import Introduce from "./components/js/Introduce"
import TextField from "@mui/material/TextField";
import {nanoid} from "nanoid"
import './App.css';

function App() {

  let ratingList =[]
  for (let i=0; i < dane.length; i++)
  {
    ratingList.push(0);
  }

  const [data, setData] = useState(dane);
  const [recipes, setRecipes] = React.useState([])
  const [inputText, setInputText] = useState("");
  const [darkMode, setDarkMode] = React.useState(false);
  const [deleted, setDeleted] = React.useState([]);
  const [rating, setRating] = useState(ratingList);
  const [hover, setHover] = useState(0);
  
  //----- STARS RATING -----------------------------------
  function clickStar (index, cardId) {
    let newArray;
    if (data[cardId-1].id === cardId)
    newArray = [...rating];
    newArray[cardId-1] = index;
    setRating(newArray);
  }
  function hoverStar (rating, cardId) {
    setHover(rating[cardId+1]);
  }
  
  //----- DELETE RECIPE -----------------------------------
  function deleteRecipe(event, recipeId) {
    setRecipes(oldRecipes => oldRecipes.filter(recipe => recipe.id !== recipeId))
  }
  function deleteRecipeFromJSON(event, recipeId) {
    setDeleted(prevDeleted => [recipeId, ...prevDeleted]);
  }
  
  //----- SEARCHING -----------------------------------
  let inputHandler = (e) => {
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };

  //----- SORTING -----------------------------------
  const sorting = type => {
    let sorted;
    const types = {
      select: 'select',
      descending: 'descending',
      ascending: 'ascending',
    };
    const direction = types[type];

    if (direction === 'descending') {
      sorted = [...data].sort((a, b) => b["rating"] - a["rating"]);
      console.log("malejaco")
    } else if (direction === 'ascending') {
      console.log("rosnaco")
      sorted = [...data].sort((a, b) => a["rating"] - b["rating"]);
    } else if (direction === 'select') {
      console.log("select")
      sorted = dane;
    }
    setData(sorted);
  }

  //----- FILTER DATA -----------------------------------
  const filteredData = data.filter((el) => {
    //if no input the return the original
    if (inputText === "") {
      return el;
    }
    //return the item which contains the user input
    else {
      return el.title.toLowerCase().includes(inputText);
    }
  });

  //----- ADD NEW RECIPE  ---------------------------------
  function createNewRecipe() {
    const newRecipe = {
        id: nanoid(),
        title: "Title of New Recipe",
        description: "Description od New Recipe",
        kcal: 0,
        coverImg: "p1.jpg",
        rating: 0.0,
        reviewCount: 0,
        type: "Vegan"
    }
    setRecipes(prevRecipes => [newRecipe, ...prevRecipes])
  }
      
  //----- TURN ON/OFF DARK MODE -----------------------------------
  function toggleDarkMode() {
    setDarkMode(prevMode => !prevMode);
  }
  

  return (
    <div className={darkMode ? "darkApp": "App"}>
        <Nav 
            darkMode={darkMode} 
            toggleDarkMode={toggleDarkMode}
        />
        <Introduce 
            newRecipe={createNewRecipe}
            darkMode={darkMode}
            sorting = {sorting}
        />
        <TextField
          id="outlined-basic"
          onChange={inputHandler}
          variant="outlined"
          label="Search"
        />
        <Recipe
            key={filteredData.id}
            item={filteredData}
            check={deleted}
            darkMode={darkMode}
            recipes={recipes}
            deleteRecipe={deleteRecipe}
            deleteRecipeFromJSON={deleteRecipeFromJSON}
            clickStar={clickStar}
            hoverStar={hoverStar}
            rating={rating}
            hover={hover}
        />
    </div>
  );
}

export default App;