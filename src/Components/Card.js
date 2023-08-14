import { useState } from "react"
import './Trip.css'

function Card({id,image,price,name,info,removeHandler}){
   

    const[showmore,setShowmore]=useState(false)
    let description=showmore ? info : `${info.substring(0,200)}.... `

    function showmoreHandler(){
        setShowmore(!showmore)
    }


    return(
        <div className="card"> 
            <img src={image} alt="" className="image" />
            <div className="tour_info">
            <div className="tour_details">    
                <h4 className="tour_price">{price}</h4>
                <h4 className="tour_name">{name}</h4>   
            </div>

            <div className="discn">
                {description}
                <span onClick={showmoreHandler}>
                    {showmore ?'....showless':'readmore'}
                    </span>
            </div>
            </div>
                <button  className="btn1" onClick={()=>removeHandler(id)}>Not Interested</button>
            
        </div>

    )
}

export default Card