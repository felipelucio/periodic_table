import React from 'react';

export default class ElementBox extends React.Component {
  constructor(props) {
    super(props);

    this.onPointerOver = this.onPointerOver.bind(this);
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

  onPointerOver(e) {
    let id = e.currentTarget.getAttribute('data-key');
    this.props.setHovered(id);
  }

  onPointerDown(e) {
    e.stopPropagation();
    e.persist();

    let id = e.currentTarget.getAttribute('data-key');
    this.props.setSelected(id);
    
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

    // create the isotopes boxes
    let isotopes = [];
    let count = 0;
    for(let id in elem.isotopes) {
      let iso = elem.isotopes[id];

      isotopes.push(
        <span className={`isotope order_${count}`} key={id}
          data-key={`${elem.id}[${id}]`}
          onPointerDown={this.onPointerDown}
        >
          <p>{iso.getName(_lang)}</p>
          <p>{iso.getDecayModes().join(', ')}</p>
        </span>
      );
      count++;
    }

    // set the isotopes box orientation
    let isotopes_pos_x = 'right';
    if(elem.group > 9 || 
        (elem.atomic_number > 63 && elem.atomic_number <= 71) ||
        (elem.atomic_number > 95 && elem.atomic_number <= 103) 
    )
      isotopes_pos_x = 'left';

    let isotopes_pos_y = 'bottom';
    if(elem.type == 'lanthanoid' || elem.type == 'actinoid')
      isotopes_pos_y = 'top';
    
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
          <span className="symbol">{ elem.symbol }</span>
          <span className="atomic_number">{ elem.atomic_number }</span>
        </span>

        <span className={`isotopes ${this._showFlags('isotopes')}`}>
          <span className="name">{ elem.getName(_lang) }</span>
          <span className="symbol">{ elem.symbol }</span>
          <span className="atomic_number">{ elem.atomic_number }</span>
          { (elem.id != 'lanthanoids' || elem.id != 'actinoids') && 
            <div className={`isotopes-container ${isotopes_pos_x} ${isotopes_pos_y}`}>
              {isotopes}
            </div>
          }
        </span>
      </li>
    );
  }
}
