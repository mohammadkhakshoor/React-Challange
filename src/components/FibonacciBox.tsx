import React from "react";

interface FibonacciBoxProps {
  number: number;
  isActive: boolean;
}

const FibonacciBox: React.FC<FibonacciBoxProps> = ({ number, isActive }) => {
  return (
    <div
      className={`h-24 w-24 font-semibold flex-shrink-0 transition-colors duration-75 rounded-md flex items-center justify-center  ${
        isActive ? "bg-green-400 text-white shadow-lg" : "bg-white"
      }`}
    >
      {number.toLocaleString()}
    </div>
  );
};

export default React.memo(FibonacciBox);
