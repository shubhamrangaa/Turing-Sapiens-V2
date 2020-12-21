import React from "react"
import '../styles/style.scss'
import '../styles/landing.scss'

const landingStyles = {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    
}

const Landing = function Landing(props) {
    return (
        <section id="landing" style={landingStyles}>
            <header>
            <h1>{props.name}</h1>
            <a className="join-us" href={props.address}>{props.prompt}</a>
            </header>
        </section>
    )
}

export default Landing


