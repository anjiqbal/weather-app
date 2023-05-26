import React, { useState } from "react";

function InputForm({
  setCityName,
  handleChangeUnits,
}: {
  setCityName: React.Dispatch<React.SetStateAction<string>>;
  handleChangeUnits: (unit: string) => void;
}) {
  const [inputValue, setInputValue] = useState("");

  function handleClick(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    setCityName(inputValue);
  }

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setInputValue(event.target.value);
  }

  return (
    <div className="input-form">
      <input
        id="textinput"
        type="text"
        placeholder="Enter your city"
        value={inputValue}
        onChange={handleChange}
      />
      <button onClick={handleClick}>Enter</button>
      <div className="buttons">
        <button
          onClick={() => {
            handleChangeUnits("C");
          }}
        >
          Celsius
        </button>
        <button
          onClick={() => {
            handleChangeUnits("F");
          }}
        >
          Fahrenheit
        </button>
        <button
          onClick={() => {
            handleChangeUnits("K");
          }}
        >
          Kelvin
        </button>
      </div>
    </div>
  );
}

export default InputForm;
