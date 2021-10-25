import React from "react";
import Header from "../components/Header/Header";
import Home from "../components/Home/Home";
import { Route, Switch, Redirect } from "react-router-dom";
import Cart from "./Cart";
import SignUp from "../components/Authentication/SignUp";
import { useSelector } from "react-redux";

const HomePage = () => {
  const user = useSelector((state) => state.userAuth.user);
  console.log(user, "we have user");
  return (
    <div>
      <Switch>
        <Route path="/" exact>
          {!user ? (
            <Redirect to="/signup" />
          ) : (
            <>
              ( <Header />
              <Home />)
            </>
          )}
        </Route>
        <Route path="/my-cart">
          <Header />
          <Cart />
        </Route>
        <Route path="/signup" component={SignUp} />
      </Switch>
    </div>
  );
};

export default HomePage;
