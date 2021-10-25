import React from "react";
import styles from "./cart.module.css";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";

const Carts = () => {
  const total = useSelector((state) => state.cart.totalAmount);
  const items = useSelector((state) => state.cart.items);
  const qty = useSelector((state) => state.cart.totalQty);

  return (
    <div className={styles.container}>
      <div className={styles.cartItems}>
        <h2>Shopping cart</h2>
        <p>Deselect all items</p>

        <hr />
        {!items.length ? (
          <p style={{ color: "red" }}>Your basket is empty !</p>
        ) : (
          items.map((item) => (
            <CartItem
              id={item.id}
              key={item.id}
              title={item.title}
              price={item.price}
              src={item.src}
              qty={item.qty}
            />
          ))
        )}
      </div>
      <div className={styles.subTotal}>
        Subtotal ({qty} {qty > 1 ? "items" : "item"}):{" "}
        <strong>${total.toFixed(2)}</strong>
        <button
          className={styles.proceedBtn}
          style={{ width: "100%", marginTop: "2rem" }}
        >
          Proceed to checkout
        </button>
      </div>
    </div>
  );
};

export default Carts;
