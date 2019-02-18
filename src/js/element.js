export default class Element {
  constructor(data) {
    Object.assign(this, data);
  }

  // return state at given temperature (in Kelvin)
  stateAtTemp(temp) {
    if (temp < this.fusion_temp) return 'state-solid';
    if (temp < this.boiling_temp) return 'state-liquid';
    return 'state-gas';
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
