import React from "react";

const Button = ({ showForm }) => {
  return (
    <div className="add-button container">
      <button className="btn btn-light mb-3" onClick={showForm}>
        Add Product
      </button>
    </div>
  );
};

export default Button;
