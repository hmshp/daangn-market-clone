import { useState } from "react";
import React from "react";
import { products } from "./data";
import "./style.css";
import Card from "./components/Card";
import Header from "./components/Header";
import Form from "./components/Form";

import { Provider, useSelector, useDispatch, connect } from "react-redux";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Link,
} from "react-router-dom";
import MainPage from "./pages/MainPage";

export default function App() {
  return (
    <Router>
      <div className="home-container">
        <Header />
        <Routes>
          <Route index element={<MainPage />} />
          <Route path="/product/new" element={<Form />} />
          <Route exact path="/products" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  );
}
