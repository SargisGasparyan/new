import React from 'react'
import './Week.css'
import Zametka from "../Zametka/Zametka"

const Week=()=>{
    const [list,setlist]=React.useState([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30])
    const [zametkaWeek,setzametkaWeek]=React.useState([1,5])

    return(
        <div className="week">
           <div className="mainnWeek">
        <div>01 Jun</div>
        <div>02 Jun</div>
        <div>03 Jun</div>
        <div>04 Jun</div>
        <div>05 Jun</div>
        <div>06 Jun</div>
        <div>07 Jun</div>
        {list.map((index) => {
            if(zametkaWeek.includes(index)){
                return(
                    <div><span className="wrap">{index}</span>
        <Zametka color={"gray"}/>
        </div>
                )
            }
           return (
               <div >
                   <span className="wrap">{index+2}</span> 
               </div>
           )
       })}
    </div>
        </div>
    )
}

export default Week