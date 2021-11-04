import React, {useEffect, useState} from "react";
import Copyright from "./credit";
import { dailyPic, API_KEY} from './API';
import axios from 'axios';
import styled from "styled-components";

const StyledImage = styled.div`
    img{
        width: 68%;
    }

`


export default function Image(props) {
   
    const {img, copy} = props; 

 return(
        <div className='total-container'>
            <StyledImage>
                <img src={img} alt="Image of the Day"/> 
            </StyledImage>
          <Copyright copy={copy.copyright}/>
         </div>
    )

}

//Emergency Axios

  // useEffect(() => {
    //     axios.get(`${dailyPic}?api_key=${API_KEY}`)
    //     .then(res => {
    //       console.log(res.data);
    //       setImgData(res.data)
         
    //     })
    //     .catch(err => {
    //       console.log('this is the error',err);
    //     })
    // }, [])

      // const [imgData, setImgData] = useState([])