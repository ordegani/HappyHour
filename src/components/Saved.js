import React from 'react'
import Recipe from './Recipe'
import "../App.css";

export default function Saved({favourites, setFavourites}) {
    const deleteFromfavourites = (recipe) => {
        setFavourites(
          favourites.filter((favourite) => favourite.title !== recipe.title)
        );
      };
    return (
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


    )
}