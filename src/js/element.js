export default class Element {
  constructor(data) {
    Object.assign(this, data);
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
    lang = lang || 'en';
    if(this.name.hasOwnProperty(lang))
      return this.name[lang];

    return this.name['en'];
  }

  _precision(a) {
    let e = 1;
    while (Math.round(a * e) / e !== a) e *= 10;
    return Math.log(e) / Math.LN10;
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
};
