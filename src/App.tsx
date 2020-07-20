import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  //let firstValue: string = "Many";
  //let secondValue: number = 2;
  //let secondValue: boolean = true;
  //let secondValue: number[] = [2, 3, 4];
  let secondValue: Array<number> = [2, 3, 4];

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          The value {secondValue} is of {typeof secondValue} type
        </p>
      </header>
    </div>
  );
}

export default App;
