import { useState } from 'react';
import { motion , AnimatePresence, usePresenceData } from "motion/react"
import { FaArrowUp, FaArrowDown } from "react-icons/fa";
import logo from './logo.png';
import './App.css';

function SideBar() {
  return(
    <div className="w-1/4 h-screen flex flex-col space-y-8">
      <img src={logo} alt="Logo" className="w-32 h-32"/>
      <TextFields />
    </div>
  )
}

function TextFields() {
  return(
    <div className="flex flex-col space-y-4">
      <p>
        Ask me a question
      </p>
      <SearchBar />
      <p>
        How do you like my facts?
      </p>
      <Feedback />
    </div>
  )
}

function SearchBar() {
  return(
    <textarea
          placeholder="How many hearts do octopi have?"
          className="p-2 rounded border shadow-sm"
    />
  )
}

function Feedback() {
  return(
    <textarea
          placeholder="I like marine biology, but don't use big words."
          className="p-2 rounded border shadow-sm h-24"
    />
  )
}

function FlashCard({ props }) {
  let title = "title"; //TODO: add API calls
  let body = "body";
  return (
    <div className="absolute w-[40vw] h-[95vh] bg-color-boxes shadow-lg rounded-lg flex flex-col space-y-10 text-left p-6" >
      <h1>{title}</h1>
      <p>{body}</p>
    </div>
  )
}

function ArrowButtons() {
  return (
    <div className="flex flex-col space-y-10 place-items-center">
      <button onClick={onClick} className="button"> //TODO: add onClick functionality
        <FaArrowUp />
      </button>
      <button onClick={onClick} className="button"> //TODO: add onClick functionality
        <FaArrowDown />
      </button>
    </div>
  );
}

export default function App() {

  const [cardIndex, setCardIndex] = useState(0);

  return () => {
      <div className="bg-color-background min-h-screen flex flex-row space-x-10 p-4">
        <SideBar />
        <FlashCard index={cardIndex} />
        <ArrowButtons />
      </div>
  }
}
