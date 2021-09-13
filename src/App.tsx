import React, { FC } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Main } from "./components/main/Main";
const App: FC = () => {
  return (
    <Router>
      <div className="App">
        <Main />
      </div>
    </Router>
  );
};
export default App;
