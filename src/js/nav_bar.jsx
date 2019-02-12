import React from 'react';

export default class NavBar extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-content" aria-controls="navbar-content" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div  className="navbar-collapse collapse" id="navbar-content">
          <ul className="navbar-nav ">
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
          <form className="ml-auto form-inline">
            <select className="form-control" onChange={(e) => this.props.langOnChange(e.target.value)}>
              <option value="en">English</option>
              <option value="pt-BR">Português</option>
            </select>
          </form>
        </div>
      </nav>
    );
  }
}
