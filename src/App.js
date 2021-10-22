import React from "react";
import HomePage from "./Pages/HomePage";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <HomePage />
    </BrowserRouter>
  );
};

export default App;
