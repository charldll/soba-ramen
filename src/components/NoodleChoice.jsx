/* eslint-disable react/prop-types*/
import { noodleChoice } from "../data/noodleChoice";
import IngredientCard from "./IngredientCard";
import ButtonComponent from "./ButtonComponent";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

const NoodleChoice = ({
  selectedItems,
  chooseOneOptionOnly,
  handleNext,
  handlePrev,
}) => {
  const selectedNone = selectedItems.length === 1;

  return (
    <section className="mx-auto w-full max-w-[70rem] px-2">
      <div className="font-krona mb-2 text-center text-2xl uppercase">
        Wybierz makaron
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
          className="mySwiper"
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
      <div className="flex-row-reverse items-center gap-4 md:flex">
        <div className="flex items-center justify-end gap-2">
          <ButtonComponent
            className="my-4 bg-[#c66268] text-[white] uppercase disabled:cursor-not-allowed disabled:bg-[#d3c7d2]"
            onClick={handlePrev}
          >
            Wstecz
          </ButtonComponent>
          <ButtonComponent
            className="bg-menu-red my-4 text-[white] uppercase disabled:cursor-not-allowed disabled:bg-[#d3c7d2]"
            onClick={handleNext}
            disabled={selectedNone}
          >
            Dalej
          </ButtonComponent>
        </div>
        {selectedNone && (
          <p className="flex justify-end font-light tracking-tighter uppercase">
            Nie wybrano makaronu
          </p>
        )}
      </div>
    </section>
  );
};

export default NoodleChoice;
