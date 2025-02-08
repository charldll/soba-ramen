/* eslint-disable react/prop-types */
// import { useState } from "react";

const IngredientCard = ({ ingredient, selectedItems, toggleItem }) => {
  return (
    <div
      className={`cursor-pointer grid grid-rows-[min-content] gap-[1rem] p-[1rem] bg-[rgb(182,27,81)] rounded-[1rem] snap-start ${
        selectedItems.some((i) => i.name === ingredient.name)
          ? "outline outline-amber-100"
          : "hover:grayscale-25"
      }`}
      onClick={() => toggleItem(ingredient)}>
      <img className="w-full aspect-[9/10] object-cover" src={ingredient.src} />
      <p className="w-fit mx-auto">
        {ingredient.name}, <span>{ingredient.price.toFixed(2)} zł</span>
      </p>
    </div>
  );
};

export default IngredientCard;
