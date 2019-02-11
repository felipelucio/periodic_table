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

  onPointerEnter(e) {
    if (this.props.onPointerEnter) {
      let id = e.currentTarget.getAttribute('data-key');
      let type = e.currentTarget.getAttribute('data-type');
      this.props.onPointerEnter(id, type, e);
    } 
  }

  onPointerLeave(e) {
    if (this.props.onPointerLeave) {
      let id = e.currentTarget.getAttribute('data-key');
      let type = e.currentTarget.getAttribute('data-type');
      this.props.onPointerLeave(id, type, e);
    } 
  }

  getName() {
    let lang = this.props.lang || 'en';
    if(this.props.elem.name.hasOwnProperty(lang))
      return this.props.elem.name[lang];

    return this.props.elem.name['en'];
  }

  render() {
    let classes = [
      this.props.elem.id,
      this.props.elem.type,
      'element'
    ].concat(this.props.elem.classList).join(' ');
   
   let elem = this.props.elem;
    return (
      <li className={classes} 
        data-key={elem.id}
        data-type={elem.type}
        onPointerEnter={(e) => this.onPointerEnter(e)}
        onPointerLeave={(e) => this.onPointerLeave(e)}
      >
        <span className="name">{ this.getName() }</span>
        <span className="symbol">{ elem.symbol }</span>
        <span className="atomic_number">{ elem.atomic_number }</span>
        <span className="weight">{ elem.weight }</span>
        <span className="electrons hide">
          <p>{ elem.electrons[0] }</p>
          <p>{ elem.electrons[1] }</p>
          <p>{ elem.electrons[2] }</p>
          <p>{ elem.electrons[3] }</p>
          <p>{ elem.electrons[4] }</p>
          <p>{ elem.electrons[5] }</p>
          <p>{ elem.electrons[6] }</p>
        </span>
      </li>
    );
  }
}
