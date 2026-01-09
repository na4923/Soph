import { FaHeart, FaHeartBroken } from "react-icons/fa";

function LikeButtons() { //TODO: add onClick functionality
  return (
    <div className="basis-2/7 flex flex-col space-y-10 items-start">
      <button className="btn"> 
        <FaHeart />
      </button>
      <button className="btn">
        <FaHeartBroken />
      </button>
    </div>
  );
}

export default LikeButtons;