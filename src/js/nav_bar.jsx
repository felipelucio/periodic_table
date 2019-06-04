import React from 'react';
import {convert_temperature} from './utils';
import {strings} from './l10n';

export default class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      shown_temperature: convert_temperature(props.temperature, 'kelvin', props.temperature_scale)
    }

    this.strings = strings;
    this.changeTemperature = this.changeTemperature.bind(this);
  }

  changeTemperature(e) {
    e.preventDefault();
    let form = e.target.form;
    let temp = form.temperature.value * 1;
    let new_scale = form.temperature_scale.value;

    this.setState(function(state, props) {
      let shown_temp = convert_temperature(temp, this.props.temperature_scale, new_scale);
      let kelvin_temp = convert_temperature(shown_temp, new_scale, 'kelvin');
      this.props.setTemperature(kelvin_temp, new_scale);

      return {
        shown_temperature: shown_temp
      }
    });
  }

  render() {
    let flags = this.props.show_flags;
    
    this.strings.setLanguage(this.props.curr_lang);
    let strings = this.strings;

    return (
      <nav id="navigation" className="navbar navbar-expand-lg navbar-dark bg-dark position-fixed">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-content" aria-controls="navbar-content" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div  className="navbar-collapse collapse" id="navbar-content">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className={`nav-link ${flags.basic ? 'active' : ''}`} 
                href="#basic" onClick={this.props.showHandler}
              >{strings.getString('basic')}</a>
            </li>
            <li className="nav-item">
              <a className={`nav-link ${flags.electronic ? 'active' : ''}`} 
                href="#electronic" onClick={this.props.showHandler}
              >{strings.getString('electronic')}</a>
            </li>
            <li className="nav-item">
              <a className={`nav-link ${flags.isotopes ? 'active' : ''}`} 
                href="#isotopes" onClick={this.props.showHandler}
              >{strings.getString('isotopes')}</a>
            </li>
            <li className="nav-item">
              <a className={`nav-link ${flags.radius ? 'active' : ''}`} 
                href="#radius" onClick={this.props.showHandler}
              >{strings.getString('radius')}</a>
            </li>
          </ul>
          <form className="ml-auto form-inline" onSubmit={(e) => {e.preventDefault(); return false;}}>
            <span className="input-group mr-sm-2 mb-xs-2 mb-md-0 col">
              <input type="number" name="temperature" className="form-control temperature_input"
                value={this.state.shown_temperature} onChange={this.changeTemperature} />

              <span className="input-group-append">
                <select name="temperature_scale" className="temperature_scale custom-select" 
                  defaultValue={this.props.temperature_scale} onChange={this.changeTemperature}
                >
                  <option value="kelvin">K</option>
                  <option value="celsius">°C</option>
                  <option value="fahrenheit">°F</option>
                </select>
              </span>
            </span>
            
            <span className="input-group col">
              <div className="input-group-prepend">
                <span className="input-group-text">{strings.getString('language')}</span>
              </div>
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
