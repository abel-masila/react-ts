import React from "react";

const initialState = {
  name: "Manny",
  msg: "How are you?",
};

type State = Readonly<typeof initialState>;

const msgHOC = (WrappedComponent: any) => {
  class HOC extends React.Component<{}, State> {
    readonly state: State = initialState;
    render() {
      return <WrappedComponent name={this.state.name} msg={this.state.msg} />;
    }
  }
  return HOC;
};
export default msgHOC;
