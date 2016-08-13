import React from 'react';
import { Link } from 'react-router';

const App = React.createClass({
  componentDidMount() {
    console.log('this.props: ', this.props);
  },
  render() {
    return (
      <div>
        <Link to="/">
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

        {this.props.children}

      </div>
    )
  }
})

export default App;
