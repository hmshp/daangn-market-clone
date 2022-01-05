import { useState } from 'react';
import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import Home from "./Home";
import Form from "./Form";

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
