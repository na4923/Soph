import { useState } from 'react';
import { motion , AnimatePresence, usePresenceData } from "motion/react"
import { FaArrowUp, FaArrowDown } from "react-icons/fa";
import logo from './logo.png';
import './App.css';

function SearchBar() {
  return(
    <textarea
          placeholder="How many hearts do octopi have?"
          className="p-2 rounded border border-yellow-600 shadow-sm bg-yellow-600"
    />
  )
}

function Feedback() {
  return(
    <textarea
          placeholder="I like marine biology, but don't use big words."
          className="p-2 rounded border border-yellow-600 shadow-sm h-24 bg-yellow-600"
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
        How do you like my facts?
      </p>
      <Feedback />
    </div>
  )
}

function FlashCard({ content }) {
  const direction = usePresenceData();
  return (
    <motion.div
      initial={{ y: direction * 750}}
      animate={{ y: 0 }}
      exit={{ y: -direction * 750}}
      transition={{ duration: 0.1 }}
      className="absolute w-[40vw] h-[95vh] bg-orange-50 shadow-lg rounded-lg flex flex-col justify-center text-center p-6"
    >
      <h1 className="font-['Playfair_Display'] text-yellow-900 mb-4">{content.title}</h1>
      <p className="font-['Fira_Sans'] text-neutral-800 text-lg">{content.body}</p>
    </motion.div>
  )
}

function ArrowButton({ direction = "up", onClick }) {
  const Icon = direction === "up" ? FaArrowUp : FaArrowDown;

  return (
    <button onClick={onClick} className="text-2xl text-teal-800 hover:border-teal-800 shadow-sm">
      <Icon />
    </button>
  );
}

export default function MyApp() {
  const [cards, setCards] = useState([
    { title: "This Will Be the Title", body: "And this is where the wisdom will be." }
  ]); 
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  function nextCard() {
    setDirection(1);
    if (index === cards.length - 1) {
      const newCard = {
        title: `Fact #${cards.length + 1}`,
        body: "Here is another fun fact to enjoy!"
      };
      setCards([...cards, newCard]);
    }
    setIndex((prev) => Math.min(prev + 1, cards.length));
  }

  function prevCard() {
    setDirection(-1);
    setIndex((prev) => Math.max(prev - 1, 0));
  }

    const getFact = async () => {
    try {
      const response = await fetch("http://localhost:3001/api/fact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          feedback: allFeedback
        }),
      });

      const data = await response.json();
      setFact(data.fact);
    } catch (err) {
      console.error(err);
      setFact("Oops! Could not fetch a fact.");
    }
  };

  return (
    <div className="h-screen w-screen p-0 bg-stone-400 flex items-center justify-center relative">
      <img 
        src={logo}
        alt="Soph" 
        className="absolute top-4 left-4 w-28 h-28 object-contain shadow-sm"
      />
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[20vw]">
        <TextFields />
      </div>
      <AnimatePresence mode="wait" custom={direction}>
        <FlashCard key={index} content={cards[index]} />
      </AnimatePresence>
      <div className="fixed right-4 top-1/2 transform -translate-y-1/2 flex flex-col space-y-2">
        <ArrowButton direction="up" onClick={prevCard} />
        <ArrowButton direction="down" onClick={nextCard} />
      </div>
    </div>
  );
}
