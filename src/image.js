import React, {useEffect, useState} from "react";
import { dailyPic, API_KEY} from './API';
// import axios from 'axios';


export default function Image(props) {
    const {img} = props; 

    
    
    
    
    
    
    
    return(
        <div className='total-container'>
            <div className='img-container'>
                <img src={img} alt="Image of the Day"/> 
            </div>
           
        </div>
    )

}