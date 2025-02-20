import { Carousel } from "@material-tailwind/react";
import { mainpageCarousel } from "../data/mainpageCarousel";
import { Link } from "react-router";

export default function Home() {
  return (
    <main className="mx-auto my-4 h-fit max-w-[700px] justify-center overflow-y-clip p-4 xl:max-w-[1200px]">
      <h1 className="animate-slide font-abril mb-2 p-2 text-center text-2xl uppercase md:text-4xl lg:text-5xl">
        Mistrzostwo{" "}
        <span className="text-menu-red animate-blur font-semibold">smaku</span>{" "}
        w każdej misce
      </h1>
      <div className="animate-slide-from-bottom">
        <Carousel
          className="sticky h-[300px] rounded-xl shadow-xl max-sm:w-auto xl:h-[400px]"
          loop={true}
        >
          {mainpageCarousel.map((image) => (
            <img
              key={image.name}
              src={image.src}
              className="h-full w-full object-cover"
            />
          ))}
        </Carousel>
        <div className="mx-auto -mt-[20px] w-fit rounded-xl bg-[#F6EFEF] p-4 pt-10 md:w-[90%] xl:w-[80%]">
          <p className="md:animate-scale-up mx-auto mb-4 max-w-prose">
            <span className="font-semibold">Ramen to więcej niż danie </span>–
            to tradycja, sztuka i dusza kuchni japońskiej. Powstał na
            skrzyżowaniu kultur, czerpiąc z chińskich inspiracji i japońskiego
            rzemiosła. Każdy region Japonii ma swoją odmianę, od tonkotsu po
            shoyu ramen. W{" "}
            <span className="font-semibold">naszej restauracji</span> oddajemy
            hołd tej historii, serwując autentyczne, aromatyczne miski ramenu
            przygotowane z pasją.
          </p>
          <p className="md:animate-scale-up mx-auto mb-4 max-w-prose">
            Położona w sercu miasta{" "}
            <span className="text-menu-red font-semibold">Soba Ramen</span> to
            miejsce, gdzie tradycja spotyka nowoczesność. Ciepłe wnętrze, zapach
            bulionu gotowanego przez wiele godzin i uśmiech{" "}
            <Link
              to="/about"
              className="decoration-menu-red cursor-pointer font-semibold underline decoration-1 [text-decoration-skip-ink:none]"
            >
              naszego zespołu
            </Link>{" "}
            sprawiają, że poczujesz się tu jak w domu. Nasza misja? Przybliżyć
            Ci smak prawdziwego japońskiego ramenu!
          </p>
        </div>
      </div>
    </main>
  );
}
