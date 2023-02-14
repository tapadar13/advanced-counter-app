import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Button from "./components/Button";

const App = () => {
  const [counter, setCounter] = useState(0);
  const [intervalId, setIntervalId] = useState(0);

  const handleStart = () => {
    clearInterval(intervalId);
    let intervalOneId = setInterval(() => {
      setCounter((prevValue) => prevValue + 1);
    }, 1000);
    setIntervalId(intervalOneId);
  };

  const handleStop = () => {
    clearInterval(intervalId);
  };

  return (
    <>
      <h1>Counter Application</h1>
      <Button btnText="Start" btnHandler={handleStart} />
      <h3>{counter}</h3>
      <Button btnText="Stop" btnHandler={handleStop} />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
