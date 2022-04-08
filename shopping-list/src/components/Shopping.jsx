import React from "react";
import ShoppingList from "./ShoppingList";

const Shopping = ({ products, onDelete, onToggle }) => {
  return (
    <div>
      {products.map((item, index) => (
        <div key={index}>
          <ShoppingList item={item} onDelete={onDelete} onToggle={onToggle} />
        </div>
      ))}
    </div>
  );
};

export default Shopping;
