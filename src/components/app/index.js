import React, { useState } from "react";
import "./App.css";
import Buttom from "../Button/index";

const App = () => {
  const [value, setValue] = useState("0");

  const handleButtonPress = (content) => () => {
    setValue((parseFloat(value) + content).toString());
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
