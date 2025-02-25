import Inga from "../Layout/imgs/Inga.png";
import Agnieszka from "../Layout/imgs/Agnieszka.png";
import Żaklina from "../Layout/imgs/Żaklina.png";

export default function AboutTeam () {
    return (
        <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col items-center text-center">
              <img
                src={Agnieszka}
                alt="Agnieszka"
                className="h-50 w-50 transform rounded-full object-cover transition duration-300 hover:scale-110"
              />
              <h2 className="text-menu-red mt-4 text-xl font-semibold">
                Agnieszka
              </h2>
              <p className="mt-5 text-gray-700 md:text-justify">
                Mistrz smaku i aromatu. Dba o perfekcyjnie ugotowane buliony,
                sprężysty makaron i idealnie dobrane dodatki. Dzięki niej każda
                miska ramenu to dzieło sztuki!
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <img
                src={Inga}
                alt="Inga"
                className="h-50 w-50 transform rounded-full object-cover transition duration-300 hover:scale-110"
              />
              <h2 className="text-menu-red mt-4 text-xl font-semibold">Inga</h2>
              <p className="mt-5 text-gray-700 md:text-justify">
                Osoba odpowiedzialna za atmosferę, design i doświadczenie.
                Tworzy naszą historię, dba o wystrój i sprawia, że ramenownia to
                nie tylko miejsce na jedzenie, ale i prawdziwa przygoda!
              </p>
            </div>
            <div className="flex flex-col items-center text-center md:col-span-2 lg:col-span-1">
              <img
                src={Żaklina}
                alt="Żaklina"
                className="h-50 w-50 transform rounded-full object-cover transition duration-300 hover:scale-110"
              />
              <h2 className="text-menu-red mt-4 text-xl font-semibold">
                Żaklina
              </h2>
              <p className="mt-5 text-gray-700 md:text-justify">
                Serce naszej ramenowni. Dba o każdy szczegół, od najwyższej
                jakości składników po niezapomnianą obsługę gości. Sprawia, że
                każdy czuje się jak w domu.
              </p>
            </div>
          </div>
      );
}

 