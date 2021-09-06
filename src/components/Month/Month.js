import React from 'react'
import './Month.css'
import Zametka from "../Zametka/Zametka"
const Month=()=>{
            const [list,setlist]=React.useState([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30])
            const [zam,setZam]=React.useState([1,3,7])
    return(
        <div className="month">
                 <div className="mainn">
        <div>SUN</div>
        <div>MON</div>
        <div>TUE</div>
        <div>WED</div>
        <div>THU</div>
        <div>FRE</div>
        <div>SAT</div>
        {list.map((index) => {

            if(zam.includes(index)){
                return (
                <div><span className="wrap">{index}</span>
                <Zametka color={"gray"}/>
                </div>
            )}
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

export default Month