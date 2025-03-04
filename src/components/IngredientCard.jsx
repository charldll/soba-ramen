/* eslint-disable react/prop-types */
import { useState } from "react";
import {
  Popover,
  PopoverHandler,
  PopoverContent
} from '@material-tailwind/react';
import { Info } from 'lucide-react';

const IngredientCard = ({ ingredient, selectedItems, toggleItem }) => {
  const [openPopover, setOpenPopover] = useState(false);

  const triggers = {
    onMouseEnter: () => setOpenPopover(true),
    onMouseLeave: () => setOpenPopover(false),
  };
  
  return (
    <div
      className={`cursor-pointer grid grid-rows-[min-content] gap-2 p-2 m-2 bg-[white] rounded-[1rem] shadow-md snap-start ${
        selectedItems.some((i) => i.name === ingredient.name)
          ? "outline-4 outline-[#122653] -outline-offset-4"
          : ""
      }`}
      onClick={() => toggleItem(ingredient)}>
      
      <div>
        <Popover open={openPopover} handler={setOpenPopover} placement="bottom">
        <PopoverHandler {...triggers}>
          <div className="inline-block ml-[0.1]">
            <Info size={20} color="#af282f"/>
          </div>
        </PopoverHandler>
        <PopoverContent className='z-50 max-w-[24rem]'>
          <div className='items-center justify-between'>
            {ingredient.details}
          </div>
        </PopoverContent>
      </Popover>
        <div className="font-semibold font-stretch-semi-condensed">
          {ingredient.name}
        </div>
      </div>
      <img className="w-full aspect-[9/10] object-fit" src={ingredient.src} />
      <p className="w-fit mx-auto font-semibold text-[20px]">
        <span>{ingredient.price},-</span>
      </p>
    </div>
  );
};

export default IngredientCard;
