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

  function toggleShown() {
    // console.log(isShown)
    setIsShown(prevIsShown => !prevIsShown)

  }
  /*

Header에 props로 state과 toggleShown() 전달하기(props로 state뿐만 아니라 함수도 전달할 수 있구나!)

저 아래 return문에 <Header isClicked={isShown} handleClick={toggleShown}/> 이런 식으로 적기
*주의: 내가 만든 컴포넌트 안에 있는 property로는 돔에 접근 못한다. 그냥 내가 보려고 만든 이름일 뿐이다. 이 컴포넌트는 실제 DOM element가 아니니까

toggleShown 실행했으면
저 아래 return문에서 conditional rendering(?)을 해 줘야 된다.
이런 식으로 적기 -> {isShown ? 기존 코드(지금은 section 태그 안에 있으니까 컴포넌트로 만들면 깔끔할 듯) : <Form />}
*/

  const productLists = products.map((product) => {
    return <Card key={product.id} card={product} />
  });
  return (
    <div className="home-container">
      <Header isShown={isShown} handleClick={toggleShown}/>
      <section className="main-page">
        {isShown ? <Form /> : <section className="product-lists">{productLists}</section>}
      </section>
    </div>
  );
}
