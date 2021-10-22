import React from "react";
import styles from "./cart.module.css";
import { useSelector } from "react-redux";

const Carts = () => {
  const total = useSelector((state) => state.cart.totalAmount);
  const items = useSelector((state) => state.cart.items);

  return (
    <div className={styles.container}>
      <div className={styles.cartItems}>
        <h2>Shopping cart</h2>
        <p>Deselect all items</p>
        <hr />
        {!items.length ? (
          <p style={{ color: "red" }}>Your basket is empty !</p>
        ) : (
          items.map((item) => <p>{item.payload.title}</p>)
        )}
      </div>
      <div className={styles.subTotal}>
        Subtotal ({items.length} item): <strong>${total}</strong>{" "}
      </div>
    </div>
  );
};

export default Carts;
