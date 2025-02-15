export const getTableNumber = (id) => {
  switch (id) {
    case "3bcf907f-dc5d-4523-950f-9407d9056281":
      return "Stolik 1";
    case "69e9f17b-5630-44dd-b90a-8a861994cbbf":
      return "Stolik 2";
    case "5d6cddb5-6ed1-4985-873f-1a24af915b29":
      return "Stolik 3";
    case "2a367db7-6c5e-44e4-9c69-28cfc09bdbde":
      return "Stolik 4";
    default:
      return "Błąd stolika. Zapytać kelnera";
  }
};
