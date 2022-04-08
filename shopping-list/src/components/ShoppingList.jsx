import React from "react";

const ShoppingList = ({ item, onDelete }) => {
  return (
    <ul className="product" >
      <li className={item.completed? 'completed': 'notcompleted'}>
        
        {item.product}{" "}
        <i className="fa fa-trash" onClick={() => onDelete(item.id)}></i>
      </li>
    </ul>
  );
};

export default ShoppingList;
