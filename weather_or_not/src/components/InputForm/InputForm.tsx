import React, { useState } from 'react';

function InputForm({ setCityName }: { setCityName: React.Dispatch<React.SetStateAction<string>> }) {
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
    </div>
  );
}

export default InputForm;
