import { useState } from 'react';
import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";

function Home() {
  return (
    <div>
      <h2>상품 목록</h2>
        {/* <div key={product.id}>
          <h2>{product.name}</h2>
          <img
            src={product.imageUrl}
            alt={product.name}
            width={140}
            height={140}
          />
          <ul>
            <li>{product.price}</li>
            <li>{product.category}</li>
            <li>{product.detail}</li>
          </ul>
        </div> */}
    </div>
  );
}


function Form() {
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


export default function App() {
  return (
    <BrowserRouter>
      <h1>홍당무 마켓</h1>
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/form">상품 추가</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/form" element={<Form />} />
      </Routes>
    </BrowserRouter>
  );

}
