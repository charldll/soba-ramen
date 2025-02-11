export default function Kitchen() {
    return (
      <div className="p-8 bg-gray-100 min-h-screen flex flex-col items-center">
        {/* Kontener na cały komponent */}
  
        <h1 className="text-4xl font-bold text-center bg-rose-200 text-white py-3 px-6 rounded-md shadow-md">
          ZAMÓWIENIA
        </h1>
        <div className="bg-white shadow-lg rounded-lg p-6 border w-80 mt-6">
          <h2 className="text-xl font-semibold text-black">Stół numer 1</h2>
          <p className="text-gray-500 text-sm">Zamówiono o: 12:45</p>
  
          <h3 className="mt-2 font-medium text-black">Produkty:</h3>
          <ul className="list-disc pl-4 text-black">
            <li>jajko</li>
            <li>boczek</li>
            <li>coś</li>
          </ul>
  
          <div className="mt-4 flex gap-2">
            <button className="bg-red-400 text-white px-9 py-3 rounded hover:bg-red-600 transition duration-700 ease-in-out">
              Anuluj
            </button>
            <button className="bg-green-400 text-white px-9 py-3 rounded hover:bg-green-600 transition duration-700 ease-in-out">
              Zaakceptuj
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  