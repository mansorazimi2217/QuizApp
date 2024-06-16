import React, {useState , useContext, useRef} from 'react'
import { Quistions } from '../helpers/QuistionsBanks';
import { QuizContext } from "../helpers/Contexts"

const Quize = () => {

  const { score , setScore , setGameState } = useContext(QuizContext);

  const [numberQuistion , setNumberQuistion] = useState(0)
  const [optionChosen , setOptionChosen] = useState("");
  
  const myRef = useRef();
  const myRef2 = useRef();
  const myRef3 = useRef();
  const myRef4 = useRef();
  
  const nextQuistion = () => {
    if(Quistions[numberQuistion].answer === optionChosen){
      setScore(score + 1)
    }

    const element1 = myRef.current;
    element1.style.color = 'black';

    const element2 = myRef2.current;
    element2.style.color = 'black';

    const element3 = myRef3.current;
    element3.style.color = 'black';

    const element4 = myRef4.current;
    element4.style.color = 'black';
    

    setNumberQuistion(numberQuistion + 1)
  }

  const finishedQuiz = () => {
      if(Quistions[numberQuistion].answer === optionChosen){
        setScore(score + 1)
      }

      setGameState('endPage');
  }

  return (
    <div className='quiz'>
       <h1>
        {Quistions[numberQuistion].quistion}
       </h1>
       <div className='options'>
          <button ref={myRef} onClick={() => {
            setOptionChosen('A')
             const element = myRef.current;
             element.style.color = 'green';
          }}>
            {Quistions[numberQuistion].A}
          </button>
          <button ref={myRef2} onClick={() => {
            const element = myRef2.current;
            element.style.color = 'green';
            setOptionChosen('B')
          }}>
            {Quistions[numberQuistion].B}
          </button>
          <button ref={myRef3} onClick={() => {
            setOptionChosen('C')
            const element = myRef3.current;
            element.style.color = 'green';
          }}>
            {Quistions[numberQuistion].C}
          </button>
          <button ref={myRef4} onClick={()=> {
            setOptionChosen('D')
            const element = myRef4.current;
            element.style.color = 'green';
          }}>
            {Quistions[numberQuistion].D}
          </button>
       </div>

       {numberQuistion === Quistions.length - 1 ? (
         <button onClick={finishedQuiz}>Finished Quiz</button>
       ) : (
          <button onClick={nextQuistion}>Next Quistion</button>
       )}
      
    </div>
  )
}

export default Quize;