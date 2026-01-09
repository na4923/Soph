import { FaArrowUp, FaArrowDown } from "react-icons/fa";

function ArrowButtons() { //TODO: add onClick functionality
  return (
    <div className="flex flex-col space-y-10 items-end">
      <button className="btn"> 
        <FaArrowUp />
      </button>
      <button className="btn">
        <FaArrowDown />
      </button>
    </div>
  );
}

export default ArrowButtons;