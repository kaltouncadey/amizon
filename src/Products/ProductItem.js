import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { cartActions } from "../components/store/CartStore/CartSlice";

import styles from "./products.module.css";

const ProductItem = ({ title, src, price, id }) => {
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
  return (
    <div className={styles.itemContainer}>
      <div className={styles.itemInfo}>
        <div className={styles.main}>
          <h3>{title}</h3>
          <img className={styles.itemImg} src={src} alt="" />
        </div>
        <div className={styles.actions}>
          $ {price.toFixed(2)}
          <button className={styles.addBtn} onClick={addToCart}>
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
