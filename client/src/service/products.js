import axios from "axios";

const baseURL = "http://localhost:8080";

export const getProducts = async (username) => {
  // get 요청해서 상품 내역 조회 후 상태 업데이트
  const query = username ? `?username=${username}` : "";
  const response = await axios.get(`${baseURL}/products${query}`);

  return response.data
};

// async function postTweet(text) {
//   return this.http.fetch(`/tweets`, {
//     method: "POST",
//     // body는 object를 JSON으로 변환한 형태를 보내야 한다~!
//     body: JSON.stringify({
//       name: "Ellie",
//       username: "ellie",
//       text: text,
//     }),
//   });
// }

// async function deleteTweet(tweetId) {
//   return this.http.fetch(`/tweets/${tweetId}`, {
//     method: "DELETE",
//   });
// }

// async function updateTweet(tweetId, text) {
//   return this.http.fetch(`/tweets/${tweetId}`, {
//     method: "PUT",
//     body: JSON.stringify({
//       text: text,
//     }),
//   });
// }
