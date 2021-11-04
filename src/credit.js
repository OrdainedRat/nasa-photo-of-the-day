import React from "react";

export default function Copyright(props) {

    const {copy} = props;

    return (
        <div className='copyright' style={{textAlign: 'center'}}>
            <p>Image Copyright: {copy}</p>
        </div> 
  
    )

}


