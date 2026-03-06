import { useState } from "react";
import Display from "../components/caluculator/Display";
import Button from "../components/caluculator/Button";
import "../App.css";

function Calculator() {
  const [input, setInput] = useState("");
const [name, setName]= useState("hafeez");
const [age,setAge]= useState(21);
  const handleClick = (value) =>{ 
    setInput(input + value);
  };

  const clear = () => {
    setInput("0");
  };

  const calculate = () => {
    try {
      let expression = input;

      // Percentage
     expression = expression.replace(/(\d+(\.\d+)?)%/g, (match, number) => {
      return `(${number}/100)`;
    });

      // Square Root
      expression = expression.replace(/√(\d+)/g, "Math.sqrt($1)");

      // Cube
      expression = expression.replace(/(\d+)³/g, "Math.pow($1,3)");

      setInput(eval(expression).toString());
    } catch {
      setInput("Error");
    }
  };

  const buttons = [
    
    "%", "√", "³", "AC","7","8","9","/","4","5","6","*","1","2","3","-","0",".","=","+"
  ];

  return (
    <div className="calculator">
      <h2 className="calc-title">Hafeez Calculator</h2>
      <Display value={input} />

      <div className="button-grid">
        {buttons.map((btn, index) => (
          <Button
            key={index}
            value={btn}
            onClick={() => {
              if (btn === "=") {
                calculate();
              } else if (btn === "AC") {
                clear();
              } else {
                handleClick(btn);
              }
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default Calculator;
