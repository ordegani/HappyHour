import React from "react";
import Recipe from "./Recipe";
import "../App.css";

export default function Saved({ favourites, setFavourites, i }) {
  const deleteFromfavourites = (recipe) => {
    setFavourites(
      favourites.filter((favourite) => favourite.title !== recipe.title)
    );
  };
  function print() {
    window.print();
  }
  return (
    <div className="favouritesContainer">
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
      <button className="printBtn" onClick={print}>PRINT ALL</button>
    </div>
  );
}
