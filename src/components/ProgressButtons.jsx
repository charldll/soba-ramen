/* eslint-disable react/prop-types */
import { Stepper, Step } from "@material-tailwind/react";

const ProgressButtons = ({ activeStep, steps }) => {
  return (
    <div className="mx-auto max-w-[350px] items-center">
      <Stepper activeStep={activeStep} lineClassName="bg-[#d3c7d2]">
        {steps.map((step, i) => {
          return (
            <Step
              key={i}
              className="h-4 w-4 bg-[#d3c7d2]"
              activeClassName="bg-[#122653]"
              completedClassName="bg-[#122653]"
            />
          );
        })}
      </Stepper>
    </div>
  );
};

export default ProgressButtons;
