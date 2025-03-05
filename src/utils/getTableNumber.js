export const getTableNumber = (id) => {
  const tableMap = {
    "3bcf907f-dc5d-4523-950f-9407d9056281": "Stolik 1",
    "69e9f17b-5630-44dd-b90a-8a861994cbbf": "Stolik 2",
    "5d6cddb5-6ed1-4985-873f-1a24af915b29": "Stolik 3",
    "2a367db7-6c5e-44e4-9c69-28cfc09bdbde": "Stolik 4",
    "66a23736-38b9-4378-8a25-d6a03fbbb55a": "Loża VIP",
    "8f823501-e7f5-4b6d-a437-54c0134320bc": "Stolik w rogu",
  };

  return tableMap[id] || "Błąd stolika. Zapytać kelnera";
};
