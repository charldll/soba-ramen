/* eslint-disable react/prop-types */
import ButtonComponent from "./ButtonComponent";
import Bowl from "../Layout/imgs/favicon.svg";
import { CircleMinus } from 'lucide-react';

const OrderSummary = ({
  selectedItems,
  totalPrice,
  placeOrder,
  onClick,
  setSelectedItems,
}) => {
  const loggedTable = sessionStorage.getItem("loggedTable");
  const removeFromSelectedItems = (ingredient) => {
    console.log("Before: ", selectedItems);
    const updatedSelectedItems = selectedItems.filter(
      (item) => item.name !== ingredient,
    );
    setSelectedItems(updatedSelectedItems);
    console.log("Removing: ", ingredient);
    console.log("After: ", selectedItems);
  };

  return (
    <section className="wrapper-inner">
      <p className="font-krona text-center text-2xl uppercase">{loggedTable}</p>
      <br />
      <div className="rounded-[1rem] bg-[white] p-[0.5rem] text-center shadow-md">
        <img className="m-auto mb-3 mt-2" src={Bowl} width={"60px"} color="gray"/>
        <ul className="text-center">
          {selectedItems.map((item, index) => (
            <li key={item.name}>
              {index === 0 ||
              index === 1 ||
              selectedItems.length === 3 ? null : (
                <button
                  className="cursor-pointer"
                  onClick={() => removeFromSelectedItems(item.name)}
                >
                  <CircleMinus size={12} className="mr-1"/>
                </button>
              )}
              <b>{item.name}:</b> {item.price},-
            </li>
          ))}
        </ul>
        <h3 className="text-end">
          <b>Suma:</b> {totalPrice},-
        </h3>
      </div>

      <div className="flex items-center justify-center gap-2">
        <ButtonComponent
          className="my-4 bg-[#c66268] text-[white] uppercase h-[48px] text-sm sm:text-[16px]"
          onClick={onClick}
        >
          Wróć
        </ButtonComponent>
        <ButtonComponent
          className="bg-[#5780DC] text-[white] uppercase my-4 h-[48px] text-sm sm:text-[16px]"
          onClick={placeOrder}
          disabled={selectedItems.length === 0}
        >
          Zamów ramen
        </ButtonComponent>
      </div>
    </section>
  );
};

export default OrderSummary;
