import React from "react";
import { MainProvider } from "./AppContext";

class Switcher extends React.Component {
  render() {
    return (
      <MainProvider>
        {({ status, change }) => {
          return (
            <div>
              <div>{status ? "It's on!" : "It's off!"}</div>
              <button onClick={change}>Toggle</button>
            </div>
          );
        }}
      </MainProvider>
    );
  }
}

export default Switcher;
