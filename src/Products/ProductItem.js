import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { cartActions } from "../components/store/CartStore/CartSlice";

import styles from "./products.module.css";

const ProductItem = ({ title, src, price }) => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);
  const addToCart = () => {
    const newPayload = {
      title,
      src,
      price,
    };
    dispatch(cartActions.addToCart(newPayload));
    console.log(items);
  };
  return (
    <div className={styles.itemContainer}>
      <div className={styles.itemInfo}>
        <div className={styles.main}>
          <h3>{title}</h3>
          <img className={styles.itemImg} src={src} alt="" />
        </div>
        <div className={styles.actions}>
          $ {price}
          <button onClick={addToCart}>Add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
