import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";

import TableCodeInput from "../components/TableCodeInput";
import IngredientChoice from "../components/IngredientChoice";
import OrderSummary from "../components/OrderSummary";
import OrderConfirmation from "../components/OrderConfirmation";
import useOrder from "../hooks/useOrder";
import ProgressButtons from "../components/ProgressButtons";
import SoupBase from "../components/SoupBase";
import NoodleChoice from "../components/NoodleChoice";

const RamenComponent = () => {
  const [activeStep, setActiveStep] = useState(0);

  // zmienne wchodzące w skład zamówienia
  const {
    selectedItems,
    setSelectedItems,
    totalPrice,
    toggleItem,
    placeOrder,
    validateTable,
    chooseOneOptionOnly,
  } = useOrder();

  const { table } = useParams();
  const navigate = useNavigate();

  const handleNext = () => setActiveStep((cur) => cur + 1);
  const handlePrev = () => {
    setActiveStep((cur) => Math.max(cur - 1, 0));
  };

  // sprawdzanie kodu stolika
  useEffect(() => {
    const checkTable = async () => {
      if (table) {
        const isValid = await validateTable(table);
        if (!isValid) {
          navigate("/custom-ramen"); // Redirect if invalid
        } else {
          setActiveStep(1);
        }
      }
    };

    checkTable();
  }, [table]);

  const handleCodeValidation = (isValid) => {
    if (isValid) {
      setActiveStep(1);
    }
  };

  const handlePlaceOrder = async () => {
    await placeOrder();
    setActiveStep(5);
  };

  // pozostałość po wcześniejszej metodzie tworzenia kroków
  const steps = [
    { icon: "", label: "Code" },
    { icon: "", label: "Soup" },
    { icon: "", label: "Noodles" },
    { icon: "", label: "Additional" },
    { icon: "", label: "Confirmation" },
  ];

  // funkcje odnośnie kolejnych kroków komponentu
  const renderStepContent = () => {
    switch (activeStep) {
      case 0:
        return <TableCodeInput onValidCode={handleCodeValidation} />;
      case 1:
        return (
          <div className="mx-auto my-8 p-4">
            <SoupBase
              selectedItems={selectedItems}
              chooseOneOptionOnly={chooseOneOptionOnly}
              onClick={handleNext}
            />
          </div>
        );
      case 2:
        return (
          <div className="mx-auto my-8 p-4">
            <NoodleChoice
              selectedItems={selectedItems}
              chooseOneOptionOnly={chooseOneOptionOnly}
              handleNext={handleNext}
              handlePrev={handlePrev}
            />
          </div>
        );
      case 3:
        return (
          <div className="mx-auto my-8 p-4">
            <IngredientChoice
              selectedItems={selectedItems}
              toggleItem={toggleItem}
              handleNext={handleNext}
              handlePrev={handlePrev}
            />
          </div>
        );
      case 4:
        return (
          <OrderSummary
            selectedItems={selectedItems}
            setSelectedItems={setSelectedItems}
            totalPrice={totalPrice}
            placeOrder={handlePlaceOrder}
            onClick={handlePrev}
          />
        );
      case 5:
        return <OrderConfirmation />;
      default:
        null;
    }
  };

  return (
    <main className="bg-[#e6e1e7] bg-[url(./Layout/imgs/fish.svg)] bg-cover bg-[left_2rem_bottom_-7rem] bg-no-repeat bg-blend-overlay">
      <div className="mx-auto mt-12 mb-4 min-h-full max-w-[900px] justify-items-center p-4">
        <ProgressButtons activeStep={activeStep} steps={steps} />
        {renderStepContent()}
      </div>
    </main>
  );
};

export default RamenComponent;
