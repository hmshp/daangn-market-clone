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
      <h2 className="form-title">상품 추가</h2>
      <form onSubmit={onSubmit}>
          <label>제목: <input onChange={onChange} defaultValue={productInfo.title} type="text" id="title" /></label>
          

          <label>사진 링크:<input onChange={onChange} defaultValue={productInfo.photoLink} type="text" id="photo-link" /></label>
          

          <label>카테고리:<input onChange={onChange} defaultValue={productInfo.category} type="text" id="category" /></label>
          

          <label>가격:<input onChange={onChange} defaultValue={productInfo.price} type="number" id="price" /></label>
          

          <label>글 내용:<input onChange={onChange} defaultValue={productInfo.content} type="text" id="content" /></label>
          
          <button>상품 추가</button>
      </form>
    </div>
  );
}