/* eslint-disable react/prop-types */
import ButtonComponent from "./ButtonComponent";

const OrderSummary = ({ selectedItems, totalPrice, placeOrder, onClick }) => {
  const loggedTable = sessionStorage.getItem("loggedTable");
  return (
    <section className="text-center wrapper-inner">
      <p>{loggedTable}</p>
      <div>
        <ul>
          {selectedItems.map((item) => (
            <li key={item.name}>
              {item.name}: {item.price} PLN
            </li>
          ))}
        </ul>

        <h3>Suma: {totalPrice} PLN</h3>
      </div>

      <div className="flex justify-center items-center gap-2">
        <ButtonComponent className="my-4 text-[white] bg-[#c66268] uppercase" onClick={onClick}>
          Wróć
        </ButtonComponent>
        <ButtonComponent
          className="bg-[#5780DC] text-[white] uppercase"
          onClick={placeOrder}
          disabled={selectedItems.length === 0}>
          Złóż zamówienie
        </ButtonComponent>
      </div>
    </section>
  );
};

export default OrderSummary;
