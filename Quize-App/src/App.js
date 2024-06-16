import { useState , useContext } from 'react'
import MainMenu from './components/MainMenu'
import Quiz from './components/Quize'
import EndPage from './components/EndPafe'
import { QuizContext } from './helpers/Contexts'
import './App.css';

function App() {

  const [gameState , setGameState] = useState('menu');
  const [score , setScore] = useState(0);
  return (
    <div className="App">    
        <h1>Quize App</h1>

        <QuizContext.Provider value = {{ gameState , setGameState , score , setScore}}>
        { gameState === 'menu' && <MainMenu />}
        { gameState === 'quiz' && <Quiz />}
        { gameState === 'endPage' && <EndPage />}
        </QuizContext.Provider>
    </div>
  );
}

export default App;
