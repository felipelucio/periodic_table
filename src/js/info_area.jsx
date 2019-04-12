import React from 'react'
import {strings} from './l10n';

export default class InfoArea extends React.Component {
  constructor(props) {
    super(props);

    this.onPointerDown = this.onPointerDown.bind(this);
    this.strings = strings;
  }

  onPointerDown(e) {
    this.props.setHovered();
  }

   _showFlags(section) {
    if(this.props.show_flags.hasOwnProperty(section))
      if(this.props.show_flags[section]) return 'show';

    return '';
  }

  render() {
    let lang = this.props.lang;
    let elem = this.props.element;
    this.strings.setLanguage(this.props.curr_lang);
    let strings = this.strings;

    // DEFAULT INFO AREA
    if(!elem) {
      return (
        <li className="info_area">
          <span className={`info-container basic show`}>
            <span className={`elementbox  nonmetal`}>
              <span className="symbol">{strings.getString('symbol')}</span>
              <span className="name">{strings.getString('name')}</span>
              <span className="atomic_number">Z</span>
              <span className="weight">
                <div>[{strings.getString('weight_range')}]</div>
                <div>({strings.getString('weight_stable')})</div>
                <div>{strings.getString('weight_conventional')}</div>
              </span>
              <span className="electrons">
                <p>K</p>
                <p>L</p>
                <p>M</p>
                <p>N</p>
                <p>O</p>
                <p>P</p>
                <p>Q</p>
              </span>
            </span>
            <span className="info">
            </span>
          </span>
        </li>
      );
    }
    
    return (
      <li className={`info_area`} onPointerDown={this.onPointerDown}> 
        <span className={`info-container basic ${this._showFlags('basic')}`}>
          <span className={`elementbox  ${elem.type}`}>
            <span className="symbol">{elem.symbol}</span>
            <span className="name">{elem.getName(lang)}</span>
            <span className="atomic_number">{elem.atomic_number}</span>
            <span className="weight">
              {elem.weight && elem.weight.hasOwnProperty('conventional') &&
                <div>{`[${elem.weight.standard[0]},${elem.weight.standard[1]}]`}</div>
              }
              <div>{elem.getWeight(false)}</div>
            </span>
            <span className="electrons">
                <p>{ elem.electrons[0] }</p>
                <p>{ elem.electrons[1] }</p>
                <p>{ elem.electrons[2] }</p>
                <p>{ elem.electrons[3] }</p>
                <p>{ elem.electrons[4] }</p>
                <p>{ elem.electrons[5] }</p>
                <p>{ elem.electrons[6] }</p>
              </span>
          </span>
          <span className="info">
            <span className="item">
              <b>{strings.getString('radius')}:</b>
              <span className="value">{elem.radius}</span>
            </span>
            <span className="item">
              <b>{strings.getString('boiling_point')}:</b>
              <span className="value">{elem.boiling_point} K</span>
            </span>
            <span className="item">
              <b>{strings.getString('melting_point')}:</b>
              <span className="value">{elem.melting_point} K</span>
            </span>
          </span>
        </span>
        
        <span className={`info-container isotopes ${this._showFlags('isotopes')}`}>
          <span className={`elementbox  ${elem.type}`}>
            <span className="symbol">{elem.symbol}</span>
            <span className="name">{elem.getName(lang)}</span>
            <span className="atomic_number">{elem.atomic_number}</span>
            <span className="weight">
              {elem.weight && elem.weight.hasOwnProperty('conventional') &&
                <div>{`[${elem.weight.standard[0]},${elem.weight.standard[1]}]`}</div>
              }
              <div>{elem.getWeight(false)}</div>
            </span>
          </span>
          <span className="info">
            <span className="">blablabalbal</span>
            <span className="">blablabalbal</span>
            <span className="">blablabalbal</span>
            <span className="">blablabalbal</span>
          </span>
        </span>
      </li>
    );
  }
}
