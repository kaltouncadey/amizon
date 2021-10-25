import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../../firebase";
import { userActions } from "../store/Auth/AuthSlice";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const show = useSelector((state) => state.userAuth.user);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        if (auth) {
          dispatch(userActions.addCurrentUser(auth));
        }
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error.message);
        setIsLoading(false);
        setError(true);
      });

    console.log(show);
  };

  const spinner = (
    <div className="clearfix">
      <div className="spinner-border float-right" role="status"></div>
    </div>
  );

  return (
    <div
      className="container mt-5"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <img
        style={{ width: "10%" }}
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
      />

      <div className="container card mt-3 p-4" style={{ width: "40%" }}>
        <h3>Sign up</h3>
        {error && (
          <div className="bg-danger p-2 text-light mt-3 text-center rounded">
            {error ? "Something wrong happened, please try again" : ""}
          </div>
        )}
        <form className="p-1 mt-3" onSubmit={handleSubmit}>
          <h6>Email</h6>
          <input
            type="text"
            className="form-control shadow-none mt-2 mb-3"
            placeholder="Email"
            value={email}
            onChange={(e) => {
              setError("");
              setEmail(e.target.value);
            }}
          />
          <h6>Password</h6>
          <input
            type="password"
            className="form-control shadow-none mt-2"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className="mt-4 w-100 btn shadow-none"
            style={{
              backgroundColor: "#F1C557",
              color: "black",
              borderRadius: ".4rem",
              border: 0,
            }}
          >
            {isLoading ? spinner : "Create your account"}
          </button>{" "}
          <p className="mt-3">
            By continuing, you agree to Amazon's Conditions of Use and Privacy
            Notice.
          </p>
        </form>
        <button className="btn btn-secondary shadow-none">Log in</button>
      </div>
    </div>
  );
};

export default SignUp;
