import {nanoid} from 'nanoid'
import { useWindowSize } from 'react-use'
import Confetti from 'react-confetti'
import { useEffect, useRef, useState } from 'react';
import { Die } from './Die';
import './style.css';


export const TenzieMain = () => {

    const [diceArray, setDiceArray] = useState(()=>generateAllNewDice());
    const { width, height } = useWindowSize()
    const buttonRef = useRef(null);

    const gameWon = diceArray.every(dice => dice.isHeld) &&  diceArray.every(dice => dice.value === diceArray[0].value);

    useEffect(() => {
      if(gameWon){
        buttonRef.current.focus();
      }
    }, [gameWon])
    

    function generateAllNewDice(){
        return new Array(10).fill(0).map(x=> (
            {
                // value: (Math.ceil(Math.random()*6)),
                value: 5,
                isHeld:false,
                id: nanoid()
            }
        ));
    }

    function handleRollDice(){
        if(!gameWon){
            setDiceArray(prev => (
                prev.map(x => ( x.isHeld 
                            ? x
                            : {...x , value : (Math.ceil(Math.random()*6))}
                )
                )
            ));
        }else{
            setDiceArray(generateAllNewDice());
        }
    }

    function hold(id){
        setDiceArray(prev => (
            prev.map(x => x.id===id? {...x, isHeld:!x.isHeld} : x)
        ))        
    }

    

    return (
        <main>
            {gameWon && <Confetti width={width} height={height}/>}
            <h2 className='title'>Tenzies</h2>
            <p className='instructions'>Roll until all dice are the same. Click each die to freezee it at current value between rolls.</p>
            <div className='die-container'>
                {diceArray.map(dice => (
                    <Die key={dice.id} value={dice.value} isHeld={dice.isHeld} hold={hold} id={dice.id}/>
                ))}               
            </div>
            <button ref={buttonRef} onClick={handleRollDice} className='button-roll'>{gameWon ? 'New Game' : 'Roll Dice'}</button>
        </main>
    )
}