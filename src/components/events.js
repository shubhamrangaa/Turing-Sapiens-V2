import React from 'react'
import '../styles/events.scss'


function Events(props){
    return(
        <section id="Events">
            <header data-aos="fade-up">
                <h2>Upcoming Events</h2>  
                <p>Join us in our journey by Participating in Engaging Events!</p>
            </header>
            <div class="event-cards">
                <article class="eventInfo"  data-aos="fade-right">
                    <figure>
                        <img src={props.img} alt="Webinar Speaker" />
                    </figure>
                    <h3 style={{fontSize : "1.6rem"}}>{props.heading}</h3>
                    <h3 class="date">{props.date}</h3>
                </article>
            </div>
        </section>
    )
}

export default Events