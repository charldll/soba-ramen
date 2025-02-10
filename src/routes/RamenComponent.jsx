/* eslint-disable react-hooks/exhaustive-deps */
import { KeyRound, Soup, ThumbsUp, Cat } from "lucide-react";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";

import TableCodeInput from "../components/TableCodeInput";
import IngredientChoice from "../components/IngredientChoice";
import OrderSummary from "../components/OrderSummary";
import OrderConfirmation from "../components/OrderConfirmation";
import ProgressBar from "../components/ProgressBar";
import useOrder from "../hooks/useOrder";

const RamenComponent = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const {
    selectedItems,
    totalPrice,

    toggleItem,
    placeOrder,
    validateTable,
  } = useOrder();

  const { table } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const checkTable = async () => {
      if (table) {
        const isValid = await validateTable(table);
        if (!isValid) {
          navigate("/custom-ramen"); // Redirect if invalid
        } else {
          setCurrentStep(2);
        }
      }
    };

    checkTable();
  }, [table]);

  const steps = [
    { icon: KeyRound, label: "Zaloguj" },
    { icon: Soup, label: "Wybierz" },
    { icon: ThumbsUp, label: "Potwierdź" },
    { icon: Cat, label: "Kitchen"},
  ];

  const handleCodeValidation = (isValid) => {
    if (isValid) {
      setCurrentStep(2);
    }
  };

  const handleNextStep = () => {
    setCurrentStep((prev) => Math.min(prev + 1, steps.length));
  };

  const handlePreviousStep = () => {
    setCurrentStep((prev) => Math.min(prev - 1, steps.length));
  };

  const handlePlaceOrder = async () => {
    await placeOrder();
    setCurrentStep(4);
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return <TableCodeInput onValidCode={handleCodeValidation} />;
      case 2:
        return (
          <div className="wrapper-inner">
            <IngredientChoice
              selectedItems={selectedItems}
              toggleItem={toggleItem}
              onClick={handleNextStep}
            />
          </div>
        );
      case 3:
        return (
          <OrderSummary
            selectedItems={selectedItems}
            totalPrice={totalPrice}
            placeOrder={handlePlaceOrder}
            onClick={handlePreviousStep}
          />
        );
      case 4:
        return <OrderConfirmation />;
      default:
        return null;
    }
  };

  return (
    <main className="wrapper-outer">
      <ProgressBar currentStep={currentStep} steps={steps} />
      {renderStepContent()}
    </main>
  );
};

export default RamenComponent;
