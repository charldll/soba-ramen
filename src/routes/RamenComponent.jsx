/* eslint-disable react-hooks/exhaustive-deps */
import { KeyRound, Soup, ThumbsUp } from "lucide-react";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import { Stepper, Step, Button } from '@material-tailwind/react';

import TableCodeInput from "../components/TableCodeInput";
import IngredientChoice from "../components/IngredientChoice";
import OrderSummary from "../components/OrderSummary";
import OrderConfirmation from "../components/OrderConfirmation";
import useOrder from "../hooks/useOrder";

const RamenComponent = () => {
  const [activeStep, setActiveStep] = useState(1);
  const [isLastStep, setIsLastStep] = useState(false);
  const [isFirstStep, setIsFirstStep] = useState(false);

  const handleNext = () => !isLastStep && setActiveStep((cur)=>cur+1);
  const handlePrev = () => !isFirstStep && setActiveStep((cur)=>cur-1);


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
          setActiveStep(1);
        }
      }
    };

    checkTable();
  }, [table]);

  const handleCodeValidation = (isValid) => {
    if (isValid) {
      setActiveStep(2);
    }
  };

  const handlePlaceOrder = async () => {
    await placeOrder();
    setActiveStep(4);
  };

  const renderStepContent = () => {
    switch (activeStep) {
      case 1:
        return <TableCodeInput onValidCode={handleCodeValidation} />
      case 2:
        return (
          <div className="wrapper-inner">
            <IngredientChoice
              selectedItems={selectedItems}
              toggleItem={toggleItem}
            />
          </div>
        );
      case 3:
        return (
          <OrderSummary
            selectedItems={selectedItems}
            totalPrice={totalPrice}
            placeOrder={handlePlaceOrder}
          />
        )
      case 4:
        return <OrderConfirmation />
    }
  };

  return (
    <main className="wrapper-outer">
      <Stepper 
        activeStep={activeStep}
        isLastStep={(value)=> setIsLastStep(value)}
        isFirstStep={(value)=> setIsFirstStep(value)}>
          {renderStepContent(activeStep)}
        </Stepper>
    </main>
  );
};

export default RamenComponent;
