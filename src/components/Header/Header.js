import React from "react";
import styles from "./header.module.css";
import * as Icons from "@material-ui/icons";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../store/Auth/AuthSlice";
import { auth } from "../../firebase";

const Header = ({ user }) => {
  const qty = useSelector((state) => state.cart.totalQty);
  const dispatch = useDispatch();
  const history = useHistory();

  const signout = () => {
    dispatch(userActions.addCurrentUser(null));
    auth.signOut();
    history.push("/");
  };
  return (
    <div className={styles.header}>
      <div className={styles.headerLogo}>
        <Link to="/">
          <img
            src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
            className={styles.img}
          />
        </Link>
      </div>
      <div className={styles.headerSearch}>
        <input type="text" />
        <div className={styles.searchIcon}>
          <Icons.Search />
        </div>
      </div>
      <div className={styles.headerOptions} style={{ userSelect: "none" }}>
        <div className={styles.option}>
          <span className={styles.optionOne}>
            {" "}
            {user ? user.user.email : "Hello Guest"}
          </span>
          <span
            className={styles.optionTwo}
            onClick={signout}
            style={{ cursor: "pointer" }}
          >
            {user ? "Signout" : "Sign in"}
          </span>
        </div>
        <div className={styles.option}>
          <span className={styles.optionOne}>Returns</span>
          <span className={styles.optionTwo}>& orders</span>
        </div>
        <div className={styles.option}>
          <Link to="/my-cart" className={styles.link}>
            <span className={styles.optionOne}>
              <Icons.ShoppingCart style={{ color: "white" }} />
              <span style={{ color: "white", fontSize: 18, marginLeft: 10 }}>
                {qty}{" "}
              </span>
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
