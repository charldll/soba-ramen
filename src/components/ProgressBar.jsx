/* eslint-disable react/prop-types */
const ProgressBar = ({ currentStep, steps }) => {
  const progressWidth = () => {
    const step = Math.min(currentStep, 3);
    return `${((step - 1) / (steps.length - 1)) * 100}%`;
  };

  return (
    <div className="relative pb-12">
      {/* Progress line */}
      <div className="absolute h-2 bg-slate-200 top-4 left-[17%] right-[17%] z-0">
        <div
          className="absolute h-full bg-[rgb(182,27,81)] transition-all duration-500 ease-in-out"
          style={{ width: progressWidth() }}
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
                className={`w-10 h-10 rounded-full flex items-center justify-center z-10 transition-all duration-300 ease-in-out
                  ${
                    isCompleted
                      ? "bg-[rgb(182,27,81)] text-white"
                      : isCurrent
                      ? "bg-amber-600 text-white"
                      : "bg-white border-2 border-slate-300"
                  }
                  ${
                    !isCompleted && !isCurrent && "group-hover:border-amber-300"
                  }`}>
                <StepIcon
                  className={`w-5 h-5 ${
                    isCompleted || isCurrent ? "text-white" : "text-slate-500"
                  }`}
                />
              </div>
              <div className="mt-3 text-sm font-medium text-center">
                <span
                  className={`${
                    isCompleted
                      ? "text-[rgb(182,27,81)]"
                      : isCurrent
                      ? "text-amber-600"
                      : "text-slate-500"
                  }`}>
                  {step.label}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProgressBar;
