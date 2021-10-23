import React from "react";
import ProductItem from "./ProductItem";
import styles from "./products.module.css";
import faker from "faker";

const Products = () => {
  const DUMMY_PRODUCTS = [
    {
      id: Math.random(),
      title: faker.commerce.productName(),
      price: 23.99,
      src: "https://images.unsplash.com/photo-1446214814726-e6074845b4ce?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGZhc2hpb24lMjBjbG90aGVzfGVufDB8MnwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: Math.random(),
      title: faker.commerce.productName(),
      price: 37.99,
      src: "https://images.unsplash.com/photo-1633281651825-5f3c9b55f6a6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGZhc2hpb24lMjBjbG90aGVzfGVufDB8MnwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: Math.random(),
      title: faker.commerce.productName(),
      price: 12.5,
      src: "https://images.unsplash.com/photo-1604176354204-9268737828e4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZmFzaGlvbiUyMGNsb3RoZXN8ZW58MHwyfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: Math.random(),
      title: faker.commerce.productName(),
      price: 99.99,
      src: "https://images.unsplash.com/photo-1577375729078-820d5283031c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cGN8ZW58MHwyfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: Math.random(),
      title: faker.commerce.productName(),
      price: 84.99,
      src: "https://media.istockphoto.com/photos/young-handsome-man-in-classic-suit-over-the-lake-background-picture-id1300966679?b=1&k=20&m=1300966679&s=170667a&w=0&h=KbwGRDDRdBsjKJdifA80Ak3ZtpWvufsY_RTn_JVl73A=",
    },
    {
      id: Math.random(),
      title: faker.commerce.productName(),
      price: 33.99,
      src: "https://media.istockphoto.com/photos/this-one-match-perfect-with-me-picture-id1293366109?b=1&k=20&m=1293366109&s=170667a&w=0&h=2z_h2WlM3291IRKFXrdmtObnCt93rNNdNN6mqvnKD1I=",
    },
    {
      id: Math.random(),
      title: faker.commerce.productName(),
      price: 45.99,
      src: faker.image.food(300, 300, true),
    },
    {
      id: Math.random(),
      title: faker.commerce.productName(),
      price: 12.99,
      src: faker.image.food(300, 300, true),
    },
  ];

  return (
    <div className={styles.productsContainer}>
      <div className={styles.productItems}>
        {DUMMY_PRODUCTS.map((item) => (
          <ProductItem
            key={item.id}
            id={item.id}
            price={item.price}
            title={item.title}
            src={item.src}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;
