/* eslint-disable react/prop-types */
import { Stepper, Step } from "@material-tailwind/react";

const ProgressButtons = ({ activeStep, steps }) => {
  return (
    <div className="mx-auto max-w-[350px] items-center">
      <Stepper activeStep={activeStep} lineClassName="bg-fish-light">
        {steps.map((step, i) => {
          return (
            <Step
              key={i}
              className="bg-fish-light h-4 w-4"
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
