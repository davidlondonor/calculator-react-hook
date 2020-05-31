import React, { useState } from "react";
import "./App.css";
import Buttom from "../Button/index";

const App = () => {
  const [value, setValue] = useState("0");
  const [memory, setMemory] = useState(null);
  const [operator, setOperator] = useState(null);

  const handleButtonPress = (content) => () => {
    const numberPress = parseFloat(value);

    if (content === "AC") {
      setValue("0");
      setMemory(null);
      setOperator(null);
      return;
    }

    if (content === "±") {
      setValue((numberPress * -1).toString());
      setOperator(null);

      return;
    }
    if (content === "%") {
      setValue((numberPress / 100).toString());
      setMemory(null);
      setOperator(null);

      return;
    }

    if (content === "+") {
      setMemory(parseFloat(value));
      setValue("0");
      setOperator("+");

      return;
    }

    if (content === "−") {
      setMemory(parseFloat(value));
      setValue("0");
      setOperator("−");
      return;
    }
    if (content === "×") {
      setMemory(parseFloat(value));
      setValue("0");
      setOperator("×");
      return;
    }
    if (content === "÷") {
      setMemory(parseFloat(value));
      setValue("0");
      setOperator("÷");
      return;
    }

    if (content === "=") {
      if (!operator) return;
      if (operator === "+") {
        setValue(memory + parseFloat(value).toString());
      } else if (operator === "−") {
        setValue(memory - parseFloat(value).toString());
      } else if (operator === "×") {
        setValue(memory * parseFloat(value).toString());
      } else if (operator === "÷") {
        setValue(memory / parseFloat(value).toString());
      }
      setMemory(null);
      setOperator(null);

      return;
    }

    setValue(parseFloat(numberPress + content).toString());
  };
  return (
    <>
      <div className="App">
        <div className="top">4:43</div>
        <div className="display">{value}</div>
        <div className="buttons">
          <Buttom
            onButtonClick={handleButtonPress}
            content="AC"
            type="function"
          />
          <Buttom
            onButtonClick={handleButtonPress}
            content="±"
            type="function"
          />
          <Buttom
            onButtonClick={handleButtonPress}
            content="%"
            type="function"
          />
          <Buttom
            onButtonClick={handleButtonPress}
            content="∕"
            type="operator"
          />
          <Buttom onButtonClick={handleButtonPress} content="7" />
          <Buttom onButtonClick={handleButtonPress} content="8" />
          <Buttom onButtonClick={handleButtonPress} content="9" />
          <Buttom
            onButtonClick={handleButtonPress}
            content="×"
            type="operator"
          />
          <Buttom onButtonClick={handleButtonPress} content="4" />
          <Buttom onButtonClick={handleButtonPress} content="5" />
          <Buttom onButtonClick={handleButtonPress} content="6" />
          <Buttom
            onButtonClick={handleButtonPress}
            content="−"
            type="operator"
          />
          <Buttom onButtonClick={handleButtonPress} content="1" />
          <Buttom onButtonClick={handleButtonPress} content="2" />
          <Buttom onButtonClick={handleButtonPress} content="3" />
          <Buttom
            onButtonClick={handleButtonPress}
            content="+"
            type="operator"
          />
          <Buttom onButtonClick={handleButtonPress} content="0" />
          <Buttom onButtonClick={handleButtonPress} content="." />
          <Buttom
            onButtonClick={handleButtonPress}
            content="="
            type="operator"
          />
        </div>
        <div className="buttom">-</div>
      </div>
    </>
  );
};

export default App;
