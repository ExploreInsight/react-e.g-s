import Parent from "./Parent";
import './Tree.css'

function Tree({ listData = [] }) {
  return (
    <>
      <Parent list={listData} />
    </>
  );
}

export default Tree;