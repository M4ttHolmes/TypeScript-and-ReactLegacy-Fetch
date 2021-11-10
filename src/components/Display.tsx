import React from "react";

type ApiState = {
    lat: number,
    long: number,
    city: string,
    temp: number,
    weather: string,
    icon: string,
}

const Display = (props: ApiState) => {
    console.log(props);
    return(
        <div>
            {props.lat === 0 && props.long === 0 ? (
                <div style={{marginTop: "50px"}}>
                    <p>Click the button to begin...</p><br/>
                    <p>It may take a few seconds to pinpoint your location.</p> <br />

                </div>
            ) : (
                    <div style={{}}>
                        <div style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    width: "50%",
                                    height: "auto",
                                    marginTop: "50px",
                                    marginLeft: "auto",
                                    marginRight: "auto",
                                    backgroundColor: "darkgrey",
                                    border: "1px solid black"
                                }}>
                            <h1>Location: {props.city}</h1>
                            <p>
                                Lat: {props.lat} <br/>
                                Long: {props.long}
                            </p>
                            <img src={`http://openweathermap.org/img/w/${props.icon}.png`} alt="weather" 
                                style={{
                                    width: "75px", 
                                    height: "75px", 
                                    margin: "auto",
                                }} />
                            <h3>{Math.round(props.temp)}°F - {props.weather}</h3>
                        </div>
                    </div>
            )        
            }

        </div>
    )
}

export default Display;