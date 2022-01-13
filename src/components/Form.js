import React from "react";
import { useState } from "react";

export default function Form() {
  const [formData, setFormData] = useState({
    title: "",
    photoLink: "",
    category: "",
    price: 0,
    content: "",
  });

  //위 object의 state 올바르게 관리할 수 있게 아래 코드 수정하기
  function handleChange(event) {
    // console.log(event);
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
      };
    });
  }

  return (
    <div className="form-container">
      <form className="form">
        <h2 className="form-global-title">상품 추가</h2>
        <div className="form-inputs-container">
          <div className="form-input-wrapper">
            <label htmlFor="title">제목: </label>
            <input onChange={handleChange} type="text" id="title" />
          </div>

          <div className="form-input-wrapper">
            <label htmlFor="photo-link">사진 링크:</label>
            <input onChange={handleChange} type="text" id="photo-link" />
          </div>

          <div className="form-input-wrapper">
            <label htmlFor="category">카테고리:</label>
            <input onChange={handleChange} type="text" id="category" />
          </div>

          <div className="form-input-wrapper">
            <label htmlFor="price">가격:</label>
            <input onChange={handleChange} type="number" id="price" />
          </div>

          <div className="form-input-wrapper">
            <label htmlFor="content">글 내용:</label>
            <input onChange={handleChange} type="text" id="content" />
          </div>

          <button className="form-add-button">상품 추가</button>
        </div>
      </form>
    </div>
  );
}
