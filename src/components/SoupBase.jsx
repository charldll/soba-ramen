/* eslint-disable react/prop-types */
import { soupBase } from '../data/soupBase';
import IngredientCard from "./IngredientCard";
import ButtonComponent from './ButtonComponent';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

const SoupBase = ({ selectedItems, chooseOneOptionOnly, onClick }) => {
  const selectedNone = selectedItems.length === 0;

  return (
    <section className='w-full max-w-[70rem] mx-auto px-2'>
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
            slidesPerView: 3,
          },
          930: {
            slidesPerView: 4,
          },
          1024: {
            slidesPerView: 4.5,
          },
        }}>
        {soupBase.map((ingredient) => (
          <SwiperSlide key={ingredient.name}>
            <IngredientCard
            ingredient={ingredient}
            selectedItems={selectedItems}
            toggleItem={() => chooseOneOptionOnly(0, ingredient)}
          />
        </SwiperSlide>
        ))}
        </Swiper>
      </div>
      <div className="flex gap-2 justify-end items-center">
        {selectedNone && <p>Nie wybrano bazy</p>}
        <ButtonComponent
          className='my-4 text-[white] uppercase bg-[#af282f] disabled:bg-[#dd9ba1] disabled:cursor-not-allowed'
          onClick={onClick}
          disabled={selectedNone}>
          	Dalej
        </ButtonComponent>
      </div>
    </section>
  );
};

export default SoupBase;