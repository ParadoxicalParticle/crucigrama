import { useContext } from 'react';
import { AppContext } from './AppProvider.jsx';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import GameContainer from './components/GameContainer.jsx';
import PersonalisedPuzzleContainer from './components/PersonalisedPuzzleContainer.jsx';
import ColorConfiguration from './components/ColorConfiguration.jsx';

function App() {
  const { setShowAnswers, colors } = useContext(AppContext);

  const restartCrossword = () => {
    setShowAnswers(false);
  };

  // The 'style={colors}' prop here applies the CSS variables globally
  return (
    <div className="min-h-screen flex flex-col" style={colors}>
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <GameContainer restartCrossword={restartCrossword} />
        <div className="my-12 border-t border-gray-700"></div>
        <PersonalisedPuzzleContainer />
      </main>
      <Footer />
      <ColorConfiguration />
    </div>
  );
}

export default App;