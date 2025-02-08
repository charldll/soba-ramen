/* eslint-disable react/prop-types */
import IngredientCard from "./IngredientCard";
import { ingredientsData } from "../data/ingredientsData";

const IngredientChoice = ({ selectedItems, toggleItem }) => {
  return (
    <div className="w-full max-w-[70rem] mx-auto px-2">
      <div className="grid auto-cols-[90%] sm:auto-cols-[45%] md:auto-cols-[30%] lg:auto-cols-[23%] grid-flow-col gap-[1rem] py-[0.5rem] overflow-x-auto overscroll-contain snap-x snap-mandatory custom-scrollbar">
        {ingredientsData.map((ingredient) => (
          <IngredientCard
            key={ingredient.name}
            ingredient={ingredient}
            selectedItems={selectedItems}
            toggleItem={toggleItem}
          />
        ))}
      </div>
    </div>
  );
};

export default IngredientChoice;
