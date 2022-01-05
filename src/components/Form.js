import React from "react"
import { useState } from 'react';

export default function Form() {
  const [productInfo, setProductInfo] = useState({
    title: "",
    photoLink: "",
    category: "",
    price: 0,
    content: "",
  });
  const onChange = (event) => setProductInfo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
  }
  return (
    <div>
      <h2>상품 추가</h2>
      <form onSubmit={onSubmit}>
          <label htmlFor="title">제목:</label>
          <input onChange={onChange} defaultValue={productInfo.title} type="text" id="title"></input>

          <label htmlFor="photo-link">사진 링크:</label>
          <input onChange={onChange} defaultValue={productInfo.photoLink} type="text" id="photo-link"></input>

          <label htmlFor="category">카테고리:</label>
          <input onChange={onChange} defaultValue={productInfo.category} type="text" id="category"></input>

          <label htmlFor="price">가격:</label>
          <input onChange={onChange} defaultValue={productInfo.price} type="number" id="price"></input>

          <label htmlFor="content">글 내용:</label>
          <input onChange={onChange} defaultValue={productInfo.content} type="text" id="content"></input>
          <button>상품 추가</button>
      </form>
    </div>
  );
}