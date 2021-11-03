import React from "react";


export default function Text(props) {
    const {message} = props;

    return (
        <div>
            <h2>
                Today's Wonderful Image
            </h2>
            <p>
                {message}
            </p>
        </div>


    )

}
