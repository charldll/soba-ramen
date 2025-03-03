import { useState, useEffect } from "react";
import Map from "../components/GoogleMaps";
import ContactForm from "../components/ContactForm";
import ScrollToTopButton from "../components/ScrollToTopButton";
import Żaklina from "../Layout/imgs/Żaklina.png";
import Inga from "../Layout/imgs/Inga.png";
import Agnieszka from "../Layout/imgs/Agnieszka.png";

const images = [Żaklina, Inga, Agnieszka];

const Contact = () => {
  const [current, setCurrent] = useState(0);
  const [next, setNext] = useState(1);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimating(true);

      setTimeout(() => {
        setCurrent(next);
        setNext((prev) => (prev + 1) % images.length);
        setAnimating(false);
      }, 500);
    }, 4000);

    return () => clearInterval(interval);
  }, [next]);

  return (
    <main>
      <div className="mx-auto my-4 w-full max-w-[95%] rounded-2xl bg-[#F6EFEF] p-6 py-15 shadow-lg md:max-w-[90%] xl:max-w-[90%]">
        <h1 className="animate-slide text-menu-red justify-center pb-10 text-center text-3xl font-bold md:text-4xl lg:text-4xl">
          Gdzie nas znajdziesz?
        </h1>

        <div className="relative flex w-full flex-col-reverse gap-8 overflow-clip lg:flex-row lg:gap-1 lg:p-20 xl:mt-7 xl:gap-8">
          <div className="animate-slide w-full overflow-clip lg:h-100 lg:w-200 lg:shadow-2xl">
            <Map />
          </div>
          <div className="flex w-1/2 flex-col items-center justify-center gap-4 self-center text-center">
            <p className="mt-2 text-lg font-semibold">Soba Ramen</p>
            <p className="flex flex-col lg:text-lg">
              ul. Kraszewskiego 1<span> 12-345 Ramenoland</span>
            </p>
            <h2 className="text-menu-red mt-6 text-2xl font-semibold">
              Godziny otwarcia
            </h2>
            <p className="flex flex-col lg:text-lg">
              Poniedziałek - Piątek <span>12:00 - 22:00</span>
            </p>
            <p className="flex flex-col lg:text-lg">
              Sobota - Niedziela <span>13:00 - 23:00</span>
            </p>
          </div>
        </div>

        <div className="flex flex-row items-stretch justify-center">
          <ContactForm />

          <div className="bg-menu-red sr-only mx-4 flex w-full max-w-[200px] flex-col items-center justify-center gap-4 shadow-lg md:max-w-[500px] lg:not-sr-only lg:max-h-[600px] lg:max-w-[300px]">
            <p className="text-semibold mb-6 text-center text-2xl text-white">
              Nasz zespół chętnie Ci pomoże!
              <span>
                {" "}
                Wypełnij formularz, a skontaktujemy się z Tobą jak najszybciej.
              </span>
            </p>

            {/* przesuwanie zdjęć */}
            <div className="relative h-50 w-50 overflow-hidden">
              <img
                src={images[current]}
                alt="Członek zespołu"
                className={`absolute h-50 w-50 rounded-full transition-transform duration-500 ease-in-out ${
                  animating
                    ? "translate-x-full opacity-100"
                    : "translate-x-0 opacity-100"
                }`}
              />
            </div>
          </div>
        </div>
      </div>

      <ScrollToTopButton />
    </main>
  );
};

export default Contact;
