import React from 'react';

export default class ElementBox extends React.Component {

  // return state at given temperature (in Kelvin)
  stateAtTemp(temp) {
    if (temp < this.fusion_temp) return 'state-solid';
    if (temp < this.boiling_temp) return 'state-liquid';
    return 'state-gas';
  }

  render() {
    let classes = [
      this.props.elem.symbol,
      this.props.elem.type
    ].join(' ');
    return (
      <li className={classes}>
        { this.props.elem.symbol }
      </li>
    );
  }
}
