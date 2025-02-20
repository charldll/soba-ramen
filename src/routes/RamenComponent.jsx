/* eslint-disable react-hooks/exhaustive-deps */
import { KeyRound, Soup, ThumbsUp } from "lucide-react";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";

import TableCodeInput from "../components/TableCodeInput";
import IngredientChoice from "../components/IngredientChoice";
import OrderSummary from "../components/OrderSummary";
import OrderConfirmation from "../components/OrderConfirmation";
import useOrder from "../hooks/useOrder";
import ProgressButtons from "../components/ProgressButtons";
import SoupBase from '../components/SoupBase';

const RamenComponent = () => {
  const [activeStep, setActiveStep] = useState(0);

  const {
    selectedItems,
    totalPrice,
    toggleItem,
    placeOrder,
    validateTable,
  } = useOrder();

  const { table } = useParams();
  const navigate = useNavigate();

  const handleNext = () => setActiveStep((cur) => cur + 1);
  const handlePrev = () => setActiveStep((cur) => cur - 1);

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
    setActiveStep(4);
  };

  const steps = [
    { icon: "", label: "One"},
    { icon: "", label: "Two"},
    { icon: "", label: "Three"},
    { icon: "", label: "Four"}
  ];

  const renderStepContent = () => {
    switch (activeStep) {
      case 0:
        return <TableCodeInput onValidCode={handleCodeValidation} />
      case 1:
        return (
          <div className="wrapper-inner">
            <SoupBase
              selectedItems={selectedItems}
              toggleItem={toggleItem}
              onClick={handleNext}
              />
          </div>
        );
      case 2:
        return (
          <div className="wrapper-inner">
            <IngredientChoice
              selectedItems={selectedItems}
              toggleItem={toggleItem}
              onClick={handleNext}
            />
          </div>
        );
      case 3:
        return (
          <OrderSummary
            selectedItems={selectedItems}
            totalPrice={totalPrice}
            placeOrder={handlePlaceOrder}
            onClick={handleNext}
          />
        )
      case 4:
        return <OrderConfirmation/>
      default:
        null;
    }
  };

  return (
    <main className="wrapper-outer">
      <ProgressButtons activeStep={activeStep} steps={steps}/>
      {renderStepContent()}
    </main>
  );
};

export default RamenComponent;
