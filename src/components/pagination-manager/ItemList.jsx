import React from "react";

const ItemList = ({ items }) => {
  return (
    <ul className="item-list">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
};

export default ItemList;
