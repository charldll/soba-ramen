/* eslint-disable react/prop-types*/
import { noodleChoice } from '../data/noodleChoice';
import IngredientCard from './IngredientCard';
import ButtonComponent from './ButtonComponent';

const NoodleChoice = ({ selectedItems, toggleItem, onClick }) => {
  const selectedNone = selectedItems.length === 1;
  const selectedMax = selectedItems.length === 2;

  return (
  	<section className='w-full max-w-[70rem] mx-auto px-2'>
			<div className='grid auto-cols-[90%] sm:auto-cols-[45%] md:auto-cols-[30%] lg:auto-cols-[23%] grid-flow-col gap-[1rem] py-[0.5rem] overflow-x-auto overscroll-contain snap-x snap-mandatory custom-scrollbar'>
				{noodleChoice.map((ingredient) => (
					<IngredientCard
					key={ingredient.name}
					ingredient={ingredient}
					selectedItems={selectedItems}
					toggleItem={toggleItem}
					/>
				))}
			</div>
			<div className='flex gap-2 justify-end items-center'>
				{selectedNone && <p>Nie wybrano makaronu</p>}
				{!selectedMax && !selectedNone && <p>Wybierz tylko jeden makaron</p>}
				<ButtonComponent
					className='my-4 bg-amber-600 disabled:bg-gray-500 disabled:cursor-not-allowed'
					onClick={onClick}
					disabled={selectedNone || !selectedMax}>
					Dalej
				</ButtonComponent>
			</div>
    </section>
  );
};

export default NoodleChoice;