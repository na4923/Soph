import { FaArrowUp, FaArrowDown } from "react-icons/fa";

function ArrowButtons() { //TODO: add onClick functionality
  return (
    <div className="flex flex-col space-y-10 justify-self-right">
      <button className="button"> 
        <FaArrowUp />
      </button>
      <button className="button">
        <FaArrowDown />
      </button>
    </div>
  );
}

export default ArrowButtons;