/* eslint-disable no-unused-vars */
import { X, CookingPot } from "lucide-react";
import ButtonComponent from "../components/ButtonComponent";
import useKitchen from "../hooks/useKitchen";
import { useAuth } from "../context/AuthContext";
import { getTableNumber } from "../utils/getTableNumber";
import { getCurrentDate } from "../utils/getCurrentDate";
import { useState } from "react";

const KitchenDashboard = () => {
  const { orders, formatTime, deleteOrder, serveOrder } = useKitchen();
  const { signOut, user } = useAuth();
  const [fadingOrders, setFadingOrders] = useState(new Set());

  // Fade out effect on deletion or serving order
  const handleOrderAction = async (orderId, action) => {
    setFadingOrders((prev) => {
      const newSet = new Set(prev);
      newSet.add(orderId); // Marks for fade-out
      return newSet;
    });

    setTimeout(async () => {
      await action(orderId); //  Calls the provided action (serve or delete)
      setFadingOrders((prev) => {
        const newSet = new Set(prev);
        newSet.delete(orderId);
        return newSet;
      });
    }, 500); // Waits for fade-out animation
  };

  return (
    <div className="bg-grid">
      <main className="mx-auto max-w-7xl p-2">
        <h1 className="mx-auto flex w-fit flex-col rounded-md px-6 py-3 text-center text-xl font-bold sm:flex-row">
          ZAMÓWIENIA <span className="ml-4"> {getCurrentDate()}</span>
        </h1>
        <div className="flex items-center justify-center">
          <ButtonComponent
            onClick={signOut}
            className="bg-logo-blue font-semibold text-white hover:bg-gray-700"
          >
            Wyloguj
          </ButtonComponent>
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-2 px-2 py-10 lg:grid-cols-[repeat(auto-fit,minmax(400px,1fr))]">
          {orders.map((order) => (
            <section
              key={order.id}
              className={fadingOrders.has(order.id) ? "animate-fade-out" : ""}
            >
              <div className="border-logo-blue bg-our-cream animate-fade-in flex h-full min-h-[250px] flex-col justify-between space-y-4 rounded-lg border-2 p-6 shadow-xl">
                <code className="text-[.8rem]">ZAM. {order.id.slice(-6)}</code>
                <h2 className="py-2">
                  {formatTime(order.created_at)}
                  <strong className="ml-3 border-l-1 pl-3 text-xl font-semibold text-black">
                    {getTableNumber(order.table_id)}
                  </strong>
                </h2>
                <ul className="flex list-none flex-wrap gap-2 text-black">
                  {order.dish_items
                    ? JSON.parse(order.dish_items).map((item, index) => (
                        <li
                          key={index}
                          className="rounded-md bg-[#e5c5c6] p-1 uppercase"
                        >
                          {item.name}
                        </li>
                      ))
                    : null}
                </ul>
                <strong className="">
                  DO ZAPŁATY: {order.total_price} PLN
                </strong>
                <div className="border-logo-blue flex justify-center gap-2 border-t-2 pt-4">
                  <ButtonComponent
                    className="bg-menu-red text-white disabled:hidden"
                    onClick={() => handleOrderAction(order.id, deleteOrder)}
                    disabled={order.isServed}
                  >
                    <X />
                  </ButtonComponent>
                  <ButtonComponent
                    className="bg-logo-blue text-white disabled:hidden"
                    onClick={() => handleOrderAction(order.id, serveOrder)}
                    disabled={order.isServed}
                  >
                    <CookingPot />
                  </ButtonComponent>
                </div>
              </div>
            </section>
          ))}
        </div>
      </main>
    </div>
  );
};

export default KitchenDashboard;
