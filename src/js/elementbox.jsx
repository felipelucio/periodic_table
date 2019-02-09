import React from 'react';

export default class ElementBox extends React.Component {
  constructor(props) {
    super(props);

    this.toggleActive = this.toggleActive.bind(this);
  }

  // return state at given temperature (in Kelvin)
  stateAtTemp(temp) {
    if (temp < this.fusion_temp) return 'state-solid';
    if (temp < this.boiling_temp) return 'state-liquid';
    return 'state-gas';
  }

  toggleActive(e) {
    let el = e.target;

    el.classList.toggle('active');
  }

  render() {
    let classes = [
      this.props.elem.id,
      this.props.elem.type
    ].concat(this.props.elem.classList).join(' ');
    
    return (
      <li className={classes} onPointerEnter={this.toggleActive}
        onPointerLeave={this.toggleActive}
      >
        { this.props.elem.symbol }
      </li>
    );
  }
}
