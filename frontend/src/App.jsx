import { useState } from 'react';

import SideBar from './components/SideBar.jsx';
import FlashCard from './components/FlashCard.jsx';
import ArrowButtons from './components/ArrowButtons.jsx';
import './index.css';

function App() {
  return (
    <div className="bg-parchment w-screen h-screen flex flex-row items-center space-x-10 p-4">
      <SideBar />
      <FlashCard /*index={cardIndex}*/ />
      <ArrowButtons />
    </div>
  );
}

export default App;