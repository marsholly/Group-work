import React from 'react';
import { ajax } from 'jquery'; //only importing a part of jquery

const Weather = React.createClass({
  render() {
    if (this.props.weather) {
      let city = this.props.city.replace("_", " ");
      return (
        <div className="weather-condition">
          <h2>{city}, {this.props.stateCountry}</h2>
          <div className="row">
            <div className="col-md-6">
              <h4>{this.props.weather.current_observation.weather}</h4>
              <h5>{this.props.weather.current_observation.temperature_string}</h5>
            </div>
            <div className="col-md-6">
              <img src={this.props.weather.current_observation.icon_url} className="weather-icon"/>
            </div>
          </div>
        </div>
      )
    } else {
      return (
        <div className="weather-condition">
          <h1>Enter City</h1>
        </div>
      )
    }
    }
  })

export default Weather;
