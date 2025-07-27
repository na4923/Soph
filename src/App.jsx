import { useState } from 'react';
import { FaArrowUp, FaArrowDown } from "react-icons/fa";
import './App.css';

function FlashCard() {
  return (
    <div className="w-1/3 h-full bg-orange-50 shadow-lg rounded-lg flex flex-col justify-center text-center p-6">
      <h1 className="font-sans text-neutral-800">
        This Will Be the Title
      </h1>
      <p className="font-sans text-neutral-800">
        And this is where the wisdom will be.
      </p>
    </div>
  );
}

function ArrowButton({ direction = "up", onClick }) {
  const Icon = direction === "up" ? FaArrowUp : FaArrowDown;

  return (
    <button onClick={onClick} className="text-2xl text-blue-500 hover:text-blue-700">
      <Icon />
    </button>
  );
}

export default function MyApp() {
  const [count, setCount] = useState(0);

  return (
    <div className="h-screen w-screen p-0 bg-orange-50 flex justify-center items-center relative">
      <FlashCard />

      <div className="fixed right-4 top-1/2 transform -translate-y-1/2 flex flex-col space-y-2">
        <ArrowButton direction="up" onClick={() => setCount(count + 1)} />
        <ArrowButton direction="down" onClick={() => setCount(count - 1)} />
      </div>
    </div>
  );
}
