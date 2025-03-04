/* eslint-disable react/prop-types */
import ButtonComponent from "./ButtonComponent";
import Bowl from "../Layout/imgs/favicon.svg";
import { CircleMinus } from "lucide-react";

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
    <section className="m-4 mx-auto mb-8 p-4">
      <p className="font-krona text-center text-2xl uppercase">{loggedTable}</p>
      <br />
      <div className="rounded-[1rem] bg-[white] p-2 text-center shadow-md">
        <img
          className="m-auto mt-2 mb-3"
          src={Bowl}
          width={"60px"}
          color="gray"
        />
        <ul className="text-center text-xl">
          {selectedItems.map((item, index) => (
            <li
              key={item.name}
              className="flex items-center justify-center py-1"
            >
              {index === 0 ||
              index === 1 ||
              selectedItems.length === 3 ? null : (
                <button
                  className="cursor-pointer"
                  onClick={() => removeFromSelectedItems(item.name)}
                >
                  <CircleMinus size={20} className="mr-1" />
                </button>
              )}
              <div>
                <b>{item.name}:</b> {item.price},-
              </div>
            </li>
          ))}
        </ul>
        <h3 className="text-end text-xl">
          <b>Suma:</b> {totalPrice},-
        </h3>
      </div>

      <div className="flex items-center justify-center gap-2">
        <ButtonComponent
          className="my-4 h-[48px] bg-[#c66268] text-sm text-[white] uppercase sm:text-[16px]"
          onClick={onClick}
        >
          Wróć
        </ButtonComponent>
        <ButtonComponent
          className="my-4 h-[48px] bg-[#5780DC] text-sm text-[white] uppercase sm:text-[16px]"
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
