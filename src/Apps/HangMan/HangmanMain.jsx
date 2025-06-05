import './style.css';
import { languages } from './languages';
import { useEffect, useState } from 'react';
import clsx from 'clsx';
import { getFarewellText, getRandomWord } from './utils';
import ReactConfetti from 'react-confetti';
import { useWindowSize } from 'react-use';


export const HangmanMain = () => {
    //State Values
    const [currentWord, setCurrentWord] = useState(()=> getRandomWord());
    const [guessedLettersArray, setGuessedLettersArray] = useState([]);

    const [farewellElement, setFarewellElement] = useState(null);

    //Derived values
    let wrongGuessCount = guessedLettersArray.filter(letter => !currentWord.includes(letter)).length;
    // let isGameWon = currentWord.split("").filter(letter => !guessedLettersArray.includes(letter)).length == 0;
    let isGameWon = currentWord.split("").every(letter => guessedLettersArray.includes(letter));
    let isGameLost = (wrongGuessCount === languages.length-1);
    let isGameOver = isGameLost || isGameWon;
    const { width, height } = useWindowSize();

    //Static values
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';

    useEffect(() => {
      if(wrongGuessCount > 0 && !isGameOver){
        setFarewellElement(
            <section className='hangman-status-section-farewell'>
                <p>{getFarewellText(languages[wrongGuessCount-1].name)}</p>
            </section>
        );
      }    
    }, [wrongGuessCount])
    

    function handleGuess(letter){
        setGuessedLettersArray(prev => 
            prev.includes(letter)
            ? prev
            : [...prev, letter]);

    }

    function handleNewGame(){
        setCurrentWord(getRandomWord());
        setGuessedLettersArray([]);
        setFarewellElement(null)
    }

    function displayLetters(){
        const lettersElements = [];

        currentWord.split("").map((letter, i)=>{                                                
            if(isGameOver){
                //show all letters
                //lettersElements.push(<span key={i}>{guessedLettersArray.includes(letter) ? letter : ''}</span>);
                if(guessedLettersArray.includes(letter)){
                    lettersElements.push(<span key={i}>{letter}</span>);
                }else{
                    lettersElements.push(<span key={i} className='hangman-letter-lost'>{letter}</span>)
                }
            }else{
                //only show guessed letters
                lettersElements.push(<span key={i}>{guessedLettersArray.includes(letter) ? letter : ''}</span>);
            }                        
                                });



        return lettersElements;
    }

    return (
        <div className="hangman-body">
            {isGameWon && <ReactConfetti width={width} height={height}/>}
            <header className='hangman-header'>
                <h1>Assembly: Endgame</h1>
                <p>Guess the word within 8 attempts to keep the program world safe from Assembly!</p>
            </header>
            <div className="hangman-status-container">
                {
                    (farewellElement !== null && !isGameOver) &&
                    farewellElement
                }
                {  isGameWon &&
                    <section className='hangman-status-section-won'>
                        <h2>You win!</h2>
                        <p>Well done!</p>
                    </section>
                }

                {   isGameLost &&
                    <section className='hangman-status-section-lost'>
                        <h2>You Lost!</h2>
                        <p>You better start learning assembly!!!</p>
                    </section>
                }
            </div>
            <section className='hangman-languge-container'>
                {languages.map((language,i) => (
                    <span 
                        style={{backgroundColor: language.backgroundColor, color:language.color}} 
                        key={language.name}
                        className={i < wrongGuessCount ? 'lost':''}
                        >{language.name}</span>
                ))}
            </section>
            <section className='hangman-word-container'>
                {
                    displayLetters()
                }
            </section>
            <section className='hangman-keyboard-container'>
                {
                    alphabet.split("").map((letter) => {
                        const isGuessed = guessedLettersArray.includes(letter);
                        const isCorrect = isGuessed && currentWord.split("").includes(letter);
                        const isWrong = isGuessed && !currentWord.split("").includes(letter);
                        const className = clsx({
                            correct: isCorrect,
                            wrong: isWrong
                        });
                        return(
                            <button 
                                className={className}
                                key={letter} 
                                onClick={()=>handleGuess(letter)}
                                disabled={isGameOver}
                                >{letter}</button>
                        )
                    }
                )
                }
            </section>
            
                <div className="hangman-newgame-button-container">
                    {isGameOver && 
                        <button onClick={handleNewGame} className='hangman-newgame-button'>New Game</button>
                    }
                </div>
        </div>
    )
}