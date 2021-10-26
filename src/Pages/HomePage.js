import React, { useEffect, useState } from "react";
import Header from "../components/Header/Header";
import Home from "../components/Home/Home";
import { Route, Switch, Redirect, useHistory } from "react-router-dom";
import Cart from "./Cart";
import SignUp from "../components/Authentication/SignUp";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../firebase";
import { userActions } from "../components/store/Auth/AuthSlice";

const HomePage = () => {
  const user = useSelector((state) => state.userAuth.user);
  const history = useHistory();
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  useEffect(() => {
    setLoading(true);
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(userActions.addCurrentUser({ user: authUser }));
        setLoading(false);
        history.push("/");
      } else {
        dispatch(userActions.addCurrentUser(null));
        setLoading(false);
      }
    });
  }, []);

  const spinner = (
    <div
      className="clearfix"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div className="spinner-border float-right" role="status"></div>
    </div>
  );

  return (
    <div>
      {loading ? (
        spinner
      ) : (
        <>
          <Switch>
            <Route path="/" exact>
              {!user ? (
                <Redirect to="/signup" />
              ) : (
                <>
                  <Header user={user} />
                  <Home />
                </>
              )}
            </Route>
            <Route path="/my-cart">
              <Header user={user} />
              <Cart />
            </Route>
            <Route path="/signup" component={SignUp} />
          </Switch>
        </>
      )}
    </div>
  );
};

export default HomePage;
