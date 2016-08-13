import React from 'react';

const Bird = React.createClass({
  getInitialState() {
    return {
      name: this.props.params.name
    }
  },
  render() {
    return (
      <div>
        <h2>{this.state.name}</h2>
      </div>
    )
  }
})

export default Bird;
