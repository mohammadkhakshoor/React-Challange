import { useMemo } from "react";
import { generateFibonacci } from "../../utils/generateFibonacci";

const useFibonacciSequence = (inputValue: string): number[] => {
  return useMemo(() => {
    if (!isNaN(Number(inputValue)) && inputValue !== "") {
      const count = parseInt(inputValue, 10);
      return generateFibonacci(count);
    }
    return [];
  }, [inputValue]);
};

export default useFibonacciSequence;
