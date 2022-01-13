import React from "react";
import { useState } from "react";

export default function Form(props) {

  //1. state를 App으로 옮기고
  //2. Form에서 state를 바꾸고 submit하면 state object를 data.js 안의 products에 push하도록 하자. 근데 state를 어떻게 data.js에 전달하지? data.js도 컴포넌트인가?

  return (
    <div className="form-container">
      <form className="form">
        <h2 className="form-global-title">상품 추가</h2>
        <div className="form-inputs-container">
          <div className="form-input-wrapper">
            <label htmlFor="title">제목: </label>
            <input
              onChange={props.handleChange}
              type="text"
              name="title"
              id="title"
              value={props.formData.title}
            />
          </div>
          <div className="form-input-wrapper">
            <label htmlFor="photo-link">사진 링크:</label>
            <input
              onChange={props.handleChange}
              type="text"
              name="photoLink"
              id="photo-link"
              value={props.formData.photoLink}
            />
          </div>
          <div className="form-input-wrapper">
            <label htmlFor="category">카테고리:</label>
            <input
              onChange={props.handleChange}
              type="text"
              name="category"
              id="category"
              value={props.formData.category}
            />
          </div>
          <div className="form-input-wrapper">
            <label htmlFor="price">가격:</label>
            <input
              onChange={props.handleChange}
              type="number"
              name="price"
              id="price"
              value={props.formData.price}
            />
          </div>
          <div className="form-input-wrapper">
            <label htmlFor="content">글 내용:</label>
            <textarea
              onChange={props.handleChange}
              name="content"
              id="content"
              value={props.formData.content}
            />
          </div>
          <button className="form-add-button">상품 추가</button>
        </div>
      </form>
    </div>
  );
}
