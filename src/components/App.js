import React, { useState } from "react";
import DeleteItems from "./DeleteItems";
import NewItems from "./NewItems";
import Footer from "./Footer";

function App() {
  const [click, newClick] = useState([]);

  function handleClick(liItem) {
    newClick((prevItems) => {
      return [...prevItems, liItem];
    });
  }

  function deleteItems(id) {
    newClick((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <div className="container">
        <div className="heading">
          <h1>To-do-List</h1>
        </div>
        <NewItems onAdd={handleClick} />
        <div>
          <ul>
            {click.map((newItem, index) => {
              return (
                <DeleteItems
                  item={newItem}
                  key={index}
                  id={index}
                  onDelete={deleteItems}
                />
              );
            })}
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default App;
