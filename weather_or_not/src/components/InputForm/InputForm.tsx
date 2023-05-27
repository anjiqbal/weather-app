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

  function handleEnter(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === "Enter") {
      event.preventDefault();
      setCityName(inputValue);
    }
  }

  return (
    <form className="input-form">
      <input
        id="textinput"
        type="text"
        placeholder="Enter your city"
        value={inputValue}
        onChange={handleChange}
        onKeyDown={handleEnter}
      />
      <button onClick={handleClick}>Enter</button>

    </form>
  );
}

export default InputForm;
