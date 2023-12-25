import styles from "../css/Keyboard.module.css"
type KeyboardProps = {
    activeLetters: string[]
    inactiveLetters: string[]
    addGuestLetter: (letter: string) => void
    disabled?: boolean 
}


export function Keyboard( props : KeyboardProps){

    const keys = 'abcdefghijklmnopqrstuvwxyz'.split("")
    return(
        <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(75px,1fr))",
            gap: ".5rem",
            alignSelf: "stretch"
            }}>

{keys.map(key => {
    const isActive = props.activeLetters.includes(key)
    const isInactive = props.inactiveLetters.includes(key)
    return <button onClick={() => props.addGuestLetter(key)} className={`${styles.btn} ${isActive ? styles.active : ""} ${isInactive ? styles.inactive : ""}`} 
    disabled={props.disabled}
    key={key}>{key}</button>
})}
    </div>
    )
}