import { products } from './data.js';
import { useState } from 'react';

export default function App() {

    const [ShowForm, setShowForm] = useState(false);
    function handleClick() {
      setShowForm(!ShowForm);
    }
    
    if(ShowForm) {
      return (
        <div>
          <label htmlFor="title">제목:</label>
          <input type="text" id="title"></input>
    
          <label htmlFor="photo-link">사진 링크:</label>
          <input type="text" id="photo-link"></input>
    
          <label htmlFor="category">카테고리:</label>
          <input type="text" id="category"></input>
    
          <label htmlFor="price">가격:</label>
          <input type="number" id="price"></input>
    
          <label htmlFor="content">글 내용:</label>
          <input type="text" id="content"></input>
          <button onClick={handleClick}>홈으로 돌아가기</button>
        </div>
      );
    } else {
      return (
        <div>
          <h1>상품 목록</h1>
          <button type="submit" onClick={handleClick}>상품 추가</button>
          {products.map(product =>
            <div key={product.id}>
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
            </div>)}
        </div>
      );
    }


}