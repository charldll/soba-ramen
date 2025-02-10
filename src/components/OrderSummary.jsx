/* eslint-disable react/prop-types */
import ButtonComponent from "./ButtonComponent";

const OrderSummary = ({
  selectedItems,
  totalPrice,
  orderStatus,
  placeOrder,
  onClick,
}) => {
  const loggedTable = sessionStorage.getItem("loggedTable");
  return (
    <section className="text-center wrapper-inner">
      <p>{loggedTable}</p>
      <div>
        {selectedItems.length === 0 ? (
          <p>Nie wybrano składników.</p>
        ) : (
          <ul>
            {selectedItems.map((item) => (
              <li key={item.name}>
                {item.name} - {item.price} PLN
              </li>
            ))}
          </ul>
        )}
        <h3>Suma: {totalPrice} PLN</h3>
      </div>

      {orderStatus && <p>{orderStatus}</p>}
      <div className="flex justify-center items-center gap-2">
        <ButtonComponent className="my-4 bg-amber-600 " onClick={onClick}>
          Wróć
        </ButtonComponent>
        <ButtonComponent
          className="bg-green-600"
          onClick={placeOrder}
          disabled={selectedItems.length === 0}>
          Złóż zamówienie
        </ButtonComponent>
      </div>
    </section>
  );
};

export default OrderSummary;
