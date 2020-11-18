import React from "react";

function DeleteItems(props) {
  return (
    <div
      onClick={(e) => {
        props.onDelete(props.id);
      }}
    >
      <li>{props.item}</li>
    </div>
  );
}

export default DeleteItems;
