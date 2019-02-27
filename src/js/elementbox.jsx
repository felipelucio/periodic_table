import React from 'react';

export default class ElementBox extends React.Component {
  constructor(props) {
    super(props);

    this.onPointerEnter = this.onPointerEnter.bind(this);
    this.onPointerLeave = this.onPointerLeave.bind(this);
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

  _showFlags(section) {
    if(this.props.showFlags.hasOwnProperty(section))
      if(this.props.showFlags[section]) return 'show';

    return '';
  }

  render() {
    let _lang = this.props.lang;
    let show_flags = this.props.showFlags;
    let classes = [
      this.props.elem.id,
      this.props.elem.type,
      Object.keys(show_flags).filter(function(e) {
        if(show_flags[e]) return true;
      }),
      'element'
    ].concat(this.props.elem.classList).join(' ');
   
    let elem = this.props.elem;
    let state = elem.stateAtTemp(this.props.curr_temp);

    let isotopes = [];
    let count = 0;
    for(let id in elem.isotopes) {
      let iso = elem.isotopes[id];
      isotopes.push(
        <span className={`isotope order-${count}`} key={id}
          data-key={`${elem.id}[${id}]`}
          onPointerEnter={(e) => this.onPointerEnter(e)}
          onPointerLeave={(e) => this.onPointerLeave(e)}
          onPointerDown={this.props.showElementPage}
        >
          {iso.getName(_lang)}
        </span>
      );
      count++;
    }
   
    return (
      <li className={classes} 
        data-key={elem.id}
        data-type={elem.type}
        onPointerEnter={(e) => this.onPointerEnter(e)}
        onPointerLeave={(e) => this.onPointerLeave(e)}
        onPointerDown={this.props.showElementPage}
      >
        <span className={`basic ${this._showFlags('basic')}`}>
          <span className="name">{ elem.getName(_lang) }</span>
          <span className={`symbol ${state}`}>{ elem.symbol }</span>
          <span className="atomic_number">{ elem.atomic_number }</span>
          <span className="weight small">{ elem.getWeight(3) }</span>
          <span className="weight big">
            {elem.weight && elem.weight.hasOwnProperty('conventional') &&
              <p>{`[${elem.weight.standard[0]},${elem.weight.standard[1]}]`}</p>
            }
            <p>{ elem.getWeight(false) }</p>
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

        <span className={`electronic ${this._showFlags('electronic')}`}>
          <span className="symbol">{ elem.symbol }</span>
          <span className="atomic_number">{ elem.atomic_number }</span>
          { (elem.id == 'lanthanoids' || elem.id == 'actinoids') && 
            <span className="name">{ elem.getName(_lang) }</span>
          }
        </span>

        <span className={`isotopes ${this._showFlags('isotopes')}`}>
          {isotopes}
          { (elem.id == 'lanthanoids' || elem.id == 'actinoids') && 
            <span className="name">{ elem.getName(_lang) }</span>
          }
        </span>
      </li>
    );
  }
}
