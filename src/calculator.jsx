import React, { useState } from "react";

function calculator() {
  const [input, setInput] = useState("");

  const addValue = (value) => {
    setInput(input + value);
  };

  const calculate = () => {
    try {
      // simple calculation
      setInput(eval(input));
    } catch {
      setInput("Error");
    }
  };

  const clear = () => {
    setInput("");
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Simple Calculator</h2>

      <input
        type="text"
        value={input}
        readOnly
        style={{ width: "200px", height: "40px", fontSize: "18px" }}
      />

      <div>
        <button onClick={() => addValue("1")}>1</button>
        <button onClick={() => addValue("2")}>2</button>
        <button onClick={() => addValue("3")}>3</button>
        <button onClick={() => addValue("+")}>+</button>
      </div>

      <div>
        <button onClick={() => addValue("4")}>4</button>
        <button onClick={() => addValue("5")}>5</button>
        <button onClick={() => addValue("6")}>6</button>
        <button onClick={() => addValue("-")}>-</button>
      </div>

      <div>
        <button onClick={() => addValue("7")}>7</button>
        <button onClick={() => addValue("8")}>8</button>
        <button onClick={() => addValue("9")}>9</button>
        <button onClick={() => addValue("*")}>*</button>
      </div>

      <div>
        <button onClick={() => clear()}>C</button>
        <button onClick={() => addValue("0")}>0</button>
        <button onClick={calculate}>=</button>
        <button onClick={() => addValue("/")}>/</button>
      </div>
    </div>
  );
}

export default calculator;
