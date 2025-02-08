import { KeyRound, Soup, ThumbsUp } from "lucide-react";
import { useState } from "react";

import TableCodeInput from "../components/TableCodeInput";
import IngredientChoice from "../components/IngredientChoice";
import OrderSummary from "../components/OrderSummary";
import useOrder from "../hooks/useOrder";

const RamenComponent = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const { selectedItems, totalPrice, orderStatus, toggleItem, submitOrder } =
    useOrder();

  const steps = [
    { icon: KeyRound, label: "Zaloguj" },
    { icon: Soup, label: "Wybierz" },
    { icon: ThumbsUp, label: "Potwierdź" },
  ];

  const handleStepClick = (stepIndex) => {
    setCurrentStep(stepIndex + 1);
  };

  return (
    <>
      <div className="step-container relative pb-12">
        {/* Progress line */}
        <div className="absolute h-1 bg-slate-200 top-5 left-[17%] right-[17%] z-0">
          <div
            className="absolute h-full bg-green-500 transition-all duration-500 ease-in-out"
            style={{
              width: `${((currentStep - 1) / (steps.length - 1)) * 100}%`,
            }}
          />
        </div>

        {/* Steps */}
        <div className="relative flex justify-between">
          {steps.map((step, i) => {
            const StepIcon = step.icon;
            const isCompleted = i + 1 < currentStep;
            const isCurrent = i + 1 === currentStep;

            return (
              <div
                key={i}
                className="flex flex-col items-center cursor-pointer group flex-1"
                onClick={() => handleStepClick(i)}>
                <div
                  className={`
                      w-10 h-10 rounded-full flex items-center justify-center z-10
                      transition-all duration-300 ease-in-out
                      ${
                        isCompleted
                          ? "bg-green-500 text-white"
                          : isCurrent
                          ? "bg-blue-500 text-white"
                          : "bg-white border-2 border-slate-300"
                      }
                      ${
                        !isCompleted &&
                        !isCurrent &&
                        "group-hover:border-blue-300"
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
                            ? "text-green-600"
                            : isCurrent
                            ? "text-blue-600"
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
      <TableCodeInput />
      <IngredientChoice selectedItems={selectedItems} toggleItem={toggleItem} />
      <OrderSummary
        selectedItems={selectedItems}
        totalPrice={totalPrice}
        orderStatus={orderStatus}
        submitOrder={submitOrder}
      />
    </>
  );
};

export default RamenComponent;
