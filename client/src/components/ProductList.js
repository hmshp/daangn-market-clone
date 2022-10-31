import React, { useEffect } from "react";
import Card from "./Card";
import { Provider, useSelector, useDispatch, connect } from "react-redux";
import * as tweetService from "../service/products.js";

const ProductList = () => {
  const dispatch = useDispatch();

  // 렌더링으로 인해 side effect가 발생하므로 getProducts를 useEffect 안에 넣어 주었다.
  useEffect(() => {
    tweetService.getProducts().then((data) => {
      dispatch({ type: "READ_ALL_PRODUCTS", data: data });
    });
  }, []);

  // products state 읽기
  const products = useSelector((state) => state.products);

  const productList = products.map((product) => {
    return <Card key={product.id} card={product} />;
  });

  return <section className="product-lists">{productList}</section>;
};

export default ProductList;
