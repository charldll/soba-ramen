import { X, CookingPot } from "lucide-react";
import ButtonComponent from "../components/ButtonComponent";
import useKitchen from "../hooks/useKitchen";
import { useAuth } from "../context/AuthContext";

const date = new Date();
const currentDate = `${date.getDate()}-${String(date.getMonth() + 1).padStart(2, "0")}-${date.getFullYear()}`;

const Kitchen = () => {
  const { orders, formatTime, deleteOrder, serveOrder } = useKitchen();
  const { signOut, user } = useAuth();

  const handleServeOrder = async (orderId) => {
    await serveOrder(orderId); // Updates DB & UI via useKitchen
  };

  const getTableNumber = (id) => {
    switch (id) {
      case "3bcf907f-dc5d-4523-950f-9407d9056281":
        return "Stolik 1";
      case "69e9f17b-5630-44dd-b90a-8a861994cbbf":
        return "Stolik 2";
      case "5d6cddb5-6ed1-4985-873f-1a24af915b29":
        return "Stolik 3";
      case "2a367db7-6c5e-44e4-9c69-28cfc09bdbde":
        return "Stolik 4";
      default:
        return "Błąd stolika. Zapytać kelnera";
    }
  };

  return (
    <main className="wrapper-outer">
      <h1 className="mx-auto w-fit rounded-md bg-rose-200 px-6 py-3 text-center text-4xl font-bold text-white shadow-md">
        ZAMÓWIENIA {currentDate}
      </h1>
      <div className="flex items-center justify-center gap-4">
        <span className="text-gray-600">{user?.email}</span>
        <ButtonComponent onClick={signOut} className="bg-red-400">
          Wyloguj
        </ButtonComponent>
      </div>
      <div className="grid grid-cols-2">
        {orders.map((order) => (
          <section key={order.id} className="p-8">
            <div className="mt-6 rounded-lg border bg-white p-6 shadow-lg">
              <h2 className="text-xl font-semibold text-black">
                {getTableNumber(order.table_id)}, {formatTime(order.created_at)}
              </h2>

              <h3 className="mt-2 font-medium text-black">Produkty:</h3>
              <ol className="list-decimal pl-4 text-black">
                {order.dish_items
                  ? JSON.parse(order.dish_items).map((item, index) => (
                      <li key={index}>{item.name}</li>
                    ))
                  : null}
              </ol>

              <div className="mt-4 flex justify-center gap-2">
                <ButtonComponent
                  className="bg-red-400 disabled:cursor-not-allowed disabled:bg-gray-500"
                  onClick={() => deleteOrder(order.id)}
                  disabled={order.isServed}
                >
                  <X />
                </ButtonComponent>
                <ButtonComponent
                  className="bg-green-400 disabled:cursor-not-allowed disabled:bg-gray-500"
                  onClick={() => handleServeOrder(order.id)}
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
  );
};

export default Kitchen;
