import React from "react";
import "./Contact.css"

export default function Contacts(props) {
    console.log(props)
    return (
        <div className="contacts">
            <img src={props.img} alt="cats-contact-card" className="card-image" />
            <h3>{props.name}</h3>
            <div className="infor-group">
                <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="1rem" viewBox="0 0 24 24"><path fill="black" d="M18.93 20q-2.528 0-5.184-1.266q-2.656-1.267-4.944-3.555q-2.27-2.289-3.536-4.935Q4 7.598 4 5.07q0-.45.3-.76T5.05 4h2.473q.408 0 .712.257t.411.658L9.142 7.3q.07.42-.025.733q-.094.313-.332.513L6.59 10.592q.616 1.118 1.361 2.076q.745.959 1.59 1.817q.87.87 1.874 1.62q1.004.749 2.204 1.414l2.139-2.177q.244-.263.549-.347q.305-.083.674-.033l2.104.43q.407.1.661.41q.254.311.254.713v2.435q0 .45-.31.75t-.76.3"></path></svg>
                <p>{props.phone}</p>
            </div>
            <div className="infor-group">
                <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="1rem" viewBox="0 0 24 24"><path fill="black" d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 4l-8 5l-8-5V6l8 5l8-5z"></path></svg>
                <p>{props.email}</p>

            </div>
        </div>
        
    )
}



