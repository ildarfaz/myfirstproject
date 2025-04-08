import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Main } from "./components/main";
import "@/styles/global.scss";
const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Main />
      </div>
    </Router>
  );
};
export default App;
