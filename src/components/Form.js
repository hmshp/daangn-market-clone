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
            <input
              onChange={handleChange}
              type="text"
              name="title"
              id="title"
              value={formData.title}
            />
          </div>
          <div className="form-input-wrapper">
            <label htmlFor="photo-link">사진 링크:</label>
            <input
              onChange={handleChange}
              type="text"
              name="photoLink"
              id="photo-link"
              value={formData.photoLink}
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
            <label htmlFor="content">글 내용:</label>
            <input
              onChange={handleChange}
              type="text"
              name="content"
              id="content"
              value={formData.content}
            />
          </div>
          <button className="form-add-button">상품 추가</button>
        </div>
      </form>
    </div>
  );
}
