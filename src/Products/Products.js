import React from "react";
import ProductItem from "./ProductItem";
import styles from "./products.module.css";
import faker from "faker";

const Products = () => {
  const DUMMY_PRODUCTS = [
    {
      id: Math.random(),
      title: faker.commerce.productName(),
      price: faker.commerce.price(),
      src: faker.image.food(300, 300, true),
    },
    {
      id: Math.random(),
      title: faker.commerce.productName(),
      price: faker.commerce.price(),
      src: faker.image.food(300, 300, true),
    },
    {
      id: Math.random(),
      title: faker.commerce.productName(),
      price: faker.commerce.price(),
      src: faker.image.food(300, 300, true),
    },
    {
      id: Math.random(),
      title: faker.commerce.productName(),
      price: faker.commerce.price(),
      src: faker.image.food(300, 300, true),
    },
    {
      id: Math.random(),
      title: faker.commerce.productName(),
      price: faker.commerce.price(),
      src: faker.image.food(300, 300, true),
    },
    {
      id: Math.random(),
      title: faker.commerce.productName(),
      price: faker.commerce.price(),
      src: faker.image.food(300, 300, true),
    },
    {
      id: Math.random(),
      title: faker.commerce.productName(),
      price: faker.commerce.price(),
      src: faker.image.food(300, 300, true),
    },
    {
      id: Math.random(),
      title: faker.commerce.productName(),
      price: faker.commerce.price(),
      src: faker.image.food(300, 300, true),
    },
  ];

  return (
    <div className={styles.productsContainer}>
      <div className={styles.productItems}>
        {DUMMY_PRODUCTS.map((item) => (
          <ProductItem key={item.id} title={item.title} src={item.src} />
        ))}
      </div>
    </div>
  );
};

export default Products;
