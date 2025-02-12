/* eslint-disable react/prop-types */
import { twMerge } from "tailwind-merge";

// twMege is for merging classes without conflicts

const ButtonComponent = ({ className, children, onClick, disabled }) => {
  return (
    <button
      className={twMerge("px-9 py-3 cursor-pointer rounded-md hover:bg-blue-600 transition duration-700 ease-in-out", className)}
      onClick={onClick}
      disabled={disabled}>
      {children}
    </button>
  );
};

export default ButtonComponent;
