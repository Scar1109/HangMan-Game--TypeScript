import './App.css'
import { useCallback, useEffect, useState } from 'react'
import words from './wordList.json'
import { HangmanDrawing } from './components/HangmanDrawing';
import { HangmanWord } from './components/HangmanWord';
import { Keyboard } from './components/Keyboard';

function App() {
  const [word, setWord] = useState("");

  useEffect(() => {
    const randomWord = words[Math.floor(Math.random() * words.length)]
    setWord(randomWord)
  }, [])

  const [guessedLetters, setGuessedLetters] = useState<string[]>([])
  const incorrectGuesses = guessedLetters.filter(letter => !word.includes(letter))

  const isLoser = incorrectGuesses.length >= 6
  const isWinner = word.split('').every(letter => guessedLetters.includes(letter))
  const isPlaying = !isLoser && !isWinner


  const addGuessedLetter = useCallback((letter : string) => {
    if(guessedLetters.includes(letter) || isLoser || isWinner) return

    setGuessedLetters(currentLetters => [...currentLetters, letter])}, [guessedLetters, isLoser, isWinner])
  

  useEffect(() => {
    const handler = (event : KeyboardEvent) => {
      const key = event.key

      if(!key.match(/[a-z]/i)) return
      
      event.preventDefault()
      addGuessedLetter(key)
    }

    document.addEventListener('keydown', handler)

    return () => {
      document.removeEventListener('keydown', handler)
    }

  },[])
  
  return (
    <div className='mainContainer'>
      <div className='topic-section'>
        {isWinner && "You won! Refresh to play again"}
        {isLoser && "Nice Try! Refresh to play again"}
        {isPlaying && `Guess the word! You have ${6-incorrectGuesses.length} guesses`}

      </div>
      <HangmanDrawing numberOfGuesses={incorrectGuesses.length} />
      <HangmanWord reveal = {isLoser} guessedLetters = {guessedLetters} wordToGuess = {word}/>
      <Keyboard activeLetters = {guessedLetters.filter(letter => word.includes(letter))} 
        inactiveLetters = {incorrectGuesses}
        addGuestLetter = {addGuessedLetter} 
        disabled = {!isPlaying}/>
    </div>
  )
}

export default App
