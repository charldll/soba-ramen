import { Link } from 'react-router';
import Bowl from "../Layout/imgs/favicon.svg";
import ButtonComponent from "./ButtonComponent";

const OrderConfirmation = () => {

  return (
    <section className="text-center mx-auto mb-8 p-4 m-4">
      <div className="rounded-4 bg-[white] p-4 text-center shadow-md">
        <img className="m-auto mb-3 mt-2" src={Bowl} width={"60px"}/>
        Przyjęliśmy zamówienie, kucharz wywija już nożem.
      </div>

      <div className="flex items-center justify-center gap-2">
        <ButtonComponent
          className="my-4 bg-[#c66268] text-[white] uppercase"
        >
          <Link to={`/`}>
          Do strony głównej
          </Link>
        </ButtonComponent>
      </div>
    </section>
  );
};

export default OrderConfirmation;
