/* eslint-disable react/prop-types */
import { useState } from "react";
import {
  Popover,
  PopoverHandler,
  PopoverContent,
} from "@material-tailwind/react";
import { Info } from "lucide-react";

const IngredientCard = ({ ingredient, selectedItems, toggleItem }) => {
  const [openPopover, setOpenPopover] = useState(false);

  const triggers = {
    onMouseEnter: () => setOpenPopover(true),
    onMouseLeave: () => setOpenPopover(false),
  };

  return (
    <div
      className={`m-2 grid cursor-pointer snap-start grid-rows-[min-content] gap-2 rounded-[1rem] bg-[white] p-2 shadow-md ${
        selectedItems.some((i) => i.name === ingredient.name)
          ? "outline-4 -outline-offset-4 outline-[#122653]"
          : ""
      }`}
      onClick={() => toggleItem(ingredient)}
    >
      <div>
        <Popover open={openPopover} handler={setOpenPopover} placement="bottom">
          <PopoverHandler {...triggers}>
            <div className="ml-[0.1] inline-block">
              <Info size={20} color="#af282f" />
            </div>
          </PopoverHandler>
          <PopoverContent className="z-50 max-w-[24rem]">
            <div className="items-center justify-between">
              {ingredient.details}
            </div>
          </PopoverContent>
        </Popover>
        <div className="font-semibold font-stretch-semi-condensed">
          {ingredient.name}
        </div>
      </div>
      <img className="object-fit aspect-[9/10] w-full" src={ingredient.src} />
      <p className="mx-auto w-fit text-[20px] font-semibold">
        <span>{ingredient.price},-</span>
      </p>
    </div>
  );
};

export default IngredientCard;
