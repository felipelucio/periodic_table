import React from 'react';
import update from 'immutability-helper';

import Element from './element';
import ElementBox from './elementbox';
import ElementPage from './element_page';
import NavBar from './nav_bar';
import data from './data';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    let elements = {};
    for(let id in data) {
      elements[id] = new Element(data[id]);
    }

    this.state = { 
      elements,
      curr_lang: this._getDefaultLang() || 'en',
      curr_elem: null,
      show_flags: {
        basic: true,
        electronic: false,
        isotopes: false,
        radius: false,
        state: false
      },
      temperature: 273,
    };
    
    this.toggleHighlight = this.toggleHighlight.bind(this);
    this.toggleHighlightPeriod = this.toggleHighlightPeriod.bind(this);
    this.toggleHighlightGroup = this.toggleHighlightGroup.bind(this);
    this.setLang = this.setLang.bind(this);
    this.showHandler = this.showHandler.bind(this);
    this.showElementInfo = this.showElementInfo.bind(this);
    this.closeElementInfo = this.closeElementInfo.bind(this);
    this.changeTemperature = this.changeTemperature.bind(this);
  }

  changeTemperature(e) {
    e.preventDefault();
    let temp = e.target.value;
    
    this.setState({temperature: temp});
  }

  activateShowFlag(flag) {
    this.setState(function(state, props) {
      if(state.show_flags.hasOwnProperty(flag) && !state.show_flags[flag]) {
        let new_flags = {};
        for(let i in state.show_flags) {
          new_flags[i] = false;
        }
        new_flags[flag] = true;

        return { show_flags: new_flags };
      } else {
        return {};
      }
    });
  }

  showHandler(e) {
    e.preventDefault();
    let link = e.target.getAttribute('href');
    let flag = link.substr(1);
    
    this.activateShowFlag(flag);
    this.closeElementInfo(e);
  }

  showElementInfo(e) {
    e.preventDefault();
    let id = e.currentTarget.getAttribute('data-key');
    this.setState({curr_elem: this.state.elements[id]});
  }

  closeElementInfo(e) {
    e.preventDefault();
    this.setState({curr_elem: null});
  }

  _getDefaultLang() {
    return navigator.language || navigator.userLanguage;
  }

  setLang(lang) {
    this.setState(function(state) { return { curr_lang: lang } });
  }

  toggleHighlight(id, type, event) {
    let elems = [];
    
    switch(type) {
      case 'lanthanoids':
        elems = ['La','Ce','Pr','Nd','Pm','Sm','Eu','Gd','Tb',
          'Dy','Ho','Er','Tm','Yb','Lu','lanthanoids'];
        break;
      case 'actinoids':
        elems = ['Ac','Th','Pa','U','Np','Pu','Am','Cm','Bk',
          'Cf','Es','Fm','Md','No','Lr','actinoids'];
        break;
    };

    if (elems.length) this._toggleElementsClass(elems, 'disabled');
    
    let gref = 'g' + this.state.elements[id].group;
    let pref = 'p' + this.state.elements[id].period;
    let group = this.refs[gref];
    let period = this.refs[pref];
    if (event.type == 'pointerenter') {
      group.classList.add('highlight');
      period.classList.add('highlight');
    } 
    if (event.type == 'pointerleave') {
      group.classList.remove('highlight');
      period.classList.remove('highlight');
    }

    this._toggleClass(id, 'active');
  }

  toggleHighlightPeriod(e) {
    let period = e.target.getAttribute('data-key');
    e.target.classList.toggle('highlight');

    let elems = [];
    switch(period) {
      case 'p1':
        elems = ['H','He'];
        break;
      case 'p2':
        elems = ['Li','Be','B','C','N','O','F','Ne'];
        break;
      case 'p3':
        elems = ['Na','Mg','Al','Si','P','S','Cl','Ar'];
        break;
      case 'p4':
        elems = ['K','Ca','Sc','Ti','V','Cr','Mn','Fe','Co','Ni',
          'Cu','Zn','Ga','Ge','As','Se','Br','Kr'];
        break;
      case 'p5':
        elems = ['Rb','Sr','Y','Zr','Nb','Mo','Tc','Ru','Rh','Pd',
          'Ag','Cd','In','Sn','Sb','Te','I','Xe'];
        break;
      case 'p6':
        elems = ['Cs','Ba','lanthanoids','Hf','Ta','W','Re','Os',
          'Ir','Pt','Au','Hg','Tl','Pb','Bi','Po','At','Rn'];
        break;
      case 'p7':
        elems = ['Fr','Ra','actinoids','Rf','Db','Sg','Bh','Hs',
          'Mt','Ds','Rg','Cn','Nh','Fl','Mc','Lv','Ts','Og'];
        break;
    };

    this._toggleElementsClass(elems, 'disabled');
  }

  toggleHighlightGroup(e) {
    let group = e.target.getAttribute('data-key');
    e.target.classList.toggle('highlight');

    let elems = [];
    switch(group) {
      case 'g1':
        elems = ['H','Li','Na','K','Rb','Cs','Fr'];
        break;
      case 'g2':
        elems = ['Be','Mg','Ca','Sr','Ba','Ra'];
        break;
      case 'g3':
        elems = ['Sc','Y','lanthanoids','actinoids',
          'La','Ce','Pr','Nd','Pm','Sm','Eu','Gd','Tb','Dy',
          'Ho','Er','Tm','Yb','Lu',
          'Ac','Th','Pa','U','Np','Pu','Am','Cm','Bk','Cf',
          'Es','Fm','Md','No','Lr'
        ];
        break;
      case 'g4':
        elems = ['Ti','Zr','Hf','Rf'];
        break;
      case 'g5':
        elems = ['V','Nb','Ta','Db'];
        break;
      case 'g6':
        elems = ['Cr','Mo','W','Sg'];
        break;
      case 'g7':
        elems = ['Mn','Tc','Re','Bh'];
        break;
      case 'g8':
        elems = ['Fe','Ru','Os','Hs'];
        break;
      case 'g9':
        elems = ['Co','Rh','Ir','Mt'];
        break;
      case 'g10':
        elems = ['Ni','Pd','Pt','Ds'];
        break;
      case 'g11':
        elems = ['Cu','Ag','Au','Rg'];
        break;
      case 'g12':
        elems = ['Zn','Cd','Hg','Cn'];
        break;
      case 'g13':
        elems = ['B','Al','Ga','In','Tl','Nh'];
        break;
      case 'g14':
        elems = ['C','Si','Ge','Sn','Pb','Fl'];
        break;
      case 'g15':
        elems = ['N','P','As','Sb','Bi','Mc'];
        break;
      case 'g16':
        elems = ['O','S','Se','Te','Po','Lv'];
        break;
      case 'g17':
        elems = ['F','Cl','Br','I','At','Ts'];
        break;
      case 'g18':
        elems = ['He','Ne','Ar','Kr','Xe','Rn','Og'];
        break;
    };

    this._toggleElementsClass(elems, 'disabled');
  }

  _toggleElementsClass(elems, class_name) {
    this.setState(function(state, props) {
      let els = Object.keys(state.elements).filter(function(e) {
        if(elems.indexOf(e) < 0) return true;
      });
        
      let upd = {};
      els.map(function(el) {
        let class_list = state.elements[el].classList || [];
        if(class_list.indexOf(class_name) > -1) {
          let new_list = class_list.filter(function(e) { return e !== class_name} );
          class_list = new_list;
        } else {
          class_list.push(class_name);
        }

        upd[el] = { classList: {$set: class_list}};
      });

      return { elements: update(state.elements, upd) }
    });
  }

  _toggleClass(id, class_name) {
    this.setState(function(state, props) {
      if(state.elements[id]) {
        let upd = {};
        let class_list = state.elements[id].classList || [];
        if(class_list.indexOf(class_name) > -1) {
          let new_list = class_list.filter(function(e) { return e !== class_name} );
          class_list = new_list;
        } else {
          class_list.push(class_name);
        }

        upd[id] = { classList: {$set: class_list}};

        return { elements: update(state.elements, upd) }
      }       
    });
  }

  render() {
    let boxes = [];
    for(let i in this.state.elements) {
      boxes.push(
        <ElementBox key={this.state.elements[i].id}
          elem={this.state.elements[i]} 
          lang={this.state.curr_lang}
          curr_temp={this.state.temperature}
          showFlags={this.state.show_flags}
          onPointerEnter={this.toggleHighlight}
          onPointerLeave={this.toggleHighlight}
          showElementInfo={this.showElementInfo}
        />
      );
    }

    let groups = [];
    for(let i=1; i <= 18; i++) {
      groups.push(
        <li ref={"g"+i}  data-key={"g"+i} key={"g"+i} 
          className={"g"+i}
          onPointerEnter={this.toggleHighlightGroup}
          onPointerLeave={this.toggleHighlightGroup}
        >{i}</li>
      );
    }

    let periods = [];
    for(let i=1; i <= 7; i++) {
      periods.push(
        <li ref={"p"+i} data-key={"p"+i} key={"g"+i} 
          className={"p"+i}
          onPointerEnter={this.toggleHighlightPeriod}
          onPointerLeave={this.toggleHighlightPeriod}
        >{i}</li>
      );
    }

    return (
      <div>
        <NavBar langOnChange={this.setLang} 
          showHandler={this.showHandler}
          curr_lang={this.state.curr_lang}
          show_flags={this.state.show_flags}
          temperature={this.state.temperature}
          changeTemperature={this.changeTemperature}
        />
        <div className="content">
          <ElementPage curr_lang={this.state.curr_lang} 
            element={this.state.curr_elem}
            closeElemPage={this.closeElementInfo}
          />
          <ul className="table">
            {groups}
            {periods}
            {boxes}
          </ul>
        </div>
      </div>
    );
  }
}
