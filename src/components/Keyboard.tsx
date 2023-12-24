import styles from "../css/Keyboard.module.css"

export function Keyboard(){
    const keys = 'abcdefghijklmnopqrstuvwxyz'.split("")
    return(
        <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(75px,1fr))",
            gap: ".5rem",
            alignSelf: "stretch"
            }}>
{keys.map(key => {
    return <button className={`${styles.btn} ${styles.active}`} 
    key={key}>{key}</button>
})}
    </div>
    )
}