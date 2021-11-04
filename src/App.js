
import React, {useEffect, useState} from "react";
import { dailyPic, API_KEY} from './API';
import axios from 'axios';
import styled from "styled-components";
import Image from "./image";
import Text from "./text";

const StyledApp = styled.div`
  .wrapper, body{
    height: 100%;
    text-align: center;
    color: white;
    
  }
  h1{
    padding: 0;
    font-size: 3rem;
  }

`

function App() {
  const [dayImage, setDayImage] = useState([])

  useEffect(() => {
    axios.get(`${dailyPic}?api_key=${API_KEY}`)
    .then(res => {
      console.log(res.data);
      setDayImage(res.data)
      })
    .catch(err => {
      console.log('this is the error',err);
    })
  }, [])
  
  
  return (
  <StyledApp>
    <div className='wrapper'>  
    <div className='title'> 
      <h1>{dayImage.title}</h1>
    </div>
   {<Image img={dayImage.hdurl} copy={dayImage} />}
  {<Text message={dayImage.explanation}/>}
  </div>
  </StyledApp>
  );
}

export default App;
