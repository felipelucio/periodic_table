import React from 'react';

export default class ElementBox extends React.Component {
  constructor(props) {
    super(props);

    this.onPointerEnter = this.onPointerEnter.bind(this);
    this.onPointerLeave = this.onPointerLeave.bind(this);
    this.onPointerDown = this.onPointerDown.bind(this);
    this.onPointerEnterIsotope = this.onPointerEnterIsotope.bind(this);
  }

  onPointerEnterIsotope(e) {
    let el = e.currentTarget;
    el.classList.add('selected');
  }

  onPointerLeaveIsotope(e) {
    let el = e.currentTarget;
    el.classList.remove('selected'); 
  }

  onPointerEnter(e) {
    if (this.props.onPointerLeave) {
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

  onPointerDown(e) {
    e.preventDefault();
    e.stopPropagation();
    e.persist();

    let id = e.currentTarget.getAttribute('data-key');
    this.props.setActive(id);
    
    let that = this;
    let target = e.currentTarget;
    let hold = window.setTimeout(function() {
      that.props.showElementPage();
    }, 500);

    target.addEventListener('pointerup', function _pointer() {
      window.clearTimeout(hold);
      target.removeEventListener('pointerup', _pointer);
    });
    target.addEventListener('pointerleave', function _pointer() {
      window.clearTimeout(hold);
      target.removeEventListener('pointerleave', _pointer);
    })
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
        <span className={`isotope order_${count} ${iso.decay_mode}`} key={id}
          data-key={`${elem.id}[${id}]`}
          onPointerEnter={this.onPointerEnterIsotope}
          onPointerLeave={this.onPointerLeaveIsotope}
          onPointerDown={this.onPointerDown}
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
        onPointerEnter={this.onPointerEnter}
        onPointerLeave={this.onPointerLeave}
        onPointerDown={this.onPointerDown}
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
