/* eslint-disable react/prop-types */
const OrderSummary = ({
  selectedItems,
  totalPrice,
  orderStatus,
  placeOrder,
}) => {
  return (
    <div>
      <div>
        {selectedItems.length === 0 ? (
          <p>Nie wybrano składników.</p>
        ) : (
          <ul>
            {selectedItems.map((item) => (
              <li key={item.name}>
                {item.name} - ${item.price}
              </li>
            ))}
          </ul>
        )}
        <h3>Suma: ${totalPrice}</h3>
      </div>

      {orderStatus && <p>{orderStatus}</p>}

      <button
        className="px-4 py-2 bg-amber-600"
        onClick={placeOrder}
        disabled={selectedItems.length === 0}>
        Złóż zamówienie
      </button>
    </div>
  );
};

export default OrderSummary;
