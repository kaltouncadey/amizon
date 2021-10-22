import React from "react";

import styles from "./products.module.css";

const ProductItem = ({ title, src }) => {
  return (
    <div className={styles.itemContainer}>
      <div className={styles.itemInfo}>
        <h3>{title}</h3>
        <img className={styles.itemImg} src={src} alt="" />
        <a href="#">See more</a>
      </div>
    </div>
  );
};

export default ProductItem;
