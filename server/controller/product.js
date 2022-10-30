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

// patch로 해야 할지 put으로 해야 할지 몰라서(제목, 내용, 가격, 카테고리 등 몇 개를 수정할지 모르니까) UPDATE는 우선 보류

// export async function updateProduct(req, res) {
//   const id = req.params.id;
//   const text = req.body.text;
//   const tweet = await productRepository.update(id, text);
//   if (tweet) {
//     res.status(200).json(tweet);
//   } else {
//     res.status(404).json({ message: `Tweet id(${id}) not found` });
//   }
// }

export async function deleteProduct(req, res) {
  const id = req.params.id;
  await productRepository.remove(id);
  res.status(204).json({ message: `tweet id ${id} successfully deleted` });
}
