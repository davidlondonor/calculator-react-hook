import React from "react";
import "./App.css";
import Buttom from "../Button/index";

const App = () => {
  return (
    <>
      <div className="App">
        <div className="top">4:43</div>
        <div className="display">0</div>
        <div className="buttons">
          <Buttom content="AC" type="function" />
          <Buttom content="±" type="function" />
          <Buttom content="%" type="function" />
          <Buttom content="∕" />
          <Buttom content="7" />
          <Buttom content="8" />
          <Buttom content="9" />
          <Buttom content="×" type="operator" />
          <Buttom content="4" />
          <Buttom content="5" />
          <Buttom content="6" />
          <Buttom content="−" type="operator" />
          <Buttom content="1" />
          <Buttom content="2" />
          <Buttom content="3" />
          <Buttom content="+" type="operator" />
          <Buttom content="0" />
          <Buttom content="." />
          <Buttom content="=" type="operator" />
        </div>
        <div className="buttom">-</div>
      </div>
    </>
  );
};

export default App;
