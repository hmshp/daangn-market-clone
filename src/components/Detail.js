import React from "react"

export default function Detail(props) {
  return (
    <div className="form-container">
      {props.detailData}
      {console.log(props.detailData)}
      {/* <form className="form">
        <h2 className="form-global-title">상품 세부사항</h2>
        <div className="form-inputs-container">
          <div className="form-input-wrapper">
            <label htmlFor="name">제목: </label>
            <input
              // onChange={props.handleChange}
              type="text"
              name="name"
              id="name"
              value={props.detailData.name}
            />
          </div>
          <div className="form-input-wrapper">
            <label htmlFor="image-url">사진 링크:</label>
            <input
              // onChange={props.handleChange}
              type="text"
              name="image-url"
              id="image-url"
              value={props.detailData.imageUrl}
            />
          </div>
          <div className="form-input-wrapper">
            <label htmlFor="category">카테고리:</label>
            <input
              // onChange={props.handleChange}
              type="text"
              name="category"
              id="category"
              value={props.detailData.category}
            />
          </div>
          <div className="form-input-wrapper">
            <label htmlFor="price">가격:</label>
            <input
              // onChange={props.handleChange}
              type="number"
              name="price"
              id="price"
              value={props.detailData.price}
            />
          </div>
          <div className="form-input-wrapper">
            <label htmlFor="detail">글 내용:</label>
            <textarea
              // onChange={props.handleChange}
              name="detail"
              id="detail"
              value={props.detailData.detail}
            />
          </div>
          <button className="form-add-button">상품 추가</button>
        </div>
      </form> */}
    </div>
  );
}