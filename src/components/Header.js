import React from "react"

export default function Header() {
  return (
    <header>
      <h1 className="title">홍당무 마켓</h1>
      <div className="change-data-buttons">
        <button className='add-item'>추가</button>
        <button>수정 및 삭제</button>
      </div>
    </header>
  ) 
}
