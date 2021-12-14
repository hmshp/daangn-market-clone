export default function Form() {
  return (
    <div>
      <h2>상품 추가</h2>
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
    </div>
  );
}
