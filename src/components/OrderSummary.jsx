/* eslint-disable react/prop-types */
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

      <button
        className="px-4 py-2 bg-amber-600 cursor-pointer rounded-md"
        onClick={placeOrder}
        disabled={selectedItems.length === 0}>
        Złóż zamówienie
      </button>
    </section>
  );
};

export default OrderSummary;
