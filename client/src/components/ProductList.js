import React from "react";
import Card from "./Card";
import { Provider, useSelector, useDispatch, connect } from "react-redux";

const ProductList = () => {
  const products = useSelector((state) => state.products);
  console.log(products);
  const productList = products.map((product) => {
    return <Card key={product.id} card={product} />;
  });

  return <section className="product-lists">{productList}</section>;
};

export default ProductList;
