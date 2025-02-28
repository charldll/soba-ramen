/* eslint-disable react/prop-types */
import ButtonComponent from "./ButtonComponent";
import Bowl from '../Layout/imgs/favicon.svg';

const OrderSummary = ({ selectedItems, totalPrice, placeOrder, onClick }) => {
  const loggedTable = sessionStorage.getItem("loggedTable");
  return (
    <section className="wrapper-inner">
      <p className="text-center uppercase font-krona text-2xl">{loggedTable}</p><br/>
      <div className="bg-[white] rounded-[1rem] shadow-md p-[0.5rem] text-center">
      <img className="m-auto" src={Bowl} width={"60px"} />
        <ul className="text-center">
          {selectedItems.map((item) => (
            <li key={item.name}>
              <b>{item.name}:</b> {item.price},-
            </li>
          ))}
        </ul>
        <h3 className="text-end"><b>Suma:</b> {totalPrice},-</h3>
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
