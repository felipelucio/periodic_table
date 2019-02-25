import React from 'react';

export default class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }

  

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
          <form className="ml-auto form-inline" onSubmit={(e) => {e.preventDefault(); return false;}}>
            <span className="input-group mr-sm-2 mb-xs-2 mb-md-0">
              <input type="number" className="form-control temperature_input"
                value={this.props.temperature} onChange={this.props.changeTemperature} />

              <span className="input-group-btn">
                <select className="temperature_scale btn" defaultValue={this.props.temperature_scale}>
                  <option value="kelvin">K</option>
                  <option value="celsius">°C</option>
                  <option value="farenheit">°F</option>
                </select>
              </span>
            </span>
            
            <span className="input-group">
              <select className="form-control" value={this.props.curr_lang}
                onChange={(e) => this.props.langOnChange(e.target.value)}
              >
                <option value="en">English</option>
                <option value="pt-BR">Português (Brasil)</option>
              </select>
            </span>
          </form>
        </div>
      </nav>
    );
  }
}
