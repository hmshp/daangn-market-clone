import React from "react";
import { Link } from "react-router-dom";

const Control = () => {
  return (
    <div className="change-data-buttons">
      <Link to="/product/new">
        <button className="add-item">추가</button>
      </Link>
      <button>수정 및 삭제</button>
    </div>
  );
};

export default Control;
