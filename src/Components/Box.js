import React from "react"
import App from "../App"


export default function Box(props){

    const styles= {
        backgroundColor: props.on ? "Black" : "White" 
    }


    return(
            <div style={styles} className="box" key={props.id} onClick={() => props.toggle(props.id)}></div>
    )

}