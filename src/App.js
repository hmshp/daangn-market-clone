import { useState } from 'react';
import React from "react";
import Home from "./Home";
import Form from "./Form";
import { products } from "./data";
import "./style.css"
import Card from "./Card"

export default function App() {
  return (
      <div className="home-container">
        <h1 className="title">홍당무 마켓</h1>
        <div className="change-data-buttons">
          <button className='add-item'>추가</button>
          <button>수정 및 삭제</button>
        </div>
        <div className="product-lists">
          <Card />
        </div>
      </div>
  );

}
