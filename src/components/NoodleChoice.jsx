/* eslint-disable react/prop-types*/
import { noodleChoice } from '../data/noodleChoice';
import IngredientCard from './IngredientCard';
import ButtonComponent from './ButtonComponent';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

const NoodleChoice = ({ selectedItems, chooseOneOptionOnly, handleNext, handlePrev }) => {
  const selectedNone = selectedItems.length === 1;

  return (
  	<section className='w-full max-w-[70rem] mx-auto px-2'>
			<div className='flex max-w-[750px]'>
			<Swiper
          slidesPerView={3.5}
          freeMode={true}
          pagination={{
						dynamicBullets: true,
          }}
          modules={[FreeMode, Pagination]}
          loop={true}
          className='mySwiper'
					breakpoints={{
						0: {
							slidesPerView: 1.5,
						},
						640: {
							slidesPerView: 2,
						},
						768: {
							slidesPerView: 3,
						},
						1024: {
							slidesPerView: 4,
						},
					}}
					>
				{noodleChoice.map((ingredient) => (
					<SwiperSlide key={ingredient.name}>
					<IngredientCard
					ingredient={ingredient}
					selectedItems={selectedItems}
					toggleItem={() => chooseOneOptionOnly(1, ingredient)}
					/>
					</SwiperSlide>
				))}
				</Swiper>
			</div>
			<div className='flex gap-2 justify-end items-center'>
				{selectedNone && <p>Nie wybrano makaronu</p>}
				<ButtonComponent
					className='my-4 uppercase text-[white] bg-[#c66268] disabled:bg-[#dd9ba1] disabled:cursor-not-allowed'
					onClick={handlePrev}>
					Wstecz
				</ButtonComponent>
				<ButtonComponent
					className='my-4 uppercase text-[white] bg-[#af282f] disabled:bg-[#dd9ba1] disabled:cursor-not-allowed'
					onClick={handleNext}
					disabled={selectedNone}>
					Dalej
				</ButtonComponent>
			</div>
    </section>
  );
};

export default NoodleChoice;