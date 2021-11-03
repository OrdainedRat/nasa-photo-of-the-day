import React from "react";

export default function Copyright(props) {

    const {copy} = props;

    return (
        <div className='copyright'>
            <p>Image Copyright: <a target='_blank' href='https://astronomy-imaging-camera.com/astrobio/astrophotographers-story-wissam-ayoub.html'>{copy}</a></p>
        </div> 
  
    )

}


