import React from 'react';
import { ajax } from 'jquery'; //only importing a part of jquery
/*
const OtherPokemon = React.createClass({
  ...
})
*/

const Input = React.createClass({
  getInitialState() {
    return {
      id: ""
    }
  },
  componentDidMount() {
    let url = 'http://swapi.co/api/people/1';

    let request = new Request(url, {
      method: 'POST'
    })

    fetch(request) //fetch uses native JavaScript promises
      .then(res => res.json()) //basically does a JSON parse and returns a promise after
      .then(data => { //Cade says will eventually replace AJAX
        console.log('data: ', data);
      })
      .catch(err => {
        console.log('err: ', err);
      })
  },
  onInputChange(event) {
    this.setState({id: event.target.value});
  },
  selectPerson() {
    this.props.setPerson(this.state.id)
  },
  render() {
    return (
      <div>
        <input type="number" onChange={this.onInputChange}/>
        <button onClick={this.selectPerson}>Set Person</button>
      </div>
    )
  }
})

const Swapi = React.createClass({
  getInitialState() {
    return {
      person: null
    }
  },
  setPerson(id) {
    ajax(`http://swapi.co/api/people/${id}`)
      .done(person => {
        this.setState({ person })
      })
      .fail(err => {
        console.log('err: ', err);
      })
  },
  clear() {
    this.setState({person: null});
  },
  render() {

    if (this.state.person) {
      let {name, height, mass} = this.state.person; //destructuring to get shit out of API call

      return (
        <div>
        <h1>I'm the Swapi Page!</h1>
        <h3>Name: {name}</h3>
        <h3>Height: {height}</h3>
        <h3>Mass: {mass}</h3>
        <button onClick={this.clear}>Clear</button>
        </div>
      )
    } else {
      return (
        <Input setPerson={this.setPerson}/>
      )
    }
  }
})

//export { OtherPokemon } //To export alternate components
export default Swapi;
