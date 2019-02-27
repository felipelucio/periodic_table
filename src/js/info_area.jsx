import React from 'react'

export default class InfoArea extends React.Component {
   _showFlags(section) {
    if(this.props.showFlags.hasOwnProperty(section))
      if(this.props.showFlags[section]) return 'show';

    return '';
  }

  render() {
    let elem = this.props.element;

    return (
      <li className="info_area"> 
      {elem && 
        <span className={`basic ${this._showFlags('basic')}`}>
          <p>{elem.symbol}</p>
        </span>
      }
      </li>
    );
  }
}
