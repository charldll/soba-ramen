export default function PageNotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 text-center">
      <div>
        <h1 className="text-6xl font-bold text-gray-800">:(</h1>
        <p className="text-xl text-gray-600 mt-2">Wygląda na to, że zabłądziłeś. Pozwól, że Ci pomogę.</p>
        <a href="/" className="mt-4 inline-block text-blue-500 hover:underline">
          Nawróć się
        </a>
      </div>
    </div>
  );
}
