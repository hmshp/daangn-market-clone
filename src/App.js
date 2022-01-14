import { useState } from "react";
import React from "react";
import { products } from "./data";
import "./style.css";
import Card from "./components/Card";
import Header from "./components/Header";
import Form from "./components/Form"
import Detail from "./components/Detail"


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

  const [editMode, setEditMode] = useState(false)

  // const editProduct = products.filter(product => product.id === )

  // const [detailData, setDetailData] = useState(
    
  // )

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

  function handleEdit(event) {
    setEditMode(prevEditMode => !prevEditMode)
  } 


  function toggleShown() {
    // console.log(isShown)
    setIsShown(prevIsShown => !prevIsShown)
  }

  const productLists = products.map((product) => {
    return <Card key={product.id} card={product} handleEdit={handleEdit}/>
  });
  return (
    <div className="home-container">
      <Header isShown={isShown} handleClick={toggleShown}/>
      <section className="main-page">
        {editMode? <h2>Edit Mode</h2> : 
        isShown ?
        <Form formData={formData} handleChange={handleChange} handleSubmit={handleSubmit} /> : <section className="product-lists">{productLists}</section>}
      </section>
    </div>
  );
}
//상품 클릭하면 Detail 컴포넌트 뜨게 하기. 어떻게?

//1. App에서 Card 컴포넌트 리턴할 때 handleEdit props도 보내기
//2. Card에서 onClick=props.handleEdit 추가
//3. App에 handleEdit 만들어놓기. 내용은:
//   [editMode, setEditMode] = useState(false);이라는 state 새로 만들고
//   handleEdit editMode true로 만들기
//4. main-page 섹션에서 isShown? 위에 조건문 먼저 달기. 어떤 조건문이냐면:
//   (editMode이 true면) -> Detail 렌더링
//   else(showDetail이 false면) -> 그때 isShown 조건문 달기
//   (isShown 이름도 나중에 addItem 같이 구체적인 의미가 담긴 이름으로 바꾸기)

//5. Detail 컴포넌트 만들기 - Form과 같은 폼 넣기. 값은 클릭한 상품과 같은 값.
//  그러려면 어떤 상품을 클릭했는지 알아야 한다. 어떻게? id로.

// - props로 폼 항목, 수정, 삭제 버튼 만들기



//Detail 컴포넌트 뜨면 폼 수정한 다음 수정내용 반영 or 삭제
//수정한 내용 상태를 파악하려면? 새로운 state 있어야 함.
//App에 [detailData, setDetailData]라는 state 새로 만들기
//초기값은 products 중에서 id가  

