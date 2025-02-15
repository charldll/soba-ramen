import { Carousel } from '@material-tailwind/react';
import { mainpageCarousel } from '../data/mainpageCarousel';

export default function Home() {
  return (
    <main className="wrapper-outer">
      <Carousel className='sticky max-sm:w-auto rounded-xl h-[300px] shadow-xl' loop='true'>
      {mainpageCarousel.map((image)=>(
        <img 
        key={image.name}
        src={image.src}
        className='h-full w-full object-cover'
        />
      ))}
    </Carousel>
      <div className='flex max-sm:w-auto md:w-[600px] border-[#5780DC] p-4 rounded-xl bg-[#F6EFEF] -mt-[20px] pt-10'>
      <p>Ramenownia - Mistrzostwo smaku w każdej misce<br/>
        Ramen to więcej niż danie – to tradycja, sztuka i dusza kuchni
        japońskiej. Powstał na skrzyżowaniu kultur, czerpiąc z chińskich
        inspiracji i japońskiego rzemiosła. Każdy region Japonii ma swoją
        odmianę, od tonkotsu po shoyu ramen. W naszej Ramenowni oddajemy hołd
        tej historii, serwując autentyczne, aromatyczne miski ramenu
        przygotowane z pasją.<br/>
        Położona w sercu miasta, nasza Ramenownia to miejsce, gdzie tradycja
        spotyka nowoczesność. Ciepłe wnętrze, zapach bulionu gotowanego przez
        wiele godzin i uśmiech naszego zespołu sprawiają, że poczujesz się tu
        jak w domu. Nasza misja? Przybliżyć Ci smak prawdziwego japońskiego
        ramenu!
      </p>
      </div>
    </main>
  );
}
