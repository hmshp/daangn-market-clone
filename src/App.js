import { useState } from "react";
import React from "react";
import Form from "./Form";
import { products } from "./data";
import "./style.css";
import Card from "./Card";
import Header from "./Header";

export default function App() {
  const productLists = products.map((product) => {
    return <Card key={product.id} card={product} />;
  });
  return (
    <div className="home-container">
      <Header />
      <section className="product-lists">{productLists}</section>
    </div>
  );
}
