import React from "react"
import { products } from "./data"

export default function Card() {
  const productLists = products.map(product => {
    return (
      <div key={product.id} className="products-container">
        <img className="product-image" src={product.imageUrl} />
        <div className="product-description">
          <h2>{product.name}</h2>
          <p>{product.category}</p>
          <h4>{product.price}</h4>
        </div>
      </div>
    )
  })
  return productLists
}