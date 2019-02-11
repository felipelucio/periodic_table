import React from 'react';

export default class ElementBox extends React.Component {
  constructor(props) {
    super(props);

    this.onPointerEnter = this.onPointerEnter.bind(this);
    this.onPointerLeave = this.onPointerLeave.bind(this);
  }

  // return state at given temperature (in Kelvin)
  stateAtTemp(temp) {
    if (temp < this.fusion_temp) return 'state-solid';
    if (temp < this.boiling_temp) return 'state-liquid';
    return 'state-gas';
  }

  toggleActive(e) {
    let el = e.currentTarget;
    el.classList.toggle('active');
  }

  onPointerEnter(e) {
    if (this.props.onPointerEnter) {
      let type = e.currentTarget.getAttribute('data-type');
      console.log(type)
      this.props.onPointerEnter(type);
    } 
    this.toggleActive(e);
  }

  onPointerLeave(e) {
    if (this.props.onPointerLeave) {
      let type = e.currentTarget.getAttribute('data-type');
      this.props.onPointerLeave(type);
    } 
    this.toggleActive(e);
  }

  render() {
    let classes = [
      this.props.elem.id,
      this.props.elem.type,
      'element'
    ].concat(this.props.elem.classList).join(' ');

    let type = this.props.elem.type;
    
    return (
      <li className={classes} 
        data-type={type}
        onPointerEnter={(e) => this.onPointerEnter(e)}
        onPointerLeave={(e) => this.onPointerLeave(e)}
      >
        <span className="name">{ this.props.elem.name['en'] }</span>
        <span className="symbol">{ this.props.elem.symbol }</span>
        <span className="atomic_number">{ this.props.elem.atomic_number }</span>
        <span className="weight">{ this.props.elem.weight }</span>
      </li>
    );
  }
}
