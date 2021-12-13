import { products } from './data.js'

export default function App() {
  return (
    <div>
      <h1>상품 목록</h1>
      <button type="submit">상품 추가</button>
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