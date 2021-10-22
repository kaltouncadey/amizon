import { SearchOutlined } from "@material-ui/icons";
import React from "react";
import styles from "./header.module.css";
import * as Icons from "@material-ui/icons";
import { Link } from "react-router-dom";

const Header = () => {
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
      <div className={styles.headerOptions}>
        <div className={styles.option}>
          <span className={styles.optionOne}>Hello</span>
          <span className={styles.optionTwo}>Sign in</span>
        </div>
        <div className={styles.option}>
          <span className={styles.optionOne}>Returns</span>
          <span className={styles.optionTwo}>& orders</span>
        </div>
        <div className={styles.option}>
          <Link to="/my-cart" className={styles.link}>
            <span className={styles.optionOne}>
              <Icons.ShoppingCart style={{ color: "white" }} /> 0
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
