import React from "react";
import { useDispatch } from "react-redux";
import { cartActions } from "../store/CartStore/CartSlice";
import styles from "./cartItem.module.css";

const CartItem = ({ title, price, src, qty, id }) => {
  const dispatch = useDispatch();
  const addToCart = () => {
    const newPayload = {
      id,
      title,
      src,
      price,
      qty: 1,
    };
    dispatch(cartActions.addToCart(newPayload));
  };

  const removeItem = () => {
    dispatch(cartActions.removeCart(id));
  };

  return (
    <div className={styles.container}>
      <div className={styles.itemInfo}>
        <div className={styles.itemImg}>
          <img src={src} className={styles.img} alt="" />
        </div>
        <div className={styles.details}>
          <h2>{title}</h2>
          <h4>$ {price.toFixed(2)}</h4>
          <div>
            <button onClick={addToCart}>+</button>
            <span style={{ margin: "0 1rem" }}> {qty} </span>
            <button onClick={removeItem}>-</button>
          </div>
          <p style={{ textAlign: "right" }}>SubTotal $ {price * qty} </p>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default CartItem;
