import BlurText from "../utils/animations/BlurText";
import Image from "../Layout/imgs/about.jpg";
import ScrollToTopButton from "../components/ScrollToTopButton";
import AboutTeam from "../components/AboutTeam";
import ImageWithLoader from "../components/ImageWithLoader";

export default function About() {
  return (
    <main>
      <div className="relative w-full lg:h-[70vh]">
        <ImageWithLoader
          src={Image}
          alt="Miska ramenu"
          className="h-[30vh] w-full object-cover transition-opacity duration-300 lg:h-[70vh] lg:object-[0%_55%]"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <BlurText
            text="Poznaj nas bliżej!"
            delay={150}
            animateBy="words"
            direction="top"
            className="w-fit p-2 text-4xl text-white lg:text-8xl"
          />
        </div>
      </div>

      <div className="mx-auto my-4 w-full max-w-[95%] rounded-2xl bg-[#F6EFEF] p-6 py-12 shadow-lg md:max-w-[90%] xl:max-w-[85%]">
        <section>
          <h1 className="text-menu-red mb-10 text-center text-3xl font-bold md:text-4xl">
            Nasza misja
          </h1>
          <p className="text-center text-lg leading-relaxed text-gray-700 md:text-justify md:text-xl">
            Wierzymy, że miska ramenu to coś więcej niż tylko posiłek – to
            historia, tradycja i pasja zamknięta w aromatycznym bulionie. Chcemy
            przenieść Cię wprost na ulice Japonii poprzez autentyczne smaki,
            świeże składniki i starannie przygotowane dania. Każdy, kto
            przekroczy próg naszej ramenowni, poczuje ciepło domowej atmosfery i
            będzie mógł delektować się ramenem tworzonym z sercem. Dbamy o
            najwyższą jakość składników, długogotowane buliony i ręcznie robiony
            makaron, by każda miska była wyjątkowym doświadczeniem. Naszym celem
            jest nie tylko serwowanie pysznego jedzenia, ale także budowanie
            społeczności, w której każdy miłośnik ramenu znajdzie swoje miejsce.
          </p>
        </section>

        <section>
          <h1 className="text-menu-red mt-10 mb-10 text-center text-3xl font-bold md:text-4xl">
            Nasz zespół
          </h1>
          <p className="text-center text-lg leading-relaxed text-gray-700 md:text-justify md:text-xl">
            Jesteśmy małym, ale zgranym zespołem trzech pasjonatów kuchni
            japońskiej, których połączyła miłość do ramenu. Każdy z nas wnosi
            coś wyjątkowego do naszej ramenowni – od sztuki kulinarnej, przez
            kreatywność, aż po ciepłą, przyjazną atmosferę.
          </p>
          <AboutTeam id="team"></AboutTeam>
          <p className="mt-20 text-center text-lg leading-relaxed text-gray-700 md:text-justify md:text-xl">
            <span className="text-menu-red font-semibold">
              Razem tworzymy coś więcej niż restaurację{" "}
            </span>
            – budujemy przestrzeń pełną pasji, w której smak łączy ludzi, a
            każdy posiłek staje się wyjątkowym doświadczeniem. To miejsce, gdzie
            tradycja spotyka się z nowoczesnością, a aromatyczny ramen nie tylko
            koi głód, ale także buduje wspomnienia. Chcemy, aby każdy, kto do
            nas trafi, poczuł się częścią naszej społeczności – otoczonej
            ciepłem, gościnnością i miłością do japońskiej kuchni.
          </p>
        </section>
      </div>
      <ScrollToTopButton />
    </main>
  );
}
