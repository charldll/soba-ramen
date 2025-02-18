import BlurText from "../utils/animations/BlurText";
import Image from "../Layout/imgs/about.jpg";

export default function About() {
  const handleAnimationComplete = () => {
    console.log("Animation completed!");
  };
  return (
    <main>
      <div className="relative h-svh w-full">
        <img src={Image} className="h-svh w-full object-cover"></img>
        <div className="absolute inset-0 flex items-center justify-center scroll-smooth">
          <BlurText
            text="Poznaj nas bliżej!"
            delay={150}
            animateBy="words"
            direction="top"
            onAnimationComplete={handleAnimationComplete}
            className="mb-8 text-center text-8xl text-white"
          />
        </div>
      </div>
      <section className="wrapper-outer">
        <h1>Nasza misja</h1>
        <p>
          W naszej ramenowni wierzymy, że miska ramenu to coś więcej niż tylko
          posiłek – to historia, tradycja i pasja zamknięta w aromatycznym
          bulionie. Naszą misją jest przeniesienie Cię wprost na ulice Japonii
          poprzez autentyczne smaki, świeże składniki i starannie przygotowane
          dania. Chcemy, aby każdy, kto przekroczy próg naszej ramenowni, poczuł
          ciepło domowej atmosfery i mógł delektować się ramenem tworzonym z
          sercem. Dbamy o najwyższą jakość składników, długogotowane buliony i
          ręcznie robiony makaron, by każda miska była wyjątkowym
          doświadczeniem. Nasza misja to nie tylko serwowanie pysznego jedzenia
          – to także budowanie społeczności, w której każdy miłośnik ramenu
          znajdzie swoje miejsce.{" "}
        </p>
      </section>

      <section className="wrapper-outer">
        <h1>Nasz zespół</h1>
        <p>
          Jesteśmy małym, ale zgranym zespołem trzech pasjonatów kuchni
          japońskiej, których połączyła miłość do ramenu. Każdy z nas wnosi coś
          wyjątkowego do naszej ramenowni – od sztuki kulinarnej, przez
          kreatywność, aż po ciepłą, przyjazną atmosferę.
        </p>
        <br />
        <p>
          Agnieszka - – mistrz smaku i aromatu. To ona dba o perfekcyjnie
          ugotowane buliony, sprężysty makaron i idealnie dobrane dodatki.
          Dzięki niej każda miska ramenu to dzieło sztuki!
        </p>
        <br />
        <p>
          Inga - osoba odpowiedzialna za atmosferę, design i doświadczenie. To
          ona tworzy naszą historię, dba o wystrój i sprawia, że nasza
          ramenownia to nie tylko miejsce na jedzenie, ale i prawdziwa przygoda!
        </p>
        <br />
        <p>
          Żaklina - serce naszej ramenowni. Dba o każdy szczegół, od najwyższej
          jakości składników po niezapomnianą obsługę gości. Sprawia, że każdy,
          kto do nas przychodzi, czuje się jak w domu.
        </p>
        <br />
        <p>
          Razem tworzymy coś więcej niż restaurację – budujemy miejsce, w którym
          ludzie mogą dzielić się smakiem, radością i dobrą energią.
        </p>
      </section>
    </main>
  );
}
