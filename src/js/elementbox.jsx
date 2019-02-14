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

  _showFlags(section) {
    if(this.props.showFlags.hasOwnProperty(section))
      if(this.props.showFlags[section]) return 'show';

    return '';
  }

  _precision(a) {
    let e = 1;
    while (Math.round(a * e) / e !== a) e *= 10;
    return Math.log(e) / Math.LN10;
  }

  getWeight(precision=3) {
    if(!this.props.elem.hasOwnProperty('weight')) return false;

    let weights = this.props.elem.weight;
    
    if(weights.hasOwnProperty('most_stable')) {
      return `(${weights.most_stable})`;
    } else { 
      if(weights.hasOwnProperty('conventional')) {
        return weights.conventional;
      } else {
        if(Array.isArray(weights.standard)) {
          return `[${weights.standard[0]}, ${weights.standard[1]}]`;
        }
      }
    }

    
    if(!precision || (this._precision(weights.standard) < precision)) {
      let str = weights.standard.toString();
      let last_digit = str[str.length - 1];
      return `${str.substr(0, str.length - 1)}(${last_digit})`;
    } else {
      let num = weights.standard.toFixed(precision);
      let str = num.toString();
      let last_digit = str[str.length - 1];
      return `${str.substr(0, str.length - 1)}`;
    }
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
        <span className="basic" className={this._showFlags('basic')}>
          <span className="name">{ this.getName() }</span>
          <span className="symbol">{ elem.symbol }</span>
          <span className="atomic_number">{ elem.atomic_number }</span>
          <span className="weight small">{ this.getWeight(3) }</span>
          <span className="weight big">
            {elem.weight && elem.weight.hasOwnProperty('conventional') &&
              <p>{`[${elem.weight.standard[0]},${elem.weight.standard[1]}]`}</p>
            }
            <p>{ this.getWeight(false) }</p>
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

        <span className="electronic" className={this._showFlags('electronic')}>
          <span className="symbol">{ elem.symbol }</span>
          <span className="atomic_number">{ elem.atomic_number }</span>
        </span>
      </li>
    );
  }
}
