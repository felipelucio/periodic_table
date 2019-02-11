import React from 'react';
import update from 'immutability-helper';

import ElementBox from './elementbox';
import NavBar from './nav_bar';
import data from './data';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      elements: data
    };
    
    this.toggleHighlight = this.toggleHighlight.bind(this);
    this.toggleHighlightPeriod = this.toggleHighlightPeriod.bind(this);
    this.toggleHighlightGroup = this.toggleHighlightGroup.bind(this);
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
    return (
      <div>
        <NavBar />
        <ul className="table">
          <li ref="g1"  data-key="g1" className="g1"
            onPointerEnter={this.toggleHighlightGroup}
            onPointerLeave={this.toggleHighlightGroup}
          >1</li>
          <li ref="g2"  data-key="g2" className="g2"
            onPointerEnter={this.toggleHighlightGroup}
            onPointerLeave={this.toggleHighlightGroup}
          >2</li>
          <li ref="g3"  data-key="g3" className="g3"
            onPointerEnter={this.toggleHighlightGroup}
            onPointerLeave={this.toggleHighlightGroup}
          >3</li>
          <li ref="g4"  data-key="g4" className="g4"
            onPointerEnter={this.toggleHighlightGroup}
            onPointerLeave={this.toggleHighlightGroup}
          >4</li>
          <li ref="g5"  data-key="g5" className="g5"
            onPointerEnter={this.toggleHighlightGroup}
            onPointerLeave={this.toggleHighlightGroup}
          >5</li>
          <li ref="g6"  data-key="g6" className="g6"
            onPointerEnter={this.toggleHighlightGroup}
            onPointerLeave={this.toggleHighlightGroup}
          >6</li>
          <li ref="g7"  data-key="g7" className="g7"
            onPointerEnter={this.toggleHighlightGroup}
            onPointerLeave={this.toggleHighlightGroup}
          >7</li>
          <li ref="g8"  data-key="g8" className="g8"
            onPointerEnter={this.toggleHighlightGroup}
            onPointerLeave={this.toggleHighlightGroup}
          >8</li>
          <li ref="g9"  data-key="g9" className="g9"
            onPointerEnter={this.toggleHighlightGroup}
            onPointerLeave={this.toggleHighlightGroup}
          >9</li>
          <li ref="g10" data-key="g10" className="g10"
            onPointerEnter={this.toggleHighlightGroup}
            onPointerLeave={this.toggleHighlightGroup}
          >10</li>
          <li ref="g11" data-key="g11" className="g11"
            onPointerEnter={this.toggleHighlightGroup}
            onPointerLeave={this.toggleHighlightGroup}
          >11</li>
          <li ref="g12" data-key="g12" className="g12"
            onPointerEnter={this.toggleHighlightGroup}
            onPointerLeave={this.toggleHighlightGroup}
          >12</li>
          <li ref="g13" data-key="g13" className="g13"
            onPointerEnter={this.toggleHighlightGroup}
            onPointerLeave={this.toggleHighlightGroup}
          >13</li>
          <li ref="g14" data-key="g14" className="g14"
            onPointerEnter={this.toggleHighlightGroup}
            onPointerLeave={this.toggleHighlightGroup}
          >14</li>
          <li ref="g15" data-key="g15" className="g15"
            onPointerEnter={this.toggleHighlightGroup}
            onPointerLeave={this.toggleHighlightGroup}
          >15</li>
          <li ref="g16" data-key="g16" className="g16"
            onPointerEnter={this.toggleHighlightGroup}
            onPointerLeave={this.toggleHighlightGroup}
          >16</li>
          <li ref="g17" data-key="g17" className="g17"
            onPointerEnter={this.toggleHighlightGroup}
            onPointerLeave={this.toggleHighlightGroup}
          >17</li>
          <li ref="g18" data-key="g18" className="g18"
            onPointerEnter={this.toggleHighlightGroup}
            onPointerLeave={this.toggleHighlightGroup}
          >18</li>
          <li ref="p1" data-key="p1" className="p1"
            onPointerEnter={this.toggleHighlightPeriod}
            onPointerLeave={this.toggleHighlightPeriod}
          >1</li>
          <li ref="p2" data-key="p2" className="p2"
            onPointerEnter={this.toggleHighlightPeriod}
            onPointerLeave={this.toggleHighlightPeriod}
          >2</li>
          <li ref="p3" data-key="p3" className="p3"
            onPointerEnter={this.toggleHighlightPeriod}
            onPointerLeave={this.toggleHighlightPeriod}
          >3</li>
          <li ref="p4" data-key="p4" className="p4"
            onPointerEnter={this.toggleHighlightPeriod}
            onPointerLeave={this.toggleHighlightPeriod}
          >4</li>
          <li ref="p5" data-key="p5" className="p5"
            onPointerEnter={this.toggleHighlightPeriod}
            onPointerLeave={this.toggleHighlightPeriod}
          >5</li>
          <li ref="p6" data-key="p6" className="p6"
            onPointerEnter={this.toggleHighlightPeriod}
            onPointerLeave={this.toggleHighlightPeriod}
          >6</li>
          <li ref="p7" data-key="p7" className="p7"
            onPointerEnter={this.toggleHighlightPeriod}
            onPointerLeave={this.toggleHighlightPeriod}
          >7</li>
          <ElementBox elem={this.state.elements.H} 
            onPointerEnter={this.toggleHighlight}
            onPointerLeave={this.toggleHighlight}
          />
          <ElementBox elem={this.state.elements.He} 
            onPointerEnter={this.toggleHighlight}
            onPointerLeave={this.toggleHighlight}
          />
          <ElementBox elem={this.state.elements.Li} 
            onPointerEnter={this.toggleHighlight}
            onPointerLeave={this.toggleHighlight}
          />
          <ElementBox elem={this.state.elements.Be} 
            onPointerEnter={this.toggleHighlight}
            onPointerLeave={this.toggleHighlight}
          />
          <ElementBox elem={this.state.elements.B} 
            onPointerEnter={this.toggleHighlight}
            onPointerLeave={this.toggleHighlight}
          />
          <ElementBox elem={this.state.elements.C} 
            onPointerEnter={this.toggleHighlight}
            onPointerLeave={this.toggleHighlight}
          />
          <ElementBox elem={this.state.elements.N} 
            onPointerEnter={this.toggleHighlight}
            onPointerLeave={this.toggleHighlight}
          />
          <ElementBox elem={this.state.elements.O} 
            onPointerEnter={this.toggleHighlight}
            onPointerLeave={this.toggleHighlight}
          />
          <ElementBox elem={this.state.elements.F} 
            onPointerEnter={this.toggleHighlight}
            onPointerLeave={this.toggleHighlight}
          />
          <ElementBox elem={this.state.elements.Ne} 
            onPointerEnter={this.toggleHighlight}
            onPointerLeave={this.toggleHighlight}
          />
          <ElementBox elem={this.state.elements.Na} 
            onPointerEnter={this.toggleHighlight}
            onPointerLeave={this.toggleHighlight}
          />
          <ElementBox elem={this.state.elements.Mg} 
            onPointerEnter={this.toggleHighlight}
            onPointerLeave={this.toggleHighlight}
          />
          <ElementBox elem={this.state.elements.Al} 
            onPointerEnter={this.toggleHighlight}
            onPointerLeave={this.toggleHighlight}
          />
          <ElementBox elem={this.state.elements.Si} 
            onPointerEnter={this.toggleHighlight}
            onPointerLeave={this.toggleHighlight}
          />
          <ElementBox elem={this.state.elements.P} 
            onPointerEnter={this.toggleHighlight}
            onPointerLeave={this.toggleHighlight}
          />
          <ElementBox elem={this.state.elements.S} 
            onPointerEnter={this.toggleHighlight}
            onPointerLeave={this.toggleHighlight}
          />
          <ElementBox elem={this.state.elements.Cl} 
            onPointerEnter={this.toggleHighlight}
            onPointerLeave={this.toggleHighlight}
          />
          <ElementBox elem={this.state.elements.Ar} 
            onPointerEnter={this.toggleHighlight}
            onPointerLeave={this.toggleHighlight}
          />
          <ElementBox elem={this.state.elements.K} 
            onPointerEnter={this.toggleHighlight}
            onPointerLeave={this.toggleHighlight}
          />
          <ElementBox elem={this.state.elements.Ca} 
            onPointerEnter={this.toggleHighlight}
            onPointerLeave={this.toggleHighlight}
          />
          <ElementBox elem={this.state.elements.Sc} 
            onPointerEnter={this.toggleHighlight}
            onPointerLeave={this.toggleHighlight}
          />
          <ElementBox elem={this.state.elements.Ti} 
            onPointerEnter={this.toggleHighlight}
            onPointerLeave={this.toggleHighlight}
          />
          <ElementBox elem={this.state.elements.V} 
            onPointerEnter={this.toggleHighlight}
            onPointerLeave={this.toggleHighlight}
          />
          <ElementBox elem={this.state.elements.Cr} 
            onPointerEnter={this.toggleHighlight}
            onPointerLeave={this.toggleHighlight}
          />
          <ElementBox elem={this.state.elements.Mn} 
            onPointerEnter={this.toggleHighlight}
            onPointerLeave={this.toggleHighlight}
          />
          <ElementBox elem={this.state.elements.Fe} 
            onPointerEnter={this.toggleHighlight}
            onPointerLeave={this.toggleHighlight}
          />
          <ElementBox elem={this.state.elements.Co} 
            onPointerEnter={this.toggleHighlight}
            onPointerLeave={this.toggleHighlight}
          />
          <ElementBox elem={this.state.elements.Ni} 
            onPointerEnter={this.toggleHighlight}
            onPointerLeave={this.toggleHighlight}
          />
          <ElementBox elem={this.state.elements.Cu} 
            onPointerEnter={this.toggleHighlight}
            onPointerLeave={this.toggleHighlight}
          />
          <ElementBox elem={this.state.elements.Zn} 
            onPointerEnter={this.toggleHighlight}
            onPointerLeave={this.toggleHighlight}
          />
          <ElementBox elem={this.state.elements.Ga} 
            onPointerEnter={this.toggleHighlight}
            onPointerLeave={this.toggleHighlight}
          />
          <ElementBox elem={this.state.elements.Ge} 
            onPointerEnter={this.toggleHighlight}
            onPointerLeave={this.toggleHighlight}
          />
          <ElementBox elem={this.state.elements.As} 
            onPointerEnter={this.toggleHighlight}
            onPointerLeave={this.toggleHighlight}
          />
          <ElementBox elem={this.state.elements.Se} 
            onPointerEnter={this.toggleHighlight}
            onPointerLeave={this.toggleHighlight}
          />
          <ElementBox elem={this.state.elements.Br} 
            onPointerEnter={this.toggleHighlight}
            onPointerLeave={this.toggleHighlight}
          />
          <ElementBox elem={this.state.elements.Kr} 
            onPointerEnter={this.toggleHighlight}
            onPointerLeave={this.toggleHighlight}
          />
          <ElementBox elem={this.state.elements.Rb} 
            onPointerEnter={this.toggleHighlight}
            onPointerLeave={this.toggleHighlight}
          />
          <ElementBox elem={this.state.elements.Sr} 
            onPointerEnter={this.toggleHighlight}
            onPointerLeave={this.toggleHighlight}
          />
          <ElementBox elem={this.state.elements.Y} 
            onPointerEnter={this.toggleHighlight}
            onPointerLeave={this.toggleHighlight}
          />
          <ElementBox elem={this.state.elements.Zr} 
            onPointerEnter={this.toggleHighlight}
            onPointerLeave={this.toggleHighlight}
          />
          <ElementBox elem={this.state.elements.Nb} 
            onPointerEnter={this.toggleHighlight}
            onPointerLeave={this.toggleHighlight}
          />
          <ElementBox elem={this.state.elements.Mo} 
            onPointerEnter={this.toggleHighlight}
            onPointerLeave={this.toggleHighlight}
          />
          <ElementBox elem={this.state.elements.Tc} 
            onPointerEnter={this.toggleHighlight}
            onPointerLeave={this.toggleHighlight}
          />
          <ElementBox elem={this.state.elements.Ru} 
            onPointerEnter={this.toggleHighlight}
            onPointerLeave={this.toggleHighlight}
          />
          <ElementBox elem={this.state.elements.Rh} 
            onPointerEnter={this.toggleHighlight}
            onPointerLeave={this.toggleHighlight}
          />
          <ElementBox elem={this.state.elements.Pd} 
            onPointerEnter={this.toggleHighlight}
            onPointerLeave={this.toggleHighlight}
          />
          <ElementBox elem={this.state.elements.Ag} 
            onPointerEnter={this.toggleHighlight}
            onPointerLeave={this.toggleHighlight}
          />
          <ElementBox elem={this.state.elements.Cd} 
            onPointerEnter={this.toggleHighlight}
            onPointerLeave={this.toggleHighlight}
          />
          <ElementBox elem={this.state.elements.In} 
            onPointerEnter={this.toggleHighlight}
            onPointerLeave={this.toggleHighlight}
          />
          <ElementBox elem={this.state.elements.Sn} 
            onPointerEnter={this.toggleHighlight}
            onPointerLeave={this.toggleHighlight}
          />
          <ElementBox elem={this.state.elements.Sb} 
            onPointerEnter={this.toggleHighlight}
            onPointerLeave={this.toggleHighlight}
          />
          <ElementBox elem={this.state.elements.Te} 
            onPointerEnter={this.toggleHighlight}
            onPointerLeave={this.toggleHighlight}
          />
          <ElementBox elem={this.state.elements.I} 
            onPointerEnter={this.toggleHighlight}
            onPointerLeave={this.toggleHighlight}
          />
          <ElementBox elem={this.state.elements.Xe} 
            onPointerEnter={this.toggleHighlight}
            onPointerLeave={this.toggleHighlight}
          />
          <ElementBox elem={this.state.elements.Cs} 
            onPointerEnter={this.toggleHighlight}
            onPointerLeave={this.toggleHighlight}
          />
          <ElementBox elem={this.state.elements.Ba} 
            onPointerEnter={this.toggleHighlight}
            onPointerLeave={this.toggleHighlight}
          />
          <ElementBox elem={this.state.elements.lanthanoids} 
            onPointerEnter={this.toggleHighlight}
            onPointerLeave={this.toggleHighlight}
          />
          <ElementBox elem={this.state.elements.La} 
            onPointerEnter={this.toggleHighlight}
            onPointerLeave={this.toggleHighlight}
          />
          <ElementBox elem={this.state.elements.Ce} 
            onPointerEnter={this.toggleHighlight}
            onPointerLeave={this.toggleHighlight}
          />
          <ElementBox elem={this.state.elements.Pr} 
            onPointerEnter={this.toggleHighlight}
            onPointerLeave={this.toggleHighlight}
          />
          <ElementBox elem={this.state.elements.Nd} 
            onPointerEnter={this.toggleHighlight}
            onPointerLeave={this.toggleHighlight}
          />
          <ElementBox elem={this.state.elements.Pm} 
            onPointerEnter={this.toggleHighlight}
            onPointerLeave={this.toggleHighlight}
          />
          <ElementBox elem={this.state.elements.Sm} 
            onPointerEnter={this.toggleHighlight}
            onPointerLeave={this.toggleHighlight}
          />
          <ElementBox elem={this.state.elements.Eu} 
            onPointerEnter={this.toggleHighlight}
            onPointerLeave={this.toggleHighlight}
          />
          <ElementBox elem={this.state.elements.Gd} 
            onPointerEnter={this.toggleHighlight}
            onPointerLeave={this.toggleHighlight}
          />
          <ElementBox elem={this.state.elements.Tb} 
            onPointerEnter={this.toggleHighlight}
            onPointerLeave={this.toggleHighlight}
          />
          <ElementBox elem={this.state.elements.Dy} 
            onPointerEnter={this.toggleHighlight}
            onPointerLeave={this.toggleHighlight}
          />
          <ElementBox elem={this.state.elements.Ho} 
            onPointerEnter={this.toggleHighlight}
            onPointerLeave={this.toggleHighlight}
          />
          <ElementBox elem={this.state.elements.Er} 
            onPointerEnter={this.toggleHighlight}
            onPointerLeave={this.toggleHighlight}
          />
          <ElementBox elem={this.state.elements.Tm} 
            onPointerEnter={this.toggleHighlight}
            onPointerLeave={this.toggleHighlight}
          />
          <ElementBox elem={this.state.elements.Yb} 
            onPointerEnter={this.toggleHighlight}
            onPointerLeave={this.toggleHighlight}
          />
          <ElementBox elem={this.state.elements.Lu} 
            onPointerEnter={this.toggleHighlight}
            onPointerLeave={this.toggleHighlight}
          />
          <ElementBox elem={this.state.elements.actinoids}
            onPointerEnter={this.toggleHighlight}
            onPointerLeave={this.toggleHighlight}
          />
          <ElementBox elem={this.state.elements.Hf} 
            onPointerEnter={this.toggleHighlight}
            onPointerLeave={this.toggleHighlight}
          />
          <ElementBox elem={this.state.elements.Ta} 
            onPointerEnter={this.toggleHighlight}
            onPointerLeave={this.toggleHighlight}
          />
          <ElementBox elem={this.state.elements.W} 
            onPointerEnter={this.toggleHighlight}
            onPointerLeave={this.toggleHighlight}
          />
          <ElementBox elem={this.state.elements.Re} 
            onPointerEnter={this.toggleHighlight}
            onPointerLeave={this.toggleHighlight}
          />
          <ElementBox elem={this.state.elements.Os} 
            onPointerEnter={this.toggleHighlight}
            onPointerLeave={this.toggleHighlight}
          />
          <ElementBox elem={this.state.elements.Ir} 
            onPointerEnter={this.toggleHighlight}
            onPointerLeave={this.toggleHighlight}
          />
          <ElementBox elem={this.state.elements.Pt} 
            onPointerEnter={this.toggleHighlight}
            onPointerLeave={this.toggleHighlight}
          />
          <ElementBox elem={this.state.elements.Au} 
            onPointerEnter={this.toggleHighlight}
            onPointerLeave={this.toggleHighlight}
          />
          <ElementBox elem={this.state.elements.Hg} 
            onPointerEnter={this.toggleHighlight}
            onPointerLeave={this.toggleHighlight}
          />
          <ElementBox elem={this.state.elements.Tl} 
            onPointerEnter={this.toggleHighlight}
            onPointerLeave={this.toggleHighlight}
          />
          <ElementBox elem={this.state.elements.Pb} 
            onPointerEnter={this.toggleHighlight}
            onPointerLeave={this.toggleHighlight}
          />
          <ElementBox elem={this.state.elements.Bi} 
            onPointerEnter={this.toggleHighlight}
            onPointerLeave={this.toggleHighlight}
          />
          <ElementBox elem={this.state.elements.Po} 
            onPointerEnter={this.toggleHighlight}
            onPointerLeave={this.toggleHighlight}
          />
          <ElementBox elem={this.state.elements.At} 
            onPointerEnter={this.toggleHighlight}
            onPointerLeave={this.toggleHighlight}
          />
          <ElementBox elem={this.state.elements.Rn} 
            onPointerEnter={this.toggleHighlight}
            onPointerLeave={this.toggleHighlight}
          />
          <ElementBox elem={this.state.elements.Fr} 
            onPointerEnter={this.toggleHighlight}
            onPointerLeave={this.toggleHighlight}
          />
          <ElementBox elem={this.state.elements.Ra} 
            onPointerEnter={this.toggleHighlight}
            onPointerLeave={this.toggleHighlight}
          />
          
          <ElementBox elem={this.state.elements.Ac} 
            onPointerEnter={this.toggleHighlight}
            onPointerLeave={this.toggleHighlight}
          />
          <ElementBox elem={this.state.elements.Th} 
            onPointerEnter={this.toggleHighlight}
            onPointerLeave={this.toggleHighlight}
          />
          <ElementBox elem={this.state.elements.Pa} 
            onPointerEnter={this.toggleHighlight}
            onPointerLeave={this.toggleHighlight}
          />
          <ElementBox elem={this.state.elements.U} 
            onPointerEnter={this.toggleHighlight}
            onPointerLeave={this.toggleHighlight}
          />
          <ElementBox elem={this.state.elements.Np} 
            onPointerEnter={this.toggleHighlight}
            onPointerLeave={this.toggleHighlight}
          />
          <ElementBox elem={this.state.elements.Pu} 
            onPointerEnter={this.toggleHighlight}
            onPointerLeave={this.toggleHighlight}
          />
          <ElementBox elem={this.state.elements.Am} 
            onPointerEnter={this.toggleHighlight}
            onPointerLeave={this.toggleHighlight}
          />
          <ElementBox elem={this.state.elements.Cm} 
            onPointerEnter={this.toggleHighlight}
            onPointerLeave={this.toggleHighlight}
          />
          <ElementBox elem={this.state.elements.Bk} 
            onPointerEnter={this.toggleHighlight}
            onPointerLeave={this.toggleHighlight}
          />
          <ElementBox elem={this.state.elements.Cf} 
            onPointerEnter={this.toggleHighlight}
            onPointerLeave={this.toggleHighlight}
          />
          <ElementBox elem={this.state.elements.Es} 
            onPointerEnter={this.toggleHighlight}
            onPointerLeave={this.toggleHighlight}
          />
          <ElementBox elem={this.state.elements.Fm} 
            onPointerEnter={this.toggleHighlight}
            onPointerLeave={this.toggleHighlight}
          />
          <ElementBox elem={this.state.elements.Md} 
            onPointerEnter={this.toggleHighlight}
            onPointerLeave={this.toggleHighlight}
          />
          <ElementBox elem={this.state.elements.No} 
            onPointerEnter={this.toggleHighlight}
            onPointerLeave={this.toggleHighlight}
          />
          <ElementBox elem={this.state.elements.Lr} 
            onPointerEnter={this.toggleHighlight}
            onPointerLeave={this.toggleHighlight}
          />
          <ElementBox elem={this.state.elements.Rf} 
            onPointerEnter={this.toggleHighlight}
            onPointerLeave={this.toggleHighlight}
          />
          <ElementBox elem={this.state.elements.Db} 
            onPointerEnter={this.toggleHighlight}
            onPointerLeave={this.toggleHighlight}
          />
          <ElementBox elem={this.state.elements.Sg} 
            onPointerEnter={this.toggleHighlight}
            onPointerLeave={this.toggleHighlight}
          /> 
          <ElementBox elem={this.state.elements.Bh} 
            onPointerEnter={this.toggleHighlight}
            onPointerLeave={this.toggleHighlight}
          />
          <ElementBox elem={this.state.elements.Hs} 
            onPointerEnter={this.toggleHighlight}
            onPointerLeave={this.toggleHighlight}
          />
          <ElementBox elem={this.state.elements.Mt} 
            onPointerEnter={this.toggleHighlight}
            onPointerLeave={this.toggleHighlight}
          />
          <ElementBox elem={this.state.elements.Ds} 
            onPointerEnter={this.toggleHighlight}
            onPointerLeave={this.toggleHighlight}
          />
          <ElementBox elem={this.state.elements.Rg} 
            onPointerEnter={this.toggleHighlight}
            onPointerLeave={this.toggleHighlight}
          />
          <ElementBox elem={this.state.elements.Cn} 
            onPointerEnter={this.toggleHighlight}
            onPointerLeave={this.toggleHighlight}
          />
          <ElementBox elem={this.state.elements.Nh} 
            onPointerEnter={this.toggleHighlight}
            onPointerLeave={this.toggleHighlight}
          />
          <ElementBox elem={this.state.elements.Fl} 
            onPointerEnter={this.toggleHighlight}
            onPointerLeave={this.toggleHighlight}
          />
          <ElementBox elem={this.state.elements.Mc} 
            onPointerEnter={this.toggleHighlight}
            onPointerLeave={this.toggleHighlight}
          />
          <ElementBox elem={this.state.elements.Lv} 
            onPointerEnter={this.toggleHighlight}
            onPointerLeave={this.toggleHighlight}
          />
          <ElementBox elem={this.state.elements.Ts} 
            onPointerEnter={this.toggleHighlight}
            onPointerLeave={this.toggleHighlight}
          />
          <ElementBox elem={this.state.elements.Og} 
            onPointerEnter={this.toggleHighlight}
            onPointerLeave={this.toggleHighlight}
          />
        </ul>
      </div>
    );
  }
}
