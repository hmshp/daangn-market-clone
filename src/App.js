import { useState } from "react";
import React from "react";
import { products } from "./data";
import "./style.css";
import Card from "./components/Card";
import Header from "./components/Header";
import Form from "./components/Form"

export default function App() {
  //useState만들기
  const [isShown, setIsShown] = useState(false)
  //버튼 클릭 안한 상태면 false(상품 목록 보이는 상태), 클릭 한 상태면 true

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

  function handleSubmit(event) {
    event.preventDefault();
    products.push({
      ...formData,
      id: formData.title,
      name: formData.title,
      price: formData.price,
      category: formData.category,
      detail: formData.content,
      imageUrl: formData.photoLink
    })
  }

  function toggleShown() {
    // console.log(isShown)
    setIsShown(prevIsShown => !prevIsShown)
  }

  const productLists = products.map((product) => {
    return <Card key={product.id} card={product} />
  });
  return (
    <div className="home-container">
      <Header isShown={isShown} handleClick={toggleShown}/>
      <section className="main-page">
        {isShown ? <Form formData={formData} handleChange={handleChange} handleSubmit={handleSubmit} /> : <section className="product-lists">{productLists}</section>}
      </section>
    </div>
  );
}
