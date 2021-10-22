import React from "react";
import Products from "../../Products/Products";
import styles from "./home.module.css";
const Home = () => {
  return (
    <div className={styles.homeContainer}>
      <div className={styles.homeRow}>
        <img
          className={styles.imgContainer}
          src="https://m.media-amazon.com/images/I/61ASx7NHTWL._SX3000_.jpg"
          alt=""
        />
        <div className={styles.products}>
          <Products />
        </div>
      </div>
    </div>
  );
};

export default Home;
