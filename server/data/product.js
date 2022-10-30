let products = [
  {
    id: "1", // 상품 아이디 (DB에서 부여)
    title: "아이폰 12", // 제목
    username: "hyemi", // 판매자
    price: 500000, // 가격
    desc: "구매한 지 1년 미만, 미개봉", // 설명
    category: "전자기기", // 카테고리
    createdAt: Date.now().toString(), // 상품 등록 날짜
    url: "https://images.unsplash.com/photo-1591337676887-a217a6970a8a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80", // 상품 사진 url
  },
  {
    id: "2",
    title: "룰루레몬 요가복",
    username: "taylor",
    price: 20000,
    desc: "새 옷(한 번도 입지 않음)",
    category: "의류",
    createdAt: Date.now().toString(),
    url: "https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  },

  // {
  //   id: "teddy-bear",
  //   name: "곰인형",
  //   price: 5000,
  //   category: "장난감",
  //   detail: "귀여운 갈색 테디베어입니다.",
  //   url: "https://images.unsplash.com/photo-1602734846297-9299fc2d4703?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=436&q=80",
  // },
  // {
  //   id: "teddy-bear2",
  //   name: "곰인형",
  //   price: 5000,
  //   category: "장난감",
  //   detail: "귀여운 갈색 테디베어입니다.",
  //   url: "https://images.unsplash.com/photo-1602734846297-9299fc2d4703?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=436&q=80",
  // },
];

export async function getAll() {
  return products;
}

export async function getAllByUsername(username) {
  return products.filter((product) => product.username === username);
}

export async function getById(id) {
  return products.find((product) => product.id === id);
}

export async function create(product) {
  const created = {
    ...product,
    id: Date.now().toString(),
    username: "hyemi",
    createdAt: new Date(),
  };
  products.push(created);
  return product;
}

// export async function update(id, text) {
//   const tweet = tweets.find((tweet) => tweet.id === id);
//   if (tweet) {
//     tweet.text = text;
//   }
//   return tweet;
// }

export async function remove(id) {
  products = products.filter((product) => product.id !== id);
}
