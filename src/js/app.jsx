import React from 'react';
import update from 'immutability-helper';

import {Element, Isotope} from './element';
import ElementBox from './elementbox';
import ElementPage from './element_page';
import InfoArea from './info_area';
import NavBar from './nav_bar';
import data from './data';
import { convert_temperature } from './utils';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    let elements = {};
    for(let id in data) {
      elements[id] = new Element(data[id]);
      for(let iso in data[id].isotopes) {
        let isotope = data[id].isotopes[iso];
        isotope.group = data[id].group;
        isotope.period = data[id].period;
        elements[id].isotopes[iso] = new Isotope(isotope, elements[id]);
      }
    }

    this.state = { 
      elements,
      curr_lang: this._getDefaultLang() || 'en',
      selected_element: null,
      hover_element: null,
      temperature: 298,
      temperature_scale: 'kelvin',
      show_flags: this._generateShowFlags(),
      show_page: false
    };

    let url_state = this.processURL();
    
    Object.keys(url_state).map(key => {
      this.state[key] = url_state[key];
    });

    this.pinchEvs = [];
    this.pinchPrevDiff = -1;
    this.zoomScale = 1.0;
    
    this.toggleHighlight = this.toggleHighlight.bind(this);
    this.toggleHighlightPeriod = this.toggleHighlightPeriod.bind(this);
    this.toggleHighlightGroup = this.toggleHighlightGroup.bind(this);
    this.setLang = this.setLang.bind(this);
    this.showHandler = this.showHandler.bind(this);
    this.showElementPage = this.showElementPage.bind(this);
    this.setSelectedElement = this.setSelectedElement.bind(this);
    this.setHoveredElement = this.setHoveredElement.bind(this);
    this.closeElementPage = this.closeElementPage.bind(this);
    this.setTemperature = this.setTemperature.bind(this);
    this.pinchHandler = this.pinchHandler.bind(this);
    this.cancelPinchHandler = this.cancelPinchHandler.bind(this);
  }

  componentDidMount() {
    window.onpopstate = function(event) {
      // event.preventDefault();

      // this.setState(this.processURL());

      // return false;
    }
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    let currState = this.state;
    let old_query = this.processURL();
    let new_query = {};
    let new_element = null;

    if(currState.selected_element)
        new_element = currState.selected_element.id;

    if(currState.curr_lang)
      new_query.curr_lang = currState.curr_lang;

    if(currState.temperature) {
      if(currState.temperature_scale != 'kelvin') {
        new_query.temperature_scale = currState.temperature_scale;
        new_query.temperature = convert_temperature(currState.temperature, 'kelvin', currState.temperature_scale);
      } else {
        new_query.temperature = currState.temperature;
        if(old_query.temperature_scale) new_query.temperature_scale = old_query.temperature_scale;
      }
    }

    let curr_mode = null;
    Object.keys(currState.show_flags).forEach(function(key) { 
      if(currState.show_flags[key]) 
        curr_mode = key; 
    });
    if(curr_mode)
      new_query.mode = curr_mode;

    if(currState.show_page)
      new_query.show_page = currState.show_page;

    let url = "/";
    if(new_element) url += new_element;
    let query = new URLSearchParams();
    Object.keys(new_query).forEach(key => query.append(key, new_query[key]))

    window.history.replaceState(new_query, '', url + '?' + query.toString());
  }

  pinchHandler(ev) {
    if(ev.type == 'pointerdown') {
      ev.persist();
      this.pinchEvs.push(ev);
      console.log('pointerDown');
    } else {
      console.log('pinching');
      for (let i = 0; i < this.pinchEvs.length; i++) {
        if (ev.pointerId == this.pinchEvs[i].pointerId) {
          this.pinchEvs[i] = ev;
          break;
        }
      }

      if (this.pinchEvs.length == 2) {
        // Calculate the distance between the two pointers
        let curDiff = Math.abs(this.pinchEvs[0].clientX - this.pinchEvs[1].clientX);

        if (this.pinchPrevDiff > 0) {
          if (curDiff > this.pinchPrevDiff) {
            // The distance between the two pointers has increased
            this.zoomIn()
          }
          if (curDiff < this.pinchPrevDiff) {
            // The distance between the two pointers has decreased
            this.zoomOut()
          }
        }
        // Cache the distance for the next move event 
        this.pinchPrevDiff = curDiff;
      }
    }
  }

  zoomIn() {
    this.zoomScale += 0.5;
    this.refs['content'].style.transform = `scale(${this.zoomScale})`;
    console.log(this.zoomScale);
  }

  zoomOut() {
    this.zoomScale -= 0.5;
    if(this.zoomScale < 0.5) this.zoomScale = 0.5;
    this.refs['content'].style.transform = `scale(${this.zoomScale})`;
    console.log(this.zoomScale);
  }

  cancelPinchHandler(ev) {
    console.log('cancel pinch');
    for (let i = 0; i < this.pinchEvs.length; i++) {
      if (this.pinchEvs[i].pointerId == ev.pointerId) {
        this.pinchEvs.splice(i, 1);
        break;
      }
    }

    if (this.pinchEvs.length < 2) this.pinchPrevDiff = -1;
  }

  setTemperature(temp, show_scale) {
    this.setState({temperature: temp, temperature_scale: show_scale});
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

  _generateShowFlags(selected='basic') {
    let flags = {
      "electronic": false,
      "isotopes": false,
      "radius": false,
      "state": false,
      "basic": false,
    };

    let is_selected = false;
    Object.keys(flags).map(mode => {
      if(mode == selected) {
        flags[mode] = true;
        is_selected = true;
      }
    });
    
    if(!is_selected) flags.basic = true;

    return flags;
  }

  showHandler(e) {
    e.preventDefault();
    let link = e.target.getAttribute('href');
    let flag = link.substr(1);
    
    this.activateShowFlag(flag);
    this.closeElementPage(e);
  }

  setSelectedElement(id) {
    this.setState({selected_element: this._getElement(id)});
  }

  setHoveredElement(id) {
    this.setState({hover_element: this._getElement(id)});
  }

  showElementPage() {  
    this.setState({show_page: true});
  }

  closeElementPage(e) {
    e.preventDefault();
    this.setState({show_page: false});
  }

  _getDefaultLang() {
    return navigator.language || navigator.userLanguage;
  }

  setLang(lang) {
    this.setState(function(state) { return { curr_lang: lang } });
  }

  _getElement(id) {
    //let regexp = /([a-zA-Z]+)(\[(.+?)\])?/;
    let regexp = /([a-zA-Z]+)(\-([0-9]+))?/;
    let matches = regexp.exec(id);
    
    if(matches[1] && matches[3]) {
      if(this.state.elements[matches[1]])
        return this.state.elements[matches[1]].getIsotope(matches[0]);
    } else {
      if(this.state.elements[matches[1]])  
        return this.state.elements[matches[1]];
    }

    return false;
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
    
    let gref = 'g' + this._getElement(id).group;
    let pref = 'p' + this._getElement(id).period;
    let group = this.refs[gref];
    let period = this.refs[pref];
    if (event.type == 'pointerenter' || event.type == 'pointerdown') {
      for(let i=1;i<=7;i++) {
        this.refs['p'+i].classList.remove('highlight');
      }
      for(let i=1;i<=18;i++) {
        this.refs['g'+i].classList.remove('highlight');
      }
      group.classList.add('highlight');
      period.classList.add('highlight');
      this._removeElementsClass('active');
      this._addClass(id, 'active');
    } 
    if (event.type == 'pointerleave' || event.type == "pointerout" || event.type == 'pointerup') {
      group.classList.remove('highlight');
      period.classList.remove('highlight');
      this._removeElementsClass('active');
    }
  }

  toggleHighlightPeriod(e) {
    let period = e.target.getAttribute('data-key');
    
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
          'Ir','Pt','Au','Hg','Tl','Pb','Bi','Po','At','Rn','La',
          'Ce','Pr','Nd','Pm','Sm','Eu','Gd','Tb','Dy','Ho','Er',
          'Tm','Yb','Lu'];
        break;
      case 'p7':
        elems = ['Fr','Ra','actinoids','Rf','Db','Sg','Bh','Hs',
          'Mt','Ds','Rg','Cn','Nh','Fl','Mc','Lv','Ts','Og','Ac',
          'Th','Pa','U','Np','Pu','Am','Cm','Bk','Cf','Es','Fm',
          'Md','No','Lr'];
        break;
    };

    if (event.type == 'pointerenter' || event.type == 'pointerdown') {
      for(let i=1;i<=7;i++) {
        this.refs['p'+i].classList.remove('highlight');
      }
      for(let i=1;i<=18;i++) {
        this.refs['g'+i].classList.remove('highlight');
      }
      e.target.classList.add('highlight');
      this._addElementsClass('disabled', elems);
    } 
    if (event.type == 'pointerleave' || event.type == 'pointerup' || event.type == 'pointerout') {
      e.target.classList.remove('highlight');
      this._removeElementsClass('disabled');
    }

  }

  toggleHighlightGroup(e) {
    let group = e.target.getAttribute('data-key');

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

    if (event.type == 'pointerenter' || event.type == 'pointerdown') {
      for(let i=1;i<=7;i++) {
        this.refs['p'+i].classList.remove('highlight');
      }
      for(let i=1;i<=18;i++) {
        this.refs['g'+i].classList.remove('highlight');
      }
      e.target.classList.add('highlight');
      this._addElementsClass('disabled', elems);
    } 
    if (event.type == 'pointerleave' || event.type == 'pointerup' || event.type == 'pointerout') {
      e.target.classList.remove('highlight');
      this._removeElementsClass('disabled');
    }
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

  _addElementsClass(class_name, exceptions=[]) {
    this.setState(function(state, props) {
      let els = Object.keys(state.elements);
        
      let upd = {};
      els.map(function(el) {
        let class_list = state.elements[el].classList || [];
        if(exceptions.indexOf(el) > -1) {
          if(class_list.indexOf(class_name) > -1) {
            let new_list = class_list.filter(function(e) { return e !== class_name} );
            class_list = new_list;
          }
        } else {
          class_list.push(class_name);
        }

        upd[el] = { classList: {$set: class_list}};
      });

      return { elements: update(state.elements, upd) }
    });
  }

  _removeElementsClass(class_name, exceptions=[]) {
    this.setState(function(state, props) {
      let els = Object.keys(state.elements);
        
      let upd = {};
      els.map(function(el) {
        let class_list = state.elements[el].classList || [];
        if(exceptions.indexOf(el) < 0) {
          if(class_list.indexOf(class_name) > -1) {
            let new_list = class_list.filter(function(e) { return e !== class_name} );
            class_list = new_list;
          }
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

  _addClass(id, class_name) {
    this.setState(function(state, props) {
      if(state.elements[id]) {
        let upd = {};
        let class_list = state.elements[id].classList || [];
        if(class_list.indexOf(class_name) > -1) {
          return true
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
      let elem = this.state.elements[i];
      let classes = {};
      let styles = {};
      let selected = false;
      if(this.state.selected_element) {
        if(elem.id == this.state.selected_element.id) selected = true;
        
        if(this.state.selected_element.element)
          if(this.state.selected_element.element.id == elem.id) 
            selected = true;
      }

      boxes.push(
        <ElementBox key={elem.id}
          elem={elem} 
          lang={this.state.curr_lang}
          curr_temp={this.state.temperature}
          selected={selected}
          hover={this.state.hover_element == elem}
          classes={classes}
          styles={styles}
          show_flags={this.state.show_flags}
          showElementPage={this.showElementPage}
          setSelected={this.setSelectedElement}
          setHovered={this.setHoveredElement}
        />
      );
    }

    let groups = [];
    for(let i=1; i <= 18; i++) {
      let id = 'g'+i;
      let highlight = '';
      if(this.state.hover_element && 
        (this.state.hover_element.group == i)
      ) { highlight = 'highlight'; }

      groups.push(
        <li ref={id}  data-key={id} key={id} 
          className={`${id} ${highlight}`}
          onPointerDown={this.toggleHighlightGroup}
          onPointerUp={this.toggleHighlightGroup}
          onPointerOut={this.toggleHighlightGroup}
        >{i}</li>
      );
    }

    let periods = [];
    for(let i=1; i <= 7; i++) {
      let id = 'p'+i;
      let highlight = '';
      if(this.state.hover_element &&
        (this.state.hover_element.period == i)
      ) { highlight = 'highlight'; }
      
      periods.push(
        <li ref={id} data-key={id} key={id} 
          className={`${id} ${highlight}`}
          onPointerDown={this.toggleHighlightPeriod}
          onPointerUp={this.toggleHighlightPeriod}
          onPointerOut={this.toggleHighlightPeriod}
        >{i}</li>
      );
    }

    return (
      <div style={{'touchAction':"none"}}
        // onPointerDown={this.pinchHandler}
        // onPointerMove={this.pinchHandler}
        // onPointerUp={this.cancelPinchHandler}
        // onPointerCancel={this.cancelPinchHandler}
        // onPointerOut={this.cancelPinchHandler}
        // onPointerLeave={this.cancelPinchHandler}
      >
        <NavBar langOnChange={this.setLang} 
          showHandler={this.showHandler}
          curr_lang={this.state.curr_lang}
          show_flags={this.state.show_flags}
          temperature={this.state.temperature}
          temperature_scale={this.state.temperature_scale}
          setTemperature={this.setTemperature}
        />
        <div className="content" ref="content">
          <ElementPage curr_lang={this.state.curr_lang} 
            element={this.state.selected_element}
            show_page={this.state.show_page}
            curr_temp={this.state.temperature}
            closeElemPage={this.closeElementPage}
          />
          <ul className="table">
            <InfoArea element={this.state.selected_element} 
              lang={this.state.curr_lang}
              curr_temp={this.state.temperature}
              curr_lang={this.state.curr_lang}
              show_flags={this.state.show_flags}
              setHovered={this.setHoveredElement}
            />
            {groups}
            {periods}
            {boxes}
          </ul>
        </div>
      </div>
    );
  }

  processURL() {
    let url = new URL(window.location);
    let params = url.searchParams;
    let mode = params.get('mode');
    let temperature = params.get('temperature') * 1;
    let temperature_scale = params.get('temperature_scale');

    let element = url.pathname.split('/')[1];

    let state = {};
    if(element) {
      state.selected_element = this._getElement(element);
      state.hover_element = state.selected_element.element ? state.selected_element.element : state.selected_element;
    }

    if(mode)
      state.show_flags = this._generateShowFlags(mode);

    if(temperature) {
      let kelvin_temp = 0;

      switch(temperature_scale) {
        case 'celsius':
          kelvin_temp = convert_temperature(temperature, 'celsius', 'kelvin');
          console.log(kelvin_temp);
          break;
        case 'fahrenheit':
          kelvin_temp = convert_temperature(temperature, 'fahrenheit', 'kelvin');
          break;
        case 'kelvin':
        default:
          kelvin_temp = temperature;
          temperature_scale = 'kelvin';
          break;
      }
      
      state.temperature = kelvin_temp;
      state.temperature_scale = temperature_scale;
    }

    return state;
  }
}
