import React, {useEffect, useState} from "react";
import Copyright from "./credit";
import { dailyPic, API_KEY} from './API';
import axios from 'axios';


export default function Image(props) {
    const [imgData, setImgData] = useState([])
    const {img} = props; 

    useEffect(() => {
        axios.get(`${dailyPic}?api_key=${API_KEY}`)
        .then(res => {
          console.log(res.data);
          setImgData(res.data)
         
        })
        .catch(err => {
          console.log('this is the error',err);
        })
    }, [])
    
    return(
        <div className='total-container'>
            <div className='img-container'>
                <img src={img} alt="Image of the Day"/> 
            </div>
            <div>
            <Copyright copy={imgData.copyright}/>
            </div>
        </div>
    )

}