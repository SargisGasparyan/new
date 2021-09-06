import React from 'react'
import './MenuCalendar.css'

const MenuCal=({onchangeContent})=>{
    return(
        <div className="menuCal">
            <ul>
                <li onClick={()=>onchangeContent("month")}><a href="#" >Month</a></li>
                <li onClick={()=>onchangeContent("week")} className="li"><a href="#">Week</a></li>
                <li className="li"><a href="#">Day</a></li>
            </ul>
        </div>
    )
}
export default MenuCal