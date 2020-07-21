import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Message from "./Message";

class App extends React.Component<any> {
  componentWillMount() {
    console.log("Almost there..");
  }
  componentDidMount() {
    console.log("Finally, hey");
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Message msg="This is a simple text" name="Manny" />
        </header>
      </div>
    );
  }
}

export default App;
