import { KeyRound, Soup, ThumbsUp } from "lucide-react";
import { useState } from "react";

import TableCodeInput from "../components/TableCodeInput";
import IngredientChoice from "../components/IngredientChoice";
import OrderSummary from "../components/OrderSummary";
import OrderConfirmation from "../components/OrderConfirmation";
import useOrder from "../hooks/useOrder";

const RamenComponent = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const { selectedItems, totalPrice, orderStatus, toggleItem, placeOrder } =
    useOrder();

  const steps = [
    { icon: KeyRound, label: "Zaloguj" },
    { icon: Soup, label: "Wybierz" },
    { icon: ThumbsUp, label: "Potwierdź" },
  ];

  const handleCodeValidation = (isValid) => {
    if (isValid) {
      setCurrentStep(2);
    }
  };

  const handleNextStep = () => {
    if (selectedItems.length === 0) {
      console.log(orderStatus);
      // TODO No warning the order is empty! No log. Figure it out.
    }
    setCurrentStep((prev) => Math.min(prev + 1, steps.length));
  };

  const handlePlaceOrder = async () => {
    await placeOrder();
    setCurrentStep(4); // Move to confirmation step
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
              orderStatus={orderStatus}
              onClick={handleNextStep}
            />
          </div>
        );
      case 3:
        return (
          <OrderSummary
            selectedItems={selectedItems}
            totalPrice={totalPrice}
            orderStatus={orderStatus}
            placeOrder={handlePlaceOrder}
          />
        );
      case 4:
        return <OrderConfirmation />;
      default:
        return null;
    }
  };

  // Calculate progress width based on current step, but only up to step 3
  const progressWidth = () => {
    const step = Math.min(currentStep, 3);
    return `${((step - 1) / (steps.length - 1)) * 100}%`;
  };

  return (
    <main className="wrapper-outer">
      <div className=" wrapper-inner relative pb-12">
        {/* Progress line */}
        <div className="absolute h-1 bg-slate-200 top-[2.3rem] left-[17%] right-[17%] z-0">
          <div
            className="absolute h-full bg-[rgb(182,27,81)] transition-all duration-500 ease-in-out"
            style={{
              width: progressWidth(),
            }}
          />
        </div>

        {/* Steps */}
        <div className="relative flex justify-between">
          {steps.map((step, i) => {
            const StepIcon = step.icon;
            const isCompleted = i + 1 < Math.min(currentStep, 4);
            const isCurrent = i + 1 === Math.min(currentStep, 3);

            return (
              <div
                key={i}
                className="flex flex-col items-center cursor-pointer group flex-1">
                <div
                  className={`
                    w-10 h-10 rounded-full flex items-center justify-center z-10
                    transition-all duration-300 ease-in-out
                    ${
                      isCompleted
                        ? "bg-[rgb(182,27,81)] text-white"
                        : isCurrent
                        ? "bg-amber-600 text-white"
                        : "bg-white border-2 border-slate-300"
                    }
                    ${
                      !isCompleted &&
                      !isCurrent &&
                      "group-hover:border-amber-300"
                    }
                  `}>
                  <StepIcon
                    className={`w-5 h-5 ${
                      isCompleted || isCurrent ? "text-white" : "text-slate-500"
                    }`}
                  />
                </div>

                <div className="mt-3 text-sm font-medium text-center">
                  <span
                    className={`
                      ${
                        isCompleted
                          ? "text-[rgb(182,27,81)]"
                          : isCurrent
                          ? "text-amber-600"
                          : "text-slate-500"
                      }
                    `}>
                    {step.label}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {renderStepContent()}
    </main>
  );
};

export default RamenComponent;
