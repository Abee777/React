import React from "react";

export default function Die(props){

    const styles={
        backgroundColor: props.isHeld ? "#59E391" : "white"
    }
    return (
        <div className="dice" onClick={props.hold} style={styles}>
            <h2 className="number">{props.value}</h2>
        </div>
    )
}