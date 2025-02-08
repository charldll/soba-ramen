import { useState } from "react";
import { supabase } from "../supabaseClinet";

const useOrder = () => {
  const [selectedItems, setSelectedItems] = useState([]);
  const [orderStatus, setOrderStatus] = useState("");

  const tableId = sessionStorage.getItem("tableId");

  const toggleItem = (item) => {
    setSelectedItems((prev) => {
      const exists = prev.find((i) => i.name === item.name);
      if (exists) {
        return prev.filter((i) => i.name !== item.name);
      }
      return [...prev, item];
    });
  };

  const totalPrice = selectedItems.reduce((sum, item) => sum + item.price, 0);

  const placeOrder = async () => {
    if (!tableId) {
      setOrderStatus("Please log in with a table code first");
      return;
    }

    if (selectedItems.length === 0) {
      setOrderStatus("Please select at least one item");
      return;
    }

    try {
      const { error } = await supabase.from("orders").insert([
        {
          table_id: tableId,
          dish_items: selectedItems,
          total_price: totalPrice,
        },
      ]);

      if (error) throw error;

      setOrderStatus("Order placed successfully!");
      setSelectedItems([]);

      setTimeout(() => setOrderStatus(""), 3000);
    } catch (err) {
      setOrderStatus("Error placing order. Please try again.");
      console.error("Error:", err);
    }
  };

  return {
    selectedItems,
    setSelectedItems,
    toggleItem,
    totalPrice,
    placeOrder,
    orderStatus,
  };
};

export default useOrder;
