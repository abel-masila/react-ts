import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Message from "./Message";

const initialState = {
  name: "Manny",
  msg: "How are you?",
};

type State = Readonly<typeof initialState>;

class App extends React.Component<any, State> {
  readonly state: State = initialState;
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
          <Message msg={this.state.msg} name={this.state.name} />
        </header>
      </div>
    );
  }
}

export default App;
