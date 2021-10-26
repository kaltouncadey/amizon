import React, { useEffect } from "react";
import HomePage from "./Pages/HomePage";
import { BrowserRouter, useHistory } from "react-router-dom";
import { auth } from "./firebase";
import { userActions } from "./components/store/Auth/AuthSlice";
import { useDispatch, useSelector } from "react-redux";

const App = () => {
  return (
    <BrowserRouter>
      <HomePage />
    </BrowserRouter>
  );
};

export default App;
