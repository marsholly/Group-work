import React from 'react';
import { ajax } from 'jquery'; //only importing a part of jquery

const Weather = React.createClass({
  getInitialState() {
    return {
      weather: null
    }
  },
  clear() {
    this.setState({weather: null});
  },
  setWeather() {
    console.log(this.props.city);
    console.log(this.props.state);
    ajax("http://api.wunderground.com/api/2ca5db5b449f0cb2/conditions/q/" + this.props.state + "/" + this.props.city + ".json")
      .done(weather => {
        console.log(weather);
        this.setState({ weather: weather.current_observation.temperature_string });
      })
      .fail(err => {
        console.log('err: ', err);
      })
  },
  render() {
    if (this.state.weather) {
      return (
        <div>
        <h1>I'm the weather page!</h1>
        <h3>{this.state.weather}</h3>
        <button onClick={this.clear}>Clear</button>
        </div>
      )
    } else {
      return (
        <button onClick={this.setWeather}>Set Weather</button>
      )
    }
    }
  })

export default Weather;
