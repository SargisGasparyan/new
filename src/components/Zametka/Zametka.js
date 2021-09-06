import React from 'react'
import "./Zametka.css"
const Zametka=({color})=>{
    return(
        <div className="zam" style={{backgroundColor: `${color}`}}>
            <div className="top">
            <img src="https://pix10.agoda.net/hotelImages/50965/-1/15e8fd101fe6a744c3a2fb7b5e092587.jpg?s=1024x768"/>
            <p>Hilton Hotel</p>
            </div>
            
            <p>08:00 <span>Lorem Ispumc dolar imte amda solud</span></p>
            <div className="bottom">
            <p>Mike John</p>
            <img src="https://pix10.agoda.net/hotelImages/50965/-1/15e8fd101fe6a744c3a2fb7b5e092587.jpg?s=1024x768"/>
            </div>
        </div>
    )
}
export default Zametka