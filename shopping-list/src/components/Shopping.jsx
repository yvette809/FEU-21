import React from "react";
import ShoppingList from "./ShoppingList";

const Shopping = ({ products, onDelete }) => {
  return (
    <div>
      {products.map((item, index) => (
        <div key={index}>
          <ShoppingList item={item} onDelete={onDelete} />
        </div>
      ))}
    </div>
  );
};

export default Shopping;
