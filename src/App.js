import { useState } from 'react';
import React from "react";
import Home from "./Home";
import Form from "./Form";
import { products } from "./data";
import "./style.css"
import Card from "./Card"
import Header from "./Header"

export default function App() {
  return (
      <div className="home-container">
        <Header />
        <div className="product-lists">
          <Card />
        </div>
      </div>
  );

}
