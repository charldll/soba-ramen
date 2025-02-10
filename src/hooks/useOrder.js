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

  const validateTable = async (table) => {
    try {
      const { data, error } = await supabase
        .from("restaurant_tables")
        .select("id, table_identifier")
        .eq("id", table)
        .single();

      if (error || !data) {
        sessionStorage.removeItem("tableId");
        sessionStorage.removeItem("loggedTable");

        return false;
      }

      sessionStorage.setItem("tableId", data.id);
      sessionStorage.setItem("loggedTable", data.table_identifier);

      return true;
    } catch (err) {
      console.error("Error validating table:", err);
      return false;
    }
  };

  const placeOrder = async () => {
    if (!tableId) {
      setOrderStatus("Zaloguj się do stolika");
      return;
    }

    if (selectedItems.length === 0) {
      setOrderStatus("Wybierz conajmniej jeden składnik");
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

      setOrderStatus("Zamówienie złożone");
      setSelectedItems([]);

      setTimeout(() => setOrderStatus(""), 3000);
    } catch (err) {
      setOrderStatus("Wystąpił błąd, sprobój ponownie");
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
    validateTable,
  };
};

export default useOrder;
