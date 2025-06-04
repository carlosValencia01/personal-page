import './style.css';
import { languages } from './languages';
import { useState } from 'react';
import clsx from 'clsx';


export const HangmanMain = () => {
    //State Values
    const [currentWord, setCurrentWord] = useState('javascript');
    const [guessedLettersArray, setGuessedLettersArray] = useState([]);

    //Derived values
    let wrongGuessCount = guessedLettersArray.filter(letter => !currentWord.includes(letter)).length;

    //Static values
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';

    function handleGuess(letter){
        setGuessedLettersArray(prev => 
            prev.includes(letter)
            ? prev
            : [...prev, letter]);

    }

    return (
        <div className="hangman-body">
            <header className='hangman-header'>
                <h1>Assembly: Endgame</h1>
                <p>Guess the word within 8 attempts to keep the program world safe from Assembly!</p>
            </header>
            <section className='hangman-status-section'>
                <h2>You win!</h2>
                <p>Well done!</p>
            </section>
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
                    currentWord.split("").map((letter, i)=>{                                                
                        return <span  
                                key={i}                                
                                >
                            {guessedLettersArray.includes(letter) ? letter : ''}</span>
                    })
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
                                onClick={()=>handleGuess(letter)}>{letter}</button>
                        )
                    }
                )
                }
            </section>
            <button className='hangman-newgame-button'>New Game</button>
        </div>
    )
}