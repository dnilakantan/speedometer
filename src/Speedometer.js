import React from 'react';

// import the component
//import Toggle from "react-toggle-component"
//import "react-toggle-component/styles.css"

//import ReactSpeedometer from "react-d3-speedometer";
//import * as d3 from 'd3';

class Speedometer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            speed: -1,
            accuracy: 0,
            unitkmh: false,
            getoStatusOk: false,
            lat: 0,
            longi: 0,
        };
        this.forceRender = false;
    }
    
    componentDidMount() {

        if (navigator.geolocation) {
            console.log("navigator.geolocation is available");
            navigator.geolocation.watchPosition(
                (p) => this._onPosition(p),
                (err) => this._onErrorPosition(err),
                { enableHighAccuracy: true, timeout: 1000, maximumAge: 0 }
            );
        }
    }

    render() {
        const speed = this._getSpeed();
        const forceRender = this.forceRender;
        this.forceRender = false;
        return (
            <div>
              <div>
                Accuracy: {this.state.accuracy} 
                <br/>
                Speed: {this.state.speed} 
                <br/>
                Lat: {this.state.lat}
                <br/>
                Long: {this.state.longi}
              </div>
            </div>
        )
    }


    _getSpeed() {
        let speed = this.state.speed;
        // if speed is null OR // if accuracy is not accurate
        if (speed == null) {
            return -1;
        }
        // speed is meter per second, convert kmh
        if (this.state.unitkmh) {
            speed *= 3.6;
        }

        return speed;
    }

    _onPosition(position) {
        console.log("set state " + position.coords.speed + " " + position.coords.accuracy);
        this.setState({
            speed: position.coords.speed,
            accuracy: position.coords.accuracy,
            geoStatusOk: true,
            lat: position.coords.latitude,
            longi: position.coords.longitude,
        });
    }

    _onErrorPosition(error) {
        console.log("error state {error}");
        this.setState({
            geoStatusOk: false,
        });
    }
}

export default Speedometer;