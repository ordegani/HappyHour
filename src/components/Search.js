import React, { useEffect, useState } from "react";
import Recipe from "./Recipe";
import "../App.css";

const Search = ({favourites, setFavourites}) => {
  //save my edamam ID and KEY as consts
  const APP_ID = "a6127f3e";
  const APP_KEY = "379b06961b2bac9e9f2a72ba27d63d80";

  //setState, it's an array of objects
  const [recipes, setRecipes] = useState([]);
  //setState search. default a empty string.
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("cocktail");
  const [favourites, setFavourites] = useState([]);

  //add to my existing list of favourites new recipe
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

  const deleteFromfavourites = (recipe) => {
    setFavourites(
      favourites.filter((favourite) => favourite.title !== recipe.title)
    );
  };
  //useEffect, rendering time is when query is updated
  useEffect(() => {
    getRecipes();
  }, [query]);

  //insert the const APP_ID & const APP_KEY.
  //'q=' will draw my user's text input
  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}+cocktail&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    setRecipes(data.hits);
    if (search.includes("cocktail")) {
      console.log(data.hits);
    }
  };

  //update search using user's input
  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  //set query equal to search pervent rendering whenever a letter is typed
  //use e.preventDefault() to pervant default q='chicken' query
  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  return (
    <div className="maincontainer">
      <form onSubmit={getSearch} className="search-form">
        <input
          className="search-bar"
          placeholder="Type in your favorite fruit/spice"
          type="text"
          value={search}
          onChange={updateSearch}
        />
        <button className="search-button" type="Submit">
          Search
        </button>
      </form>
      <div className="recipes">
        {recipes.map((recipe, index) => (
          <Recipe
            key={index}
            key={index}
            id={index}
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
            onClick={addTofavourites}
            buttonText="Save"
          />
        ))}
      </div>
      <div id="totalRecipeIngredients">
        <label className="savedTitle">&#127865; &#127865; &#127865;</label>
        <div className="favourites">
          {favourites.map((favourite, index) => (
            <Recipe
              key={index}
              title={favourite.title}
              calories={favourite.calories}
              image={favourite.image}
              ingredients={favourite.ingredients}
              onClick={deleteFromfavourites} 
              buttonText="DELETE"
            />
          ))}
        </div>
      </div>
      )
    </div>
  );
};

export default Search;
