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
      <div className="mx-auto my-4 flex w-full max-w-[95%] flex-col items-center gap-8 rounded-2xl bg-[#F6EFEF] py-12 shadow-lg md:max-w-[90%] xl:max-w-[85%]">
        <h1 className="animate-slide border-menu-red border-b text-2xl font-bold md:text-3xl lg:border-none lg:text-4xl">
          Gdzie nas znajdziesz?
        </h1>
        {/*  Mapa + Informacje */}
        <div className="relative flex w-full flex-col-reverse gap-8 overflow-clip lg:flex-row lg:gap-1 lg:bg-[#d3c7d2] lg:p-20 xl:mt-7 xl:gap-8">
          {/* Mapa */}
          <div className="animate-slide w-full shadow-black lg:h-96 lg:w-1/2">
            <Map />
          </div>

          {/*Informacje */}
          <div className="text-logo-blue flex w-full flex-col items-center justify-center px-2 text-center lg:w-1/2 lg:p-6">
            <div className="animate-slide-from-top absolute top-[-2%] hidden grid-cols-3 gap-2 overflow-clip lg:grid">
              <div className="h-28 w-4 bg-[#F6EFEF]"></div>
              <div className="bg-menu-red h-22 w-4"></div>
              <div className="h-18 w-4 bg-[#F6EFEF]"></div>
            </div>
            <div className="animate-slide w-3/4 rounded-lg bg-[#d3c7d2] py-4 lg:animate-none">
              <p className="font-semibold lg:text-2xl">Soba Ramen</p>
              <p className="flex flex-col lg:text-lg">
                ul. Kraszewskiego 1<span> 12-345 Ramenoland</span>
              </p>

              <h2 className="mt-6 font-semibold lg:text-2xl">
                Godziny otwarcia
              </h2>
              <p className="flex flex-col lg:text-lg">
                Poniedziałek - Piątek <span>12:00 - 22:00</span>
              </p>
              <p className="flex flex-col lg:text-lg">
                Sobota - Niedziela <span>13:00 - 23:00</span>
              </p>
            </div>
            <div className="animate-slide-from-bottom absolute bottom-[-2%] hidden grid-cols-3 items-baseline gap-2 overflow-clip lg:grid">
              <div className="h-18 w-4 bg-[#F6EFEF]"></div>
              <div className="h-22 w-4 bg-[#F6EFEF]"></div>
              <div className="h-28 w-4 bg-[#F6EFEF]"></div>
            </div>
          </div>
        </div>

        <div className="flex w-full flex-row justify-center md:w-3/4">
          <ContactForm />

          <div className="bg-menu-red border-menu-red sr-only mx-4 flex w-full max-w-[300px] flex-col items-center justify-center gap-4 rounded-r-lg shadow-lg lg:not-sr-only xl:max-h-[600px] 2xl:max-w-[500px]">
            <p className="text-semibold mb-6 p-2 text-center text-2xl text-white">
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
