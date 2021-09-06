import React from 'react'
import './Navbar.css'

const Navbar=()=>{
    return(
        <div class="navbar">
            <p>Dashboard</p>
            <p className="calendar">Calendar</p>
            <p >Hotels</p>
            <p>My events</p>
            <p>Notes</p>
            <p >Messages
                <span>5</span>
            </p>
            <p>My account</p>
        </div>
    )
}
export default Navbar