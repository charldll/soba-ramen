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

  const steps = [
    { icon: "", label: "One" },
    { icon: "", label: "Two" },
    { icon: "", label: "Three" },
    { icon: "", label: "Four" },
    { icon: "", label: "Five" },
  ];

  const renderStepContent = () => {
    switch (activeStep) {
      case 0:
        return <TableCodeInput onValidCode={handleCodeValidation} />;
      case 1:
        return (
          <div className="wrapper-inner">
            <SoupBase
              selectedItems={selectedItems}
              chooseOneOptionOnly={chooseOneOptionOnly}
              onClick={handleNext}
            />
          </div>
        );
      case 2:
        return (
          <div className="wrapper-inner">
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
          <div className="wrapper-inner">
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
    <main className="wrapper-outer">
      <ProgressButtons activeStep={activeStep} steps={steps} />
      {renderStepContent()}
    </main>
  );
};

export default RamenComponent;
