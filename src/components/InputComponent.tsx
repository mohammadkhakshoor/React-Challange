import React from "react";

interface InputComponentProps {
  inputValue: string;
  setInputValue: (value: string) => void;
}

const InputComponent: React.FC<InputComponentProps> = ({ inputValue, setInputValue }) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    if (value === "") {
      setInputValue("");
      return;
    }

    const numberValue = parseInt(value, 10);

    if (numberValue < 10) {
      setInputValue("10");
    } else if (numberValue > 50) {
      setInputValue("50");
    } else {
      setInputValue(value);
    }
  };

  return (
    <div className="flex items-center gap-4 justify-center">
      <span>Number of boxes (10-50)</span>
      <input
        type="number"
        placeholder="Enter a number"
        value={inputValue}
        onChange={handleInputChange}
        min="10"
        max="50"
        className="max-w-16 rounded-md px-2 text-white bg-gray-800"
      />
    </div>
  );
};

export default React.memo(InputComponent);
