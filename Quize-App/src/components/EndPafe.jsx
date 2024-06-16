import React, { useContext } from 'react'
import { QuizContext } from "../helpers/Contexts"
import '../App.css'
import { Quistions } from '../helpers/QuistionsBanks'


const EndPafe = () => {

  const { score , setScore , setGameState } = useContext(QuizContext);

  const restartGame = () => {
    setScore(0);
    setGameState('menu');
  }

  return (
    <div className='endpage'>
       <h1>Quiz Finished</h1>
       <h3>
        {score} / {Quistions.length}
       </h3>

       <button onClick={restartGame}> Restart the game </button>
    </div>
  )
}

export default EndPafe