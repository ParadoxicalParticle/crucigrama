import React, { useContext, useState } from 'react';
import { AppContext } from '../AppProvider';

const PersonalisedPuzzleForm = ({ vwordInput }) => {
  const { setVword, setRefs, setAnswers } = useContext(AppContext);
  const [inputAnswers, setInputAnswers] = useState(Array(vwordInput.length).fill(''));
  const [inputRefs, setInputRefs] = useState(Array(vwordInput.length).fill(''));

  const generateCustomCrossword = () => {
    setVword(vwordInput);
    setRefs(inputRefs);
    setAnswers(inputAnswers);
    alert('Custom crossword generated!');
  };

  return (
    <div className="space-y-3 mt-6">
      {vwordInput.split('').map((char, i) => (
        <div key={i} className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <input type="text"
            className="w-full bg-gray-700 border border-gray-600 text-white rounded-md p-2 focus:ring-2 focus:ring-purple-500 focus:outline-none"
            placeholder={`Word containing '${char}' (answer #${i + 1})`}
            value={inputAnswers[i]}
            onChange={(e) => {
              const newAnswers = [...inputAnswers]; newAnswers[i] = e.target.value; setInputAnswers(newAnswers);
            }}/>
          <input type="text"
            className="w-full bg-gray-700 border border-gray-600 text-white rounded-md p-2 focus:ring-2 focus:ring-purple-500 focus:outline-none"
            placeholder={`Reference for word #${i + 1}`}
            value={inputRefs[i]}
            onChange={(e) => {
              const newRefs = [...inputRefs]; newRefs[i] = e.target.value; setInputRefs(newRefs);
            }}/>
        </div>
      ))}
      <div className="flex justify-end pt-4">
        <button
          onClick={generateCustomCrossword}
          className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-6 rounded transition-colors"
          data-i18n="generate_button"
        >
          Generate Crossword
        </button>
      </div>
    </div>
  );
};

const PersonalisedPuzzleContainer = () => {
    const { vword } = useContext(AppContext);
    const [vwordInput, setVwordInput] = useState(vword.toUpperCase());
    const [isFormVisible, setIsFormVisible] = useState(false);

    const handleGenerateForm = () => {
        if (vwordInput) setIsFormVisible(true);
        else alert('Please enter a vertical word to start.');
    };

    return (
        <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-center mb-2 text-purple-400" data-i18n="personalized_puzzle_title">
                Create a Custom Puzzle
            </h2>
            <p className="text-center text-gray-400 mb-6" data-i18n="personalized_puzzle_message">
                Enter a vertical word to begin creating your own crossword.
            </p>
            <div className="max-w-xl mx-auto">
                <div className="flex gap-4">
                    <input type="text"
                        className="flex-grow bg-gray-700 border border-gray-600 text-white rounded-md p-2 focus:ring-2 focus:ring-purple-500 focus:outline-none"
                        placeholder="Vertical Word (e.g., FREUD)"
                        value={vwordInput}
                        onChange={(e) => setVwordInput(e.target.value.toUpperCase())}/>
                    <button
                        onClick={handleGenerateForm}
                        className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-6 rounded transition-colors"
                        data-i18n="start_button">
                        Start!
                    </button>
                </div>
            </div>
            {isFormVisible && <PersonalisedPuzzleForm key={vwordInput} vwordInput={vwordInput} />}
        </div>
    );
};

export default PersonalisedPuzzleContainer;