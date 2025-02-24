/* eslint-disable react/prop-types */

const BaseCard = ({ ingredient, selectedItems, toggleItem}) => {

  return (
		<div className={`cursor-pointer grid grid-rows-[min-content] gap-[1rem] p-[0.5] rounded-[1rem] shadow-xl snap-start ${
				selectedItems.some((i) => i.name === ingredient.name)
				? "outline-4 outline-amber-100 -outline-offset-4"
				: ""
			}`}
			onClick={() => toggleItem(ingredient)}>
			<div className={"bg-white rounded-[1rem]"}> 
				<img className="w-full aspect-square object-fit" src={ingredient.src} />
				</div>
				<p className="w-fit mx-auto object-center uppercase mb-[1rem]">
					{ingredient.name}
				</p>
		</div>
	);
};

export default BaseCard;