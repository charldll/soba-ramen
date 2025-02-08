import { KeyRound, Soup, ThumbsUp } from "lucide-react";
import { useState } from "react";

const RamenComponent = () => {
  const [currentStep, setCurrentStep] = useState(1);

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
      <div className="w-full max-w-[70rem] px-8 mx-auto">
        <div className=" grid auto-cols-[90%] sm:auto-cols-[45%] md:auto-cols-[30%] lg:auto-cols-[23% grid-flow-col gap-[1rem] py-[0.5rem] overflow-x-auto overscroll-contain snap-x snap-mandatory custom-scrollbar">
          <div className=" cursor-pointer grid grid-rows-[min-content] gap-[1rem] p-[1rem] bg-[rgb(182,27,81)] rounded-[1rem] snap-start">
            <img
              className="w-full aspect-[9/10] object-cover"
              src="https://images.unsplash.com/photo-1587029623864-c0c4d22edf6c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
            <p className="w-fit mx-auto">
              Nori, <span>5 zł</span>
            </p>
          </div>
          <div className=" cursor-pointer grid grid-rows-[min-content] gap-[1rem] p-[1rem] bg-[rgb(182,27,81)] rounded-[1rem] snap-start">
            <img
              className="w-full aspect-[9/10] object-cover"
              src="https://plus.unsplash.com/premium_photo-1671022581618-4bb6650389c9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZWdnfGVufDB8fDB8fHww"
            />
            <p className="w-fit mx-auto">
              Jajko, <span>3 zł</span>
            </p>
          </div>
          <div className=" cursor-pointer grid grid-rows-[min-content] gap-[1rem] p-[1rem] bg-[rgb(182,27,81)] rounded-[1rem] snap-start">
            <img
              className="w-full aspect-[9/10] object-cover"
              src="https://images.unsplash.com/photo-1629665001701-a232a0ba4eec?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hpaXRha2UlMjBtdXNocm9vbXxlbnwwfHwwfHx8MA%3D%3D"
            />
            <p className="w-fit mx-auto">
              Shiitake, <span>5 zł</span>
            </p>
          </div>
          <div className="cursor-pointer grid grid-rows-[min-content] gap-[1rem] p-[1rem] bg-[rgb(182,27,81)] rounded-[1rem] snap-start">
            <img
              className="w-full aspect-[9/10] object-cover"
              src="https://plus.unsplash.com/premium_photo-1666318300348-a4d0226d81ad?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZWRhbWFtZXxlbnwwfHwwfHx8MA%3D%3D"
            />
            <p className="w-fit mx-auto">
              Edamame, <span>5 zł</span>
            </p>
          </div>
          <div className="cursor-pointer grid grid-rows-[min-content] gap-[1rem] p-[1rem] bg-[rgb(182,27,81)] rounded-[1rem] snap-start">
            <img
              className="w-full aspect-[9/10] object-cover"
              src="https://plus.unsplash.com/premium_photo-1666318300348-a4d0226d81ad?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZWRhbWFtZXxlbnwwfHwwfHx8MA%3D%3D"
            />
            <p className="w-fit mx-auto">
              Edamame, <span>5 zł</span>
            </p>
          </div>
          <div className="cursor-pointer grid grid-rows-[min-content] gap-[1rem] p-[1rem] bg-[rgb(182,27,81)] rounded-[1rem] snap-start">
            <img
              className="w-full aspect-[9/10] object-cover"
              src="https://plus.unsplash.com/premium_photo-1666318300348-a4d0226d81ad?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZWRhbWFtZXxlbnwwfHwwfHx8MA%3D%3D"
            />
            <p className="w-fit mx-auto">
              Edamame, <span>5 zł</span>
            </p>
          </div>
          <div className="cursor-pointer grid grid-rows-[min-content] gap-[1rem] p-[1rem] bg-[rgb(182,27,81)] rounded-[1rem] snap-start">
            <img
              className="w-full aspect-[9/10] object-cover"
              src="https://plus.unsplash.com/premium_photo-1666318300348-a4d0226d81ad?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZWRhbWFtZXxlbnwwfHwwfHx8MA%3D%3D"
            />
            <p className="w-fit mx-auto">
              Edamame, <span>5 zł</span>
            </p>
          </div>
          <div className="cursor-pointer grid grid-rows-[min-content] gap-[1rem] p-[1rem] bg-[rgb(182,27,81)] rounded-[1rem] snap-start">
            <img
              className="w-full aspect-[9/10] object-cover"
              src="https://plus.unsplash.com/premium_photo-1666318300348-a4d0226d81ad?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZWRhbWFtZXxlbnwwfHwwfHx8MA%3D%3D"
            />
            <p className="w-fit mx-auto">
              Edamame, <span>5 zł</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default RamenComponent;
