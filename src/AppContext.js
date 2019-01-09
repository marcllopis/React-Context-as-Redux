import React from "react";

const Context = React.createContext();

// REDUX Actions and Reducers
const ActionTypes = {
  CHANGE: "CHANGE"
};

const reducer = (state, action) => (
  action.type === ActionTypes.CHANGE &&
    { ...state, status: !state.status }
);


export class Provider extends React.Component {
  state = {
    status: false,
    dispatch: action => this.setState(state => reducer(state, action)),
    change: () => this.state.dispatch({ type: ActionTypes.CHANGE })
  };
  render() {
    const {
      state,
      props: { children }
    } = this;
    return <Context.Provider value={state}>{children}</Context.Provider>;
  };
}

export const MainProvider = Context.Consumer;
