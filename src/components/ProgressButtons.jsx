/* eslint-disable react/prop-types */
import { Stepper, Step } from "@material-tailwind/react";

const ProgressButtons = ({activeStep, steps})=> {
  
    return (
    <div className="w-[400px] items-center">
        <Stepper 
        activeStep={activeStep}>
          {steps.map((step, i) => {
            return (
              <Step key={i} className="w-4 h-4"/>
            )
          })}
      </Stepper>
    </div>
    );
};

export default ProgressButtons;