import React from "react";

const Item = ({ itemClass, name, placeholder }) => {
  return (
    <div className={itemClass}>
      <h5>{name}</h5>
      <span>{placeholder}</span>
    </div>
  );
};

export default Item;
