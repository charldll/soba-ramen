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
      className={`cursor-pointer grid grid-rows-[min-content] gap-[0.5rem] p-[0.5rem] bg-[white] rounded-[1rem] shadow-md snap-start ${
        selectedItems.some((i) => i.name === ingredient.name)
          ? "outline-4 outline-[#122653] -outline-offset-4"
          : ""
      }`}
      onClick={() => toggleItem(ingredient)}>
      
      <div>
        <Popover open={openPopover} handler={setOpenPopover} placement="bottom">
        <PopoverHandler {...triggers}>
          <Info size={16}/>
        </PopoverHandler>
        <PopoverContent className='z-50 max-w-[24rem]'>
          <div className='mb-2 flex items-center justify-between gap-4'>
            {ingredient.details}
          </div>
        </PopoverContent>
      </Popover>
      {ingredient.name}
      </div>
      <img className="w-full aspect-[9/10] object-fit" src={ingredient.src} />
      <p className="w-fit mx-auto">
        <span>{ingredient.price},-</span>
      </p>
    </div>
  );
};

export default IngredientCard;
