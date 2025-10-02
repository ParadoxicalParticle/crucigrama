import React, { useContext, useEffect } from 'react';
import { updateContent, translation } from '../scripts/language-handler';
import { AppContext } from '../AppProvider';

const Navbar = () => {
  const { lang, setLang } = useContext(AppContext);

  useEffect(() => {
    localStorage.setItem('language', lang);
    updateContent(translation[lang]);
  }, [lang]);

  return (
    <header className="bg-gray-800 shadow-md">
      <nav className="container mx-auto px-4 py-3 flex justify-between items-center">
        <a href="/" className="flex items-center space-x-2 text-xl font-bold text-gray-100">
          <img src="/images/icons8-crossword-64.png" alt="Crossword Icon" className="w-10 h-10" />
          <span>Crucigrama | Crossword Puzzle</span>
        </a>
        <div className="flex space-x-2">
          <button
            onClick={() => setLang('es')}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${lang === 'es' ? 'bg-purple-600 text-white' : 'bg-gray-700 hover:bg-gray-600 text-gray-300'}`}
          >
            Spanish
          </button>
          <button
            onClick={() => setLang('en')}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${lang === 'en' ? 'bg-purple-600 text-white' : 'bg-gray-700 hover:bg-gray-600 text-gray-300'}`}
          >
            English
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;