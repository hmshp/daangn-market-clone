/* 이 파일은  리액트 어플리케이션을 렌더링해 줄 뿐*/
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { legacy_createStore as createStore } from "redux";
import { Provider } from "react-redux";
import { products } from "./data";
import { Navigate } from "react-router-dom";

const store = createStore(reducer);

function reducer(currentState, action) {
  console.log(currentState, action);

  if (currentState === undefined) {
    return {
      products: products,
    };
  }

  const newState = { ...currentState };

  if (action.type === "CREATE_PRODUCT") {
    newState.products.unshift(action.data);
    <Navigate to="/" replace={true} />;
  } else if (action.type === "READ_ALL_PRODUCTS") {
    newState.products = action.data;
  }
  console.log(newState);
  return newState;
}

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
