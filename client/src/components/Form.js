import React, { useState } from "react";
import { Provider, useSelector, useDispatch, connect } from "react-redux";
import { Link } from "react-router-dom";

export default function Form() {
  const [formData, setFormData] = useState({
    id: Date.now(),
    name: "",
    price: 0,
    category: "",
    detail: "",
    imageUrl: "",
  });

  console.log(formData);
  const dispatch = useDispatch();

  function handleChange(event) {
    // Form 안의 데이터 수집하는 로컬 state
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
      };
    });
  }
  //1. state를 App으로 옮기고
  //2. Form에서 state를 바꾸고 submit하면 state object를 data.js 안의 products에 push하도록 하자. 근데 state를 어떻게 data.js에 전달하지? data.js도 컴포넌트인가?

  return (
    <div className="form-container">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch({ type: "CREATE", data: formData });
        }}
        className="form"
      >
        <h2 className="form-global-title">상품 추가</h2>
        <div className="form-inputs-container">
          <div className="form-input-wrapper">
            <label htmlFor="name">제목: </label>
            <input
              onChange={handleChange}
              type="text"
              name="name"
              id="name"
              value={formData.name}
            />
          </div>
          <div className="form-input-wrapper">
            <label htmlFor="photo-link">사진 링크:</label>
            <input
              onChange={handleChange}
              type="text"
              name="imageUrl"
              id="photo-link"
              value={formData.imageUrl}
            />
          </div>
          <div className="form-input-wrapper">
            <label htmlFor="category">카테고리:</label>
            <input
              onChange={handleChange}
              type="text"
              name="category"
              id="category"
              value={formData.category}
            />
          </div>
          <div className="form-input-wrapper">
            <label htmlFor="price">가격:</label>
            <input
              onChange={handleChange}
              type="number"
              name="price"
              id="price"
              value={formData.price}
            />
          </div>
          <div className="form-input-wrapper">
            <label htmlFor="detail">글 내용:</label>
            <textarea
              onChange={handleChange}
              name="detail"
              id="detail"
              value={formData.detail}
            />
          </div>
          <button className="form-add-button">상품 추가</button>
        </div>
      </form>
    </div>
  );
}
