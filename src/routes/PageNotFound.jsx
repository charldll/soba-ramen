import FuzzyText from "../utils/animations/FuzzyText";

export default function PageNotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 text-center">
      <div className="">
        <FuzzyText baseIntensity={0.2} hoverIntensity={0.5} enableHover={0.18}>
          404
        </FuzzyText>
        <h1 className="text-6xl font-bold text-gray-800"></h1>
        <p className="mt-2 text-xl text-gray-600">
          Tutaj nie znajdziesz najlepszego ramenu na świecie.
        </p>
        <a href="/" className="mt-4 inline-block text-blue-500 hover:underline">
          Wróć na stronę główną
        </a>
      </div>
    </div>
  );
}
