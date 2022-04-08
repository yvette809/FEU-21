import React from "react";

const ShoppingList = ({ item, onDelete, onToggle }) => {
  return (
    <ul className="product">
      <li
        className={item.completed ? "completed" : "notcompleted"}
        onDoubleClick={()=> onToggle(item.id)}
      >
        {item.product}{" "}
        <i className="fa fa-trash" onClick={() => onDelete(item.id)}></i>
      </li>
    </ul>
  );
};

export default ShoppingList;
