import * as productRepository from "../data/product.js";

export async function getProducts(req, res) {
  const username = req.query.username;
  // /products : 전체 상품
  // /products?username=username : 프로필에서 내가 판매 중인 상품만 볼 때
  const data = await (username
    ? productRepository.getAllByUsername(username)
    : productRepository.getAll());
  res.status(200).json(data);
}

export async function getProduct(req, res) {
  // 상품 클릭했을 때 상세 정보 보기
  const id = req.params.id;
  const product = await productRepository.getById(id);
  if (product) {
    res.status(200).json(product);
  } else {
    res.status(404).json({ message: `Product id(${id}) not found` });
  }
}

export async function createProduct(req, res) {
  const { title, price, category, desc, url } = req.body;
  const product = await productRepository.create({
    title,
    price,
    category,
    desc,
    url,
  });
  res.status(201).json(product);
}

// 몇 개 항목을 수정할지 모르는데, 몇 개 든 다 잘 수정되게 하려면 어떻게 해야 할지???
// 우선 제목, 가격, 카테고리만 수정한다는 시나리오고 API 작성했다.
export async function updateProduct(req, res) {
  const { id } = req.params;
  const { title, price, category } = req.body;
  const product = await productRepository.update(id, title, price, category);
  if (product) {
    res.status(200).json(product);
  } else {
    res.status(404).json({ message: `Product id(${id}) not found` });
  }
}

export async function deleteProduct(req, res) {
  const id = req.params.id;
  await productRepository.remove(id);
  res.status(204).json({ message: `Product id ${id} successfully deleted` });
}
