import './App.css'
import { useState } from 'react'
import words from './wordList.json'
import { HangmanDrawing } from './components/HangmanDrawing';
import { HangmanWord } from './components/HangmanWord';
import { Keyboard } from './components/Keyboard';

function App() {
  const [word, setWord] = useState(() => {
    return words[Math.floor(Math.random() * words.length)]
  });

  const [guessedLetters, setGussedLetters] = useState<string[]>([])
  const incorrectGuesses = guessedLetters.filter(letter => !word.includes(letter))
  
  return (
    <div className='mainContainer'>
      <div className='topic-section'>
        wid
      </div>
      <HangmanDrawing numberOfGuesses={incorrectGuesses.length} />
      <HangmanWord guessedLetters = {guessedLetters} wordToGuess = {word}/>
      <Keyboard />
    </div>
  )
}

export default App
