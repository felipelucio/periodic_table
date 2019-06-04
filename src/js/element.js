import { convert_temperature } from './utils';

function _getName(obj, lang) {
  lang = lang || 'en';
  if(obj.name.hasOwnProperty(lang))
    return obj.name[lang];

  return obj.name['en'];
}

function _precision(a) {
  let e = 1;
  while (Math.round(a * e) / e !== a) e *= 10;
  return Math.log(e) / Math.LN10;
}

export class Element {
  constructor(data) {
    Object.assign(this, data);
  }

  getIsotope(id) {
    let iso = null;
    this.isotopes.forEach(item => { 
      if(item.id == id) iso = item;  
    });
    
    return iso;
  }

  getProp(path) {
    let levels = path.split('.');

    let curr = this;
    for(let i in levels) {
      if(curr && curr.hasOwnProperty(levels[i])) curr = curr[levels[i]];
      else return null;
    }

    return curr;
  }

  // return state at given temperature (in Kelvin)
  stateAtTemp(temp) {
    if(this.boiling_point != null && this.melting_point != null)
      if(temp < this.boiling_point && temp >= this.melting_point) return 'liquid';
    
    if(this.melting_point != null && temp < this.melting_point) return 'solid';
    if(this.boiling_point != null && temp >= this.boiling_point) return 'gas';

    return 'unknown';
  }

  getName(lang) {
    return _getName(this, lang);
  }

  getRadius(type='covalent') {
    if(this.radius)
      return this.radius[type];

    return false;
  }

  getWeight(precision=3) {
    if(!this.hasOwnProperty('weight')) return false;

    let weights = this.weight;
    
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

    
    if(!precision || (_precision(weights.standard) < precision)) {
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
};


export class Isotope {
  constructor(data, element) {
    Object.assign(this, data);
    this._element = element;
  }

  get symbol() {
    return this._element.symbol;
  }

  get atomic_number() {
    return this._element.atomic_number;
  }

  get element() {
    return this._element;
  }

  getName(lang) {
    return _getName(this, lang);
  }

  getWeight(precision=3) {
    let weights = this.weight;

    if(!weights.standard) return '-';

    if(!precision || (_precision(weights.standard) < precision)) {
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

  getDecayModes() {
    let modes = [];
    for(let i in this.decay) {
      let m = this.decay[i].mode;
      
      if(m == 'double_beta_minus') modes.push("β-β-");
      if(m == 'beta_minus') modes.push("β-");
      if(m == 'beta_plus') modes.push("β+");
      if(m == 'k_plus') modes.push("EC");
      if(m == 'gamma') modes.push("γ");
      if(m == 'alpha') modes.push("α");
      if(m == 'internal_convertion') modes.push("IT");
      if(m == 'proton') modes.push("p");
      if(m == 'neutron') modes.push("n");
      if(m == 'spontaneous_fission') modes.push("SF");
    }

    return modes;
  }
}
