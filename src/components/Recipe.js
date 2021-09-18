import React, { useState } from "react";
import "../App.css";

const Recipe = ({
  title,
  calories,
  image,
  ingredients,
  onClick,
  buttonText,
  heart,
}) => {
  return (
    <div className="recipe">
      <h1>{title}</h1>
      <p>Calories: {Math.floor(calories)}</p>
      <ul>
        {ingredients.map((ingredients, index) => (
          <li key={index}>
            <input
              type="checkbox"
              className={
                window.location.pathname !== "/saved" ? "hide" : "checkbox"
              }
            />
            {ingredients.text}
          </li>
        ))}
      </ul>

      <button
        /* // {window.location.pathname == "/"? "savedList" : "hidden"}      */
        className="savedList"
        onClick={() => onClick({ title, calories, image, ingredients })}
        type="Submit"
      >
        {buttonText}
      </button>
      <img className="image" src={image} alt="" />
    </div>
  );
};

export default Recipe;
