import React from "react";
import Recipe from "./Recipe";
import "../App.css";

export default function Saved({ favourites, setFavourites}) {
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
      <button
        className={favourites.length == 0 ? "hide" : "printBtn"}
        onClick={print}
      >
        PRINT
      </button>
      <h3 className={favourites.length == 0 ? "unSavedMessage" : "hide"}>
        you haven't saved anything yet
      </h3>
      <div className={"favourites"}>
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
  );
}
