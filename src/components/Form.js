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
    <div className="form-container">
      <form className="form" onSubmit={onSubmit}>
      <h2 className="form-global-title">상품 추가</h2>
          <div className="form-inputs-container">
            <div className="form-input-wrapper">
              <label htmlFor='title'>제목: </label>
              <input onChange={onChange} defaultValue={productInfo.title} type="text" id="title" />
            </div>
            
            <div className="form-input-wrapper">
              <label htmlFor='photo-link'>사진 링크:</label>
              <input onChange={onChange} defaultValue={productInfo.photoLink} type="text" id="photo-link" />
            </div>

            <div className="form-input-wrapper">
              <label htmlFor='category'>카테고리:</label>
              <input onChange={onChange} defaultValue={productInfo.category} type="text" id="category" />
            </div>

            <div className="form-input-wrapper">
              <label htmlFor='price'>가격:</label>
              <input onChange={onChange} defaultValue={productInfo.price} type="number" id="price" />
            </div>

            <div className="form-input-wrapper">
              <label htmlFor='content'>글 내용:</label>
              <input onChange={onChange} defaultValue={productInfo.content} type="text" id="content" />
            </div>

            <button className="form-add-button">상품 추가</button>
          </div>      
      </form>
    </div>
  );
}