import { useState } from 'react';
import { FaArrowUp, FaArrowDown } from "react-icons/fa";
import logo from './logo.png';
import './App.css';

function SearchBar() {
  return(
    <textarea
          placeholder="How many hearts do octopi have?"
          className="p-2 rounded border border-yellow-600 shadow-sm bg-teal-800"
    />
  )
}

function Feedback() {
  return(
    <textarea
          placeholder="Don't waste time use lot word. Few word do trick!"
          className="p-2 rounded border border-yellow-600 shadow-sm h-24 bg-teal-800"
    />
  )
}

function TextFields() {
  return(
    <div className="flex flex-col justify-left text-center p-6">
      <p>
        Ask me a question
      </p>
      <SearchBar />
      <p>
        Don't like my facts?
      </p>
      <Feedback />
    </div>
  )
}

function FlashCard() {
  return (
    <div className="w-[40vw] h-[98vh] bg-orange-50 shadow-lg rounded-lg flex flex-col justify-center text-center p-6">
      <h1 className="font-['Playfair_Display'] text-yellow-900">
        This Will Be the Title
      </h1>
      <p className="font-['Fira_Sans'] text-neutral-800">
        And this is where the wisdom will be.
      </p>
    </div>
  )
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
    <div className="h-screen w-screen p-0 bg-stone-400 flex items-center justify-center relative">
      <img 
        src={logo}
        alt="Soph" 
        className="absolute top-4 left-4 w-20 h-20 object-contain"
      />
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[20vw]">
        <TextFields />
      </div>
      <FlashCard />
      <div className="fixed right-4 top-1/2 transform -translate-y-1/2 flex flex-col space-y-2">
        <ArrowButton direction="up" onClick={() => setCount(count + 1)} />
        <ArrowButton direction="down" onClick={() => setCount(count - 1)} />
      </div>
    </div>
  );
}
