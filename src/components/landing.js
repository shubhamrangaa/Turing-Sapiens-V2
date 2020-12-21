import React from "react"
import '../styles/style.scss'
const landingStyles = {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    
}

const Landing = function Landing(props) {
    return (
        <section style={landingStyles}>
            <h1>{props.name}</h1>
            <button>{props.prompt}</button>
        </section>
    )
}

export default Landing


