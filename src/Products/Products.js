import React from "react";
import ProductItem from "./ProductItem";
import styles from "./products.module.css";

const Products = () => {
  const DUMMY_PRODUCTS = [
    {
      id: Math.random(),
      title:
        "Acer Aspire TC-1660-UA92 Desktop | 10th Gen Intel Core i5-10400 6-Core Processor | 12GB 2666MHz DDR4 | 512GB NVMe M.2 SSD | 8X DVD | Intel Wireless Wi-Fi 6 | Bluetooth 5.2 | Windows 10 Home",
      price: 698,
    },
    {
      id: Math.random(),
      title: "",
      price,
    },
  ];

  return (
    <div className={styles.productsContainer}>
      <div className={styles.productItems}>
        <ProductItem
          title="Deals & Promotions"
          src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Deals_1x._SY304_CB430401028_.jpg"
        />
        <ProductItem
          title="Shop by Category"
          src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Dash_Oculus_1x._SY304_CB667158353_.jpg"
        />
        <ProductItem
          title="Electronics"
          src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Electronics_1x._SY304_CB432774322_.jpg"
        />
        <ProductItem title="" src="" />
        <ProductItem title="" src="" />
        <ProductItem title="" src="" />
        <ProductItem title="" src="" />
        <ProductItem title="" src="" />
        <ProductItem title="" src="" />
      </div>
    </div>
  );
};

export default Products;
