import { useState, useEffect } from "react";
import { supabase } from "../supabaseClinet";

const useKitchen = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // Fetch initial orders
    fetchOrders();

    // Subscribe to new orders
    const channel = supabase
      .channel("orders") //a new channel named "orders" where the application will listen for changes related to the orders table
      .on(
        // subscribing to a specific event
        "postgres_changes",
        {
          event: "INSERT", // a new record is inserted into the table.
          schema: "public", //the default schema in PostgreSQL.
          table: "orders", //we're specifically subscribing to changes in the orders table.
        }, //When a new order is added (an INSERT operation), the callback function (payload) => {} is called with the payload containing the data of the new order.
        (payload) => {
          // Only add the order if it's from today
          const orderDate = new Date(payload.new.created_at); //contains the newly inserted row data
          const today = new Date();

          //checks if the newly created order's date matches today's date.
          if (orderDate.toDateString() === today.toDateString()) {
            setOrders((current) => [payload.new, ...current]); //adding the new order to the beginning of the orders list.
          }
        },
      )
      .on(
        "postgres_changes",
        { event: "UPDATE", schema: "public", table: "orders" },
        (payload) => {
          console.log("Order updated:", payload.new);
          setOrders((currentOrders) => {
            const updatedOrders = currentOrders.map((order) =>
              order.id === payload.new.id ? payload.new : order,
            );

            // Sort orders: unserved first, served last
            return updatedOrders.sort((a, b) => a.isServed - b.isServed);
          });
        },
      )
      .subscribe();

    //When the component is unmounted, it unsubscribes from the channel to avoid memory leaks and unnecessary real-time updates.
    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  const fetchOrders = async () => {
    // Get today's date at midnight UTC
    const today = new Date();
    today.setUTCHours(0, 0, 0, 0);

    const { data, error } = await supabase
      .from("orders")
      .select("*")
      .gte("created_at", today.toISOString())
      .order("isServed", { ascending: true }) // Unserved orders first
      .order("created_at", { ascending: false }); // Newest first

    if (error) {
      console.error("Error fetching orders:", error);
      return;
    }

    setOrders(data);
  };

  const formatTime = (timestamp) => {
    return new Date(timestamp).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    });
  };
  // Function to delete an order
  const deleteOrder = async (orderId) => {
    try {
      const { data, error } = await supabase
        .from("orders")
        .delete()
        .eq("id", orderId);

      if (error) {
        // Log the full error response from Supabase
        console.error("Error deleting order:", error);
      } else {
        console.log("Order deleted successfully:", data);
        // Update the UI by removing the deleted order
        setOrders(orders.filter((order) => order.id !== orderId));
      }
    } catch (error) {
      console.error("Unexpected error:", error);
    }
  };

  const serveOrder = async (orderId) => {
    try {
      const { data, error } = await supabase
        .from("orders")
        .update({ isServed: true })
        .eq("id", orderId)
        .select();
      if (error) {
        console.error("Error serving order:", error);
      } else {
        console.log("Order served successfully:", data);

        // Update state immediately after serving order
        setOrders((currentOrders) =>
          currentOrders.map((order) =>
            order.id === orderId ? { ...order, isServed: true } : order,
          ),
        );
      }
    } catch (error) {
      console.error("Unexpected error:", error);
    }
  };

  return {
    orders,
    setOrders,
    fetchOrders,
    formatTime,
    deleteOrder,
    serveOrder,
  };
};

export default useKitchen;
