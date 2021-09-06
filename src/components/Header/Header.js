import React from 'react'
import './Header.css'
import { FaChevronLeft,FaChevronRight } from "react-icons/fa";


const Header=()=>{
    return(
        <div className="div">
                <div className='divStrel'>
                    <p><FaChevronLeft className="strel"/></p>
                    <p><FaChevronRight className="strel"/></p>
                </div>
                <div className="txt">
                    <h2>JUNE 2020</h2>
                </div>
                
        </div>
    )
}
export default Header