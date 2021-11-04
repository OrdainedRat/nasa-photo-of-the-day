import React from "react";
import styled from "styled-components";

const StyledText = styled.div`
    .text-box{
      margin:10px 0 ;
      font-size: 1.5rem;
      display: flex;
      flex-direction: column;
      align-items: center;
  } 
    p{
        width: 80%;
    } 
    .filler{
        margin-top: 100px;
    }
`




export default function Text(props) {
    const {message} = props;

    return (
        <StyledText>
            <div className='text-box'>
                <h2>
                     Today's Wonderful Image
                </h2>
                <p>
                    {message}
                </p>
            </div>
            <div className='filler'>

            </div>
        </StyledText>


    )

}
