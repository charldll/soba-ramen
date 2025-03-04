import { Link } from "react-router";
import Bowl from "../Layout/imgs/favicon.svg";
import ButtonComponent from "./ButtonComponent";

const OrderConfirmation = () => {
  const loggedTable = sessionStorage.getItem("tableId");
  return (
    <section className="m-4 mx-auto mb-8 p-4 text-center">
      <div className="rounded-4 bg-[white] p-4 text-center shadow-md">
        <img className="m-auto mt-2 mb-3" src={Bowl} width={"60px"} />
        Przyjęliśmy zamówienie, kucharz wywija już nożem.
      </div>

      <div className="flex items-center justify-center gap-2">
        <ButtonComponent className="my-4 bg-[#c66268] text-[white] uppercase">
          <Link to={`/`}>Do strony głównej</Link>
        </ButtonComponent>
        <ButtonComponent
          className="my-4 bg-[#c66268] text-[white] uppercase"
          onClick={() =>
            window.location.replace(
              `https://soba-ramen.netlify.app/custom-ramen/${loggedTable}`,
            )
          }
        >
          Drugi ramen?
        </ButtonComponent>
      </div>
    </section>
  );
};

export default OrderConfirmation;
