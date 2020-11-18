import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";

function NewItems(props) {
  const [item, setItem] = useState("");

  function handleItem(e) {
    const newItem = e.target.value;
    setItem(newItem);
  }
  return (
    <div>
      <form>
        <input name="item" onChange={handleItem} value={item} />
        <button
          onClick={(e) => {
            props.onAdd(item);
            setItem("");
            e.preventDefault();
          }}
        >
          <span>
            <AddIcon fontSize="medium" />
          </span>
        </button>
      </form>
    </div>
  );
}

export default NewItems;
