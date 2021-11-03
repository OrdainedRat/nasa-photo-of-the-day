import "./App.css";
import React, {useEffect, useState} from "react";
import { dailyPic, API_KEY} from './API';
import axios from 'axios';
import Image from "./image";

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
  console.log('this is ittttt', dayImage.hdurl)
  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
    <div className='title'> 
      <h1>{dayImage.title}</h1>
    </div>
      {<Image img={dayImage.hdurl}/>}

    </div>
  );
}

export default App;
