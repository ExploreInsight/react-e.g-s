import { FaMinus, FaPlus } from "react-icons/fa";

export default function Child({ childData = [], state, display }) {
  return (
    <>
      <li className="tree-item">
        {/* Toogle the button at the end  .i.e + or - */}
        {childData.children && childData.children.length > 0 && (
          <span className="toggle-btn" onClick={() => state(childData.id)}>
            {" "}
            {!display[childData.id] ? <FaPlus /> : <FaMinus />}{" "}
          </span>
        )}
        {/* showing the child data i.e name of the node  */}
        {childData.name}

        {/* Rendre the Children if Expanded */}
        {childData.children &&
          childData.children.length > 0 &&
          display[childData.id] && (
            <ul className="tree-children" style={{ paddingLeft: "20px" }}>
              {childData.children.map((child) => {
                return (
                  <Child
                    key={child.id}
                    childData={child}
                    state={state}
                    display={display}
                  />
                );
              })}
            </ul>
          )}
      </li>
    </>
  );
}
