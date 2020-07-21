import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Message from "./Message";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Message msg="This is a simple text" />
      </header>
    </div>
  );
}

export default App;
