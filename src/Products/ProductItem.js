import React from "react";

import styles from "./products.module.css";

const ProductItem = ({ title, src, price }) => {
  return (
    <div className={styles.itemContainer}>
      <div className={styles.itemInfo}>
        <div className={styles.main}>
          <h3>{title}</h3>
          <img className={styles.itemImg} src={src} alt="" />
        </div>
        <div className={styles.actions}>
          $ {price}
          <button>Add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
