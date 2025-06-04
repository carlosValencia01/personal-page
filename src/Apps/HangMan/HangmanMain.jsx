import './style.css';
import { languages } from './languages';
import { useState } from 'react';


export const HangmanMain = () => {
    const [currentWord, setCurrentWord] = useState('react');

    const alphabet = 'abcdefghijklmnopqrstuvwxyz';

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
                {languages.map(language => (
                    <span style={{backgroundColor: language.backgroundColor, color:language.color}} key={language.name}>{language.name}</span>
                ))}
            </section>
            <section className='hangman-word-container'>
                {
                    currentWord.split("").map((letter, i)=>(
                        <span key={i}>{letter}</span>
                    ))
                }
            </section>
            <section className='hangman-keyboard-container'>
                {
                    alphabet.split("").map((letter) => (
                        <button key={letter}>{letter}</button>
                    ))
                }
            </section>
            <button className='hangman-newgame-button'>New Game</button>
        </div>
    )
}