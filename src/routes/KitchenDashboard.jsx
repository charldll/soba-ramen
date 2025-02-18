/* eslint-disable no-unused-vars */
import { useState } from "react";
import { Link } from "react-router";

import ButtonComponent from "../components/ButtonComponent";
import useKitchen from "../hooks/useKitchen";
import { useAuth } from "../context/AuthContext";
import { getCurrentDate } from "../utils/getCurrentDate";
import Logo from "../Layout/imgs/soba-logo.svg";
import KitchenOrderCard from "../components/KitchenOrderCard";

import ToggleThemeButton from "../components/ToggleThemeButton";

const KitchenDashboard = () => {
  const { orders, formatTime, deleteOrder, serveOrder } = useKitchen();
  const { signOut, user } = useAuth();
  const [isFading, setIsFading] = useState(false);

  // Fade out effect on deletion or serving order
  const handleOrderAction = async (orderId, action) => {
    setIsFading(true);
    await action(orderId); // Ensures action is completed before continuing
    setTimeout(() => setIsFading(false), 500); // Fade-in after action completes
  };

  return (
    <div className="bg-grid min-h-screen">
      <nav className="bg-menu-red dark:bg-dark-tertiary">
        <div className="mx-auto flex min-h-16 max-w-7xl flex-wrap items-center justify-between px-2 py-2 sm:px-6 lg:px-8">
          <Link to="/">
            <img src={Logo} width={"90px"} />
          </Link>{" "}
          <ButtonComponent
            onClick={signOut}
            className="bg-logo-blue dark:bg-our-cream dark:text-dark-primary font-semibold text-white hover:bg-gray-700"
          >
            Wyloguj
          </ButtonComponent>
        </div>
      </nav>
      <div className="dark:bg-our-cream m-2 mx-auto w-fit rounded-md border p-2">
        <ToggleThemeButton />
      </div>
      <main className="mx-auto max-w-7xl p-2">
        <h1 className="dark:text-our-cream mx-auto flex w-fit flex-col rounded-md px-6 py-3 text-center text-xl font-bold sm:flex-row">
          ZAMÓWIENIA <span className="ml-4"> {getCurrentDate()}</span>
        </h1>

        {orders.length === 0 && (
          <h2 className="dark:text-our-cream px-2 py-10 text-center text-3xl">
            Brak zamówień
          </h2>
        )}

        <div
          className={`grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-2 px-2 py-10 lg:grid-cols-[repeat(auto-fit,minmax(400px,1fr))] ${isFading ? "animate-fade-out" : "animate-fade-in"}`}
        >
          {orders.map((order) => (
            <KitchenOrderCard
              key={order.id}
              order={order}
              handleOrderAction={handleOrderAction}
              deleteOrder={deleteOrder}
              serveOrder={serveOrder}
              formatTime={formatTime}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default KitchenDashboard;
