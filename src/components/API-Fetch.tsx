import React, { Component } from "react";
import Display from "./Display";

type ApiState = {
    lat: number,
    long: number,
    city: string,
    temp: number,
    weather: string
}

type AcceptedProps = {

}

export default class APIFetch extends Component<AcceptedProps, ApiState> {
    constructor(props: AcceptedProps) {
        super(props)
        this.state = {
            lat: 0,
            long: 0,
            city: "",
            temp: 0,
            weather: ""
        }
    }


    getLocation = () => {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                console.log(position);
                this.setState({
                    lat: position.coords.latitude,
                    long: position.coords.longitude,
                })
            this.getWeather();
            },
            function(error) {
                console.error("Error Code = " + error.code + " - " + error.message);
            }
        );
    }

    getWeather = () => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${this.state.lat}&lon=${this.state.long}&appid=49a9f688dda98bbf5b08e9dab96e0d10&units=imperial`)
            .then(response => response.json())
            .then(json => {
                console.log(json);
                this.setState({
                    temp: json.main.temp,
                    weather: json.weather[0].description,
                    city: json.name
                })
            })
            .catch(err => console.log(err))
    }

    render() {

        return(
            <div>
                <button onClick={this.getLocation}>Find Me</button>
                <Display lat={this.state.lat} long={this.state.long} city={this.state.city} temp={this.state.temp} weather={this.state.weather}/>
            </div>
        )
    }

}