import Map from "../components/GoogleMaps";
import ContactForm from "../components/ContactForm";
import Żaklina from "../Layout/imgs/Żaklina.png";
import Inga from "../Layout/imgs/Inga.png";
import Agnieszka from "../Layout/imgs/Agnieszka.png";

const Contact = () => {
  return (
    <main className="relative flex flex-col items-center gap-8 p-4">
      <div className="mx-auto my-4 w-full max-w-[95%] rounded-2xl bg-[#F6EFEF] p-6 py-12 shadow-lg md:max-w-[90%] xl:max-w-[85%]">
        {/*  Mapa + Informacje */}

        {/*Informacje */}
        <div className="flex w-full flex-col items-center justify-center justify-self-center p-6 text-center lg:w-1/2">
          <h1 className="text-menu-red text-3xl font-bold">
            Gdzie nas znajdziesz?
          </h1>
          <p className="mt-2 text-lg">Soba Ramen</p>
          <p className="text-lg">ul. Ramenowa 6/3, 12-345 Ramenoland</p>

          <h2 className="text-menu-red mt-6 text-2xl font-semibold">
            Godziny otwarcia
          </h2>
          <p className="text-lg">Poniedziałek - Piątek: 12:00 - 22:00</p>
          <p className="text-lg">Sobota - Niedziela: 13:00 - 23:00</p>
        </div>

        <div className="mt-[30px] flex w-full flex-col-reverse gap-8">
          {/* Mapa */}
          <div className="relative w-full lg:h-80 lg:w-1/2">
            <Map />
          </div>
        </div>
        <div className="flex flex-row items-center ">
          <ContactForm></ContactForm>
          <div className="sr-only sm:not-sr-only">
          <img
            src={Żaklina}
            alt="Żaklina"
            className=" h-50 w-50 transform rounded-full object-cover transition duration-300 hover:scale-110"
          />
          <img
            src={Inga}
            alt="Inga"
            className="h-50 w-50 translate-y-[-10%] transform rounded-full object-cover transition duration-300 hover:scale-110"
          />
          <img
            src={Agnieszka}
            alt="Agnieszka"
            className="h-50 w-50 translate-y-[-20%] transform rounded-full object-cover transition duration-300 hover:scale-110"
          />
          </div>
        </div>
      </div>
    </main>
  );
};
``;
export default Contact;
