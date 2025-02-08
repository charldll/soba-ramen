/* eslint-disable react/prop-types */
const OrderSummary = ({
  selectedItems,
  totalPrice,
  orderStatus,
  submitOrder,
}) => {
  return (
    <div>
      <h2>Your Order</h2>
      <div>
        {selectedItems.length === 0 ? (
          <p>No items selected.</p>
        ) : (
          <ul>
            {selectedItems.map((item) => (
              <li key={item.name}>
                {item.name} - ${item.price}
              </li>
            ))}
          </ul>
        )}
        <h3>Total: ${totalPrice}</h3>
      </div>

      {orderStatus && <p>{orderStatus}</p>}

      <button onClick={submitOrder} disabled={selectedItems.length === 0}>
        Place Order
      </button>
    </div>
  );
};

export default OrderSummary;
