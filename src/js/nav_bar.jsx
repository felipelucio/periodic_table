import React from 'react';

export default class NavBar extends React.Component {
  render() {
    let flags = this.props.show_flags;
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-content" aria-controls="navbar-content" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div  className="navbar-collapse collapse" id="navbar-content">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className={`nav-link ${flags.basic ? 'active' : ''}`} 
                href="#basic" onClick={this.props.showHandler}
              >Basic</a>
            </li>
            <li className="nav-item">
              <a className={`nav-link ${flags.electronic ? 'active' : ''}`} 
                href="#electronic" onClick={this.props.showHandler}
              >Electronic</a>
            </li>
            <li className="nav-item">
              <a className={`nav-link ${flags.isotopes ? 'active' : ''}`} 
                href="#isotopes" onClick={this.props.showHandler}
              >Isotopes</a>
            </li>
            <li className="nav-item">
              <a className={`nav-link ${flags.radius ? 'active' : ''}`} 
                href="#radius" onClick={this.props.showHandler}
              >Radius</a>
            </li>
          </ul>
          <form className="ml-auto form-inline">
            <input className="temperature" value={this.props.temperature} onChange={this.props.changeTemperature} />
            <select className="form-control" 
              value={this.props.curr_lang}
              onChange={(e) => this.props.langOnChange(e.target.value)}
            >
              <option value="en">English</option>
              <option value="pt-BR">Português (Brasil)</option>
            </select>
          </form>
        </div>
      </nav>
    );
  }
}
