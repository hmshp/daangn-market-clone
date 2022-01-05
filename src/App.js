import { useState } from 'react';
import React from "react";
import Home from "./Home";
import Form from "./Form";
import { products } from "./data";
import "./style.css"

export default function App() {
  const productLists = products.map(product => {
    return (
      <div class="products-container">
        <img className="product-image" src={product.imageUrl} />
        <div className="product-description">
          <h2>{product.name}</h2>
          <p>{product.category}</p>
          <h4>{product.price}</h4>
        </div>
      </div>
    )
  })
  return (
      <div className="home-container">
        <h1 className="title">홍당무 마켓</h1>
        <div className="product-lists">
          {productLists}
        </div>
      </div>
  );

}
