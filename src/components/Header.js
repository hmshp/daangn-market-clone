import React from "react"

export default function Header(props) {
  //Header 컴포넌트 안에 있는 버튼 element에 onClick={props.handleClick} 적기. 이때의 onClick은 진짜 이벤트 리스너다! img 태그는 DOM element니까
  
  return (
    <header>
      <h1 className="header-title">홍당무 마켓</h1>
    </header>
  ) 
}
