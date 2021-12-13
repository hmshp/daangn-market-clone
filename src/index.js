/* 이 파일은  리액트 어플리케이션을 렌더링해 줄 뿐*/
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


ReactDOM.render(
  <React.StrictMode>
    <App /> 
  </React.StrictMode>,
  document.getElementById('root')
);
