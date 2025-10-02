import React, { useState } from 'react';
import CrosswordContainer from './CrosswordContainer';
import SidePanel from './SidePanel';

const GameContainer = ({ restartCrossword }) => {
  const [crosswordKey, setCrosswordKey] = useState(0);

  const handleRestart = () => {
    restartCrossword();
    setCrosswordKey(prevKey => prevKey + 1);
  };

  return (
    <div>
      <h1 className="text-4xl font-bold text-center mb-2 text-purple-400">Play the Puzzle</h1>
      <p className="text-center text-gray-400 mb-8">Fill in the words based on the references below.</p>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 flex justify-center items-start">
          <CrosswordContainer key={crosswordKey} />
        </div>
        <div className="lg:col-span-1">
          <SidePanel handleRestart={handleRestart} />
        </div>
      </div>
    </div>
  );
};

export default GameContainer;