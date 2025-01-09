import React, { useState } from "react";
import InputComponent from "./components/InputComponent";
import ScrollContainer from "./components/ScrollContainer";
import useFibonacciSequence from "./hooks/useFibonacciSequence";

const App: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>("30");
  const fibonacciSequence = useFibonacciSequence(inputValue);

  return (
    <div className="h-dvh grid place-content-center gap-10">
      <InputComponent inputValue={inputValue} setInputValue={setInputValue} />
      <ScrollContainer fibonacciSequence={fibonacciSequence} />
    </div>
  );
};

export default App;
