import { DeadMan } from "./DeadMan"
import { Man } from "./Man"
import { Rope } from "./Rope"

export function HangmanDrawing() {
    return <div className='hangman-drawing'>
        <Rope />
        <DeadMan />

        <div style={{
            height : "10px",
            width : "180px",
            background : "black",
            marginLeft : "120px"
        }}></div>
        
        <div style={{
            height : "400px",
            width : "10px",
            background : "black",
            marginLeft : "120px"
        }}></div>

        <div style={{
            height : "10px",
            width : "250px",
            background : "black"
        }}></div>
        </div>
}