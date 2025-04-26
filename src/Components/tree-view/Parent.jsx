import React, { useState } from "react";
import Child from "./Child";

function Parent({ list = [] }) {
  const [display, setDisplay] = useState({}); // display is an object which will store keys as item Ids and values as boolean

  const toggleState = (id) => {
    //Toggles the display state of a node when clicked. i.e. this indicate whether the item is expanded.
    setDisplay((prevState) => ({ ...prevState, [id]: !prevState[id] }));
  };
  return (
    <>
      {/* loops through this list array here */}
      {list && list.length ? (
        <div className="tree-container">
          <ul>
            {list.map((data) => (
              // pass the data to the child component
              <Child
                key={data.id}
                childData={data}
                state={toggleState}
                display={display}
              />
            ))}
          </ul>
        </div>
      ) : null}
    </>
  );
}

export default Parent;
