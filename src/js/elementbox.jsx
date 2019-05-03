import React from 'react';

export default class ElementBox extends React.Component {
  constructor(props) {
    super(props);

    this.onPointerOver = this.onPointerOver.bind(this);
    this.onPointerDown = this.onPointerDown.bind(this);
    this.onPointerEnterIsotope = this.onPointerEnterIsotope.bind(this);
    this.closeIsotopes = this.closeIsotopes.bind(this);
  }

  onPointerEnterIsotope(e) {
    let el = e.currentTarget;
    el.classList.add('selected');
  }

  onPointerLeaveIsotope(e) {
    let el = e.currentTarget;
    el.classList.remove('selected'); 
  }

  onPointerOver(e) {
    let id = e.currentTarget.getAttribute('data-key');
    this.props.setHovered(id);
  }

  onPointerDown(e) {
    e.stopPropagation();
    e.persist();

    let id = e.currentTarget.getAttribute('data-key');
    if(!this.props.selected || (this.props.elem.id != id)) {
      this.props.setSelected(id);
      this.props.setHovered(this.props.elem.id);
    } else {
      if(id == this.props.elem.id) {
        this.props.setSelected();
        this.props.setHovered();
      }
    }
    
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

  closeIsotopes(e) {
    e.stopPropagation();
    this.props.setHovered();
  }

  _showFlags(section) {
    if(this.props.show_flags.hasOwnProperty(section))
      if(this.props.show_flags[section]) return 'show';

    return '';
  }

  render() {
    let _lang = this.props.lang;
    
    let classes = [
      this.props.elem.id,
      this.props.elem.type,
      'element',
      (this.props.selected ? 'selected' : ''),
      (this.props.hover ? 'active' : ''),
    ].concat(this.props.elem.classList).join(' ');
   
    let elem = this.props.elem;
    let state = elem.stateAtTemp(this.props.curr_temp);

    return (
      <li className={classes} 
        data-key={elem.id}
        data-type={elem.type}
        onPointerOver={this.onPointerOver}
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
          <span className="name">{ elem.getName(_lang) }</span>
          <span className={`symbol ${state}`}>{ elem.symbol }</span>
          <span className="atomic_number">{ elem.atomic_number }</span>
        </span>

        <span className={`isotopes ${this._showFlags('isotopes')}`}>
          <span className="name">{ elem.getName(_lang) }</span>
          <span className={`symbol ${state}`}>{ elem.symbol }</span>
          <span className="atomic_number">{ elem.atomic_number }</span>
        </span>
      </li>
    );
  }
}
