import React from "react";

const Display = (props: any) => {
    console.log(props);
    return(
        <div>
            <h1>Lat: {props.lat}</h1>
            <h1>Long: {props.long}</h1>
            <h1>City: {props.city}</h1>
            <h1>Temp: {props.temp}</h1>
            <h1>Weather: {props.weather}</h1>
        </div>
    )
}

export default Display;