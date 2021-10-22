import React from "react";
import Header from "../components/Header/Header";
import Home from "../components/Home/Home";
import { Route, Switch } from "react-router-dom";
import Cart from "./Cart";

const HomePage = () => {
  return (
    <div>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/my-cart" component={Cart} />
      </Switch>
    </div>
  );
};

export default HomePage;
