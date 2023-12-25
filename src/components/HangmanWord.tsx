type HangmanWordProps = {
    guessedLetters: string[]
    wordToGuess: string
    reveal: boolean
}

export function HangmanWord(props : HangmanWordProps){
    const word = props.wordToGuess
    const guessedLetters = props.guessedLetters
    return <div style={{
        display: "flex",
        gap: ".25em",
        fontSize: "6rem",
        fontWeight: "bold",
        textTransform: "uppercase",
        fontFamily: "monospace"
    }}>
        {word.split("").map((letter, index) => (
            <span style={{borderBottom : ".1em solid black" }} key = {index}>
                <span style={{ visibility : guessedLetters.includes(letter) || props.reveal ? "visible" : "hidden", 
            color : !guessedLetters.includes(letter) && props.reveal ? "red" : "black"}}>
                    {letter}
                </span>
            </span>
            
        ))}

        </div>
}