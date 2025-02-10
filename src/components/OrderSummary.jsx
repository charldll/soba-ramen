/* eslint-disable react/prop-types */
import ButtonComponent from "./ButtonComponent";

const OrderSummary = ({
  selectedItems,
  totalPrice,
  orderStatus,
  placeOrder,
}) => {
  return (
    <section className="text-center wrapper-inner">
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

      <ButtonComponent
        className="bg-amber-600"
        onClick={placeOrder}
        disabled={selectedItems.length === 0}>
        Złóż zamówienie
      </ButtonComponent>
    </section>
  );
};

export default OrderSummary;
