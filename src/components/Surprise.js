import { render } from "@testing-library/react";
import React, { useEffect, useState } from "react";
import "../App.css";
import Recipe from "./Recipe";

export const Surprise = ({favourites, setFavourites}) => {
  //save my edamam ID and KEY as consts
  const APP_ID = "a6127f3e";
  const APP_KEY = "379b06961b2bac9e9f2a72ba27d63d80";
  const [query, setQuery] = useState("cocktail");
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");


  useEffect(() => {
    getRecipes();
  }, [query]);

  const flavourArray = ["banana", "apple", "coffee", "chocolate", "strawberry"];
  const ran = Math.floor(Math.random() * flavourArray.length);
  const searcher = flavourArray[ran];

  //insert the const APP_ID & const APP_KEY.
  //'q=' will draw my user's text input
  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${searcher}+cocktail&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    setRecipes(data.hits);
    if (search.includes("cocktail")) {
      console.log(data.hits);
    }
  };

  const addTofavourites = (savedRecipe) => {
    let isExists = false;

    favourites.find((favorite) => {
      if (favorite.image === savedRecipe.image) {
        isExists = true;
        alert("Recipe is already saved");
      }
    });

    if (!isExists) {
      setFavourites([...favourites, savedRecipe]);
      alert(`Saved ☟`);
      console.log(favourites);
      
    }
  };
  return (
    <div className="maincontainer">
      <div className="recipes">
        {recipes.slice(9).map((recipe, index) => (
          <Recipe
            key={index}
            id="1"
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
            onClick={addTofavourites}
            buttonText="Save"
          />
        ))}
      </div>
      )
    </div>
  );
};

export default Surprise;

    
 