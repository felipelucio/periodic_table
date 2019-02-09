import React from 'react';

export default class NavBar extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <a className="nav-link" href="#">Basic</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Eletronic</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Isotopes</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Radius</a>
          </li>
        </ul>
      </nav>
    );
  }
}
