/* eslint-disable react/prop-types */
import { twMerge } from "tailwind-merge";

// twMege is for merging classes without conflicts

const ButtonComponent = ({ className, children, onClick, disabled }) => {
  return (
    <button
      className={twMerge("px-4 py-2 cursor-pointer rounded-md", className)}
      onClick={onClick}
      disabled={disabled}>
      {children}
    </button>
  );
};

export default ButtonComponent;
