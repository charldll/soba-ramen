import Map from "../components/GoogleMaps";
import ContactForm from "../components/ContactForm";

const Contact = () => {
  return (
    <main className="relative flex flex-col items-center gap-8 p-4">
      {/*  Mapa + Informacje */}
      <div className="mt-[30px] flex w-full max-w-6xl flex-col-reverse gap-8 lg:flex-row">
        {/* Mapa */}
        <div className="relative w-full lg:h-96 lg:w-1/2">
          <Map />
        </div>

        {/*Informacje */}
        <div className="text-logo-blue flex w-full flex-col items-center justify-center p-6 text-center lg:w-1/2">
          <h1 className="text-3xl font-bold">Gdzie nas znajdziesz?</h1>
          <p className="mt-2 text-lg">Soba Ramen</p>
          <p className="text-lg">ul. Ramenowa 6/3, 12-345 Ramenoland</p>

          <h2 className="mt-6 text-2xl font-semibold">Godziny otwarcia</h2>
          <p className="text-lg">Poniedziałek - Piątek: 12:00 - 22:00</p>
          <p className="text-lg">Sobota - Niedziela: 13:00 - 23:00</p>
        </div>
      </div>

      <ContactForm></ContactForm>
    </main>
  );
};

export default Contact;
