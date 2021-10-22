import React from "react";
import styles from "./cart.module.css";

const Carts = () => {
  return (
    <div className={styles.container}>
      <div className={styles.cartItems}>
        <h2>Shopping cart</h2>
        <p>Deselect all items</p>
        <hr />
      </div>
      <div className={styles.subTotal}>
        Subtotal (1 item): <strong>$1,549.99</strong>{" "}
      </div>
    </div>
  );
};

export default Carts;
