import React, { useRef } from "react";
import useScrollHandler from "../hooks/useScrollHandler";
import FibonacciBox from "./FibonacciBox";

interface ScrollContainerProps {
  fibonacciSequence: number[];
}

const ScrollContainer: React.FC<ScrollContainerProps> = ({ fibonacciSequence }) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const { activeIndex, handleMouseDown, handleMouseLeave, handleMouseUp, handleMouseMove } =
    useScrollHandler(scrollContainerRef);

  return (
    <div
      ref={scrollContainerRef}
      onMouseDown={handleMouseDown}
      onMouseLeave={handleMouseLeave}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
      className="flex items-center gap-4 max-w-[60%] mx-auto overflow-x-scroll"
    >
      {fibonacciSequence.map((number, index) => (
        <FibonacciBox key={index} number={number} isActive={index === activeIndex} />
      ))}
    </div>
  );
};

export default React.memo(ScrollContainer);
