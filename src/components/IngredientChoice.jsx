/* eslint-disable react/prop-types */
import IngredientCard from "./IngredientCard";
import { ingredientsData } from "../data/ingredientsData";
import ButtonComponent from "./ButtonComponent";
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

const IngredientChoice = ({ selectedItems, toggleItem, handleNext, handlePrev }) => {
  const selectetItemsEmpty = selectedItems.length <= 2;

  return (
    <section className="w-full max-w-[70rem] mx-auto px-2">
      <div className='text-center uppercase text-2xl mb-2 font-krona'>
        Wybierz dodatki
      </div>
      <div className="flex max-w-[750px]">
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
              slidesPerView: 1.2,
            },
            375: {
              slidesPerView: 1.5,
            },
            450: {
              slidesPerView: 2,
            },
            600: {
              slidesPerView: 2.5,
            },
            780: {
              slidesPerView: 2.7,
            },
            930: {
              slidesPerView: 3.1,
            },
            1024: {
              slidesPerView: 3.7,
            },
          }}>
        {ingredientsData.map((ingredient) => (
          <SwiperSlide key={ingredient.name}>
          <IngredientCard
            ingredient={ingredient}
            selectedItems={selectedItems}
            toggleItem={toggleItem}
          />
          </SwiperSlide>
        ))}
        </Swiper>
      </div>

      <div className="flex gap-2 justify-end items-center">
        {selectetItemsEmpty && <p>Nie wybrano składników</p>}
        <ButtonComponent
          className="my-4 uppercase text-[white] bg-[#c66268] disabled:bg-[#dd9ba1] disabled:cursor-not-allowed"
          onClick={handlePrev}>
          Wstecz
        </ButtonComponent>
        <ButtonComponent
          className="my-4 uppercase text-[white] bg-[#af282f] disabled:bg-[#dd9ba1] disabled:cursor-not-allowed"
          onClick={handleNext}
          disabled={selectetItemsEmpty}>
          Dalej
        </ButtonComponent>
      </div>
    </section>
  );
};

export default IngredientChoice;
