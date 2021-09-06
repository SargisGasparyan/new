import React from 'react'
import './Main.css'
import Header from "../Header/Header"
import MenuCal from "../MenuCalendar/MenuCalendar"
import Month from '../Month/Month'
import Week from '../Week/Week'

const Main=()=>{
    const [page,setPage]=React.useState(null)

    const renderMenu = () => {
        switch (page) {
            case "month":
                return <Month/>
            case 'week':
                return <Week/>
                default:
                    return <Month/>
        
        }
    }
    const changeState=(text)=>{
        setPage(text)
    }
    return(
        <div className="main">
            <Header/>
            <MenuCal onchangeContent={changeState}/>
            {renderMenu()}
            
            
        </div>
    )
}

export default Main