/* eslint-disable react/prop-types */
import { X, CookingPot } from "lucide-react";

import ButtonComponent from "./ButtonComponent";
import { getTableNumber } from "../utils/getTableNumber";

const KitchenOrderCard = ({
  order,
  handleOrderAction,
  deleteOrder,
  serveOrder,
  formatTime,
}) => {
  const parsedDishItems = JSON.parse(order?.dish_items);

  return (
    <section>
      <div className="border-logo-blue bg-our-cream dark:bg-dark-secondary animate-fade-in dark:border-dark-tertiary flex h-full min-h-[250px] flex-col justify-between space-y-4 rounded-lg border-2 p-6 shadow-xl">
        <code className="text-[.8rem]">ZAM. {order.id.slice(-6)}</code>
        <h2 className="py-2">
          {formatTime(order.created_at)}
          <strong className="ml-3 border-l-1 pl-3 text-xl font-semibold text-black">
            {getTableNumber(order.table_id)}
          </strong>
        </h2>
        <ul className="flex list-none flex-wrap gap-2 text-black">
          {parsedDishItems.map((item, index) => (
            <li key={index} className="rounded-md bg-[#e5c5c6] p-1 uppercase">
              {item.name}
            </li>
          ))}
        </ul>
        <strong>DO ZAPŁATY: {order.total_price} PLN</strong>
        <div className="border-logo-blue dark:border-dark-tertiary flex justify-center gap-2 border-t-2 pt-4">
          <ButtonComponent
            className="bg-menu-red dark:border-our-cream text-white disabled:hidden dark:border-2"
            onClick={() => handleOrderAction(order.id, deleteOrder)}
            disabled={order.isServed}
            type="button"
          >
            <X />
          </ButtonComponent>
          <ButtonComponent
            className="bg-logo-blue dark:bg-dark-tertiary dark:border-our-cream text-white disabled:hidden dark:border-2"
            onClick={() => handleOrderAction(order.id, serveOrder)}
            disabled={order.isServed}
            type="button"
          >
            <CookingPot />
          </ButtonComponent>
        </div>
      </div>
    </section>
  );
};

export default KitchenOrderCard;
