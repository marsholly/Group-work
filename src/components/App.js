import React from 'react';
import { Link } from 'react-router';
import Weather from './Weather';
import Filters from './Filters';
import Results from './Results';
import { ajax } from 'jquery';

const App = React.createClass({
  getInitialState() {
    return {
      city: null,
      text : "",
      stateCountry: null,
      weather: null,
      gender: null,
      style: null
    }
  },
  setGender(gender) {
    if (gender === "male") {
      this.setState({gender: "male"});
    } else {
      this.setState({gender: "female"});
    }
  },
  setStyle(style) {
    if (style === "casual") {
      this.setState({style: "casual"});
    } else if (style === "formal") {
      this.setState({style: "formal"});
    } else {
      this.setState({style: "sporty"});
    }
  },
  enterCity() {
    let newArr = this.state.text.split(/,\s*/);
    let strCity = newArr[0];
    let strState = newArr[1];
    strCity = strCity.replace(" ", "_");
    this.setState({city: strCity, stateCountry: strState});

      ajax("http://api.wunderground.com/api/2ca5db5b449f0cb2/conditions/q/" + strState + "/" + strCity + ".json")
      .done(weather => {
        this.setState({ weather: weather });
      })
      .fail(err => {
        console.log('ERROR: ', err);
      })
  },
  onInputChange(event) {
    this.setState({text: event.target.value});
  },
  render() {
    return (
      <div>
        <div className="container">
          <h1>Weather Outfit of the Day</h1>
          <div className="row">
            <div className="jumbotron">
              <input type="text" onChange={this.onInputChange}/>
              <button className="btn btn-primary" onClick={this.enterCity}>Submit</button>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-3 left">
              <div className="weather">
                <Weather city={this.state.city} stateCountry={this.state.stateCountry} weather={this.state.weather}/>
              </div>
              <div className="filters">
                <Filters gender={this.setGender} style={this.setStyle} />
              </div>
            </div>
            <div className="col-md-9 right">
              <div className="results">
                <Results gender={this.state.gender} style={this.state.style} weather={this.state.weather}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
})

export default App;
