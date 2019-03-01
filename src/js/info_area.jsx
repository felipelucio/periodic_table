import React from 'react'

export default class InfoArea extends React.Component {
   _showFlags(section) {
    if(this.props.showFlags.hasOwnProperty(section))
      if(this.props.showFlags[section]) return 'show';

    return '';
  }

  render() {
    let lang = this.props.lang;
    let elem = this.props.element;

    if(!elem) return (<li className="info_area"></li>);
    
    return (
      <li className={`info_area`}> 
        <span className={`basic ${this._showFlags('basic')}`}>
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
