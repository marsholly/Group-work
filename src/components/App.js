import React from 'react';
import { Link } from 'react-router';

import Weather from './Weather';

const App = React.createClass({
  getInitialState() {
    return {
      city: null,
      text : "",
      stateCountry: null,
    }
  },
  enterCity() {
    let newArr = this.state.text.split(/,\s*/);
    let strCity = newArr[0];
    let strState = newArr[1];
    strCity = strCity.replace(" ", "_");
    this.setState({city: strCity});
    this.setState({stateCountry: strState});
  },
  onInputChange(event) {
    this.setState({text: event.target.value});
  },
  componentDidMount() {
    console.log('this.props: ', this.props);
  },
  render() {
    return (
      <div className="container">
        <h1>Weather Seating</h1>
        <div className="container">
          <div className="jumbotron">
            <input type="text" onChange={this.onInputChange}/>
            <button onClick={this.enterCity}>City</button>
          </div>
        </div>
        <Weather city={this.state.city} state={this.state.stateCountry}/>


        {/*<Link to="/">
          <button>Home</button>
        </Link>

        <Link to="/about">
          <button>About</button>
        </Link>

        <Link to="/swapi/1">
          <button>Swapi</button>
        </Link>

        <Link to="/birds/EAGLE">
          <button>birds</button>
        </Link>

        {this.props.children}*/}

      </div>
    )
  }
})

export default App;
