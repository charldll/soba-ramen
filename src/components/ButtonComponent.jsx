/* eslint-disable react/prop-types */
import { twMerge } from "tailwind-merge";

// twMege is for merging classes without conflicts

const ButtonComponent = ({ className, children, onClick, disabled }) => {
  return (
    <button
      className={twMerge(
        "cursor-pointer rounded-md px-9 py-3 transition duration-500 ease-in-out hover:bg-gray-700 hover:text-[#dbd4d4c3]",
        className,
      )}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default ButtonComponent;
