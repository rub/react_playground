import React from 'react';
import NavLink from './NavLink';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>React Router tutorial</h1>
        <ul role="nav">
          <li><NavLink to="/" onlyActiveOnIndex={true}>Home</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/repos">Repos</NavLink></li>
        </ul>
        { this.props.children  || <Home /> }
      </div>
    )
  }
}

export default App;