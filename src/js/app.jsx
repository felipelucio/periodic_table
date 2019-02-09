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
    

    this.handlePointOver = this.handlePointOver.bind(this);
    this.toggleHighlightPeriod = this.toggleHighlightPeriod.bind(this);
    this.toggleHighlightGroup = this.toggleHighlightGroup.bind(this);
  }

  handlePointOver(e) {
    
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

    this.toggleElementsClass(elems, 'disabled');
  }

  toggleElementsClass(elems, class_name) {
    this.setState(function(state, prop) {
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

    this.toggleElementsClass(elems, 'disabled');
  }

  render() {
    return (
      <div>
        <NavBar />
        <ul className="table">
          <li data-key="g1" className="g1"
            onPointerEnter={this.toggleHighlightGroup}
            onPointerLeave={this.toggleHighlightGroup}
          >1</li>
          <li data-key="g2" className="g2"
            onPointerEnter={this.toggleHighlightGroup}
            onPointerLeave={this.toggleHighlightGroup}
          >2</li>
          <li data-key="g3" className="g3"
            onPointerEnter={this.toggleHighlightGroup}
            onPointerLeave={this.toggleHighlightGroup}
          >3</li>
          <li data-key="g4" className="g4"
            onPointerEnter={this.toggleHighlightGroup}
            onPointerLeave={this.toggleHighlightGroup}
          >4</li>
          <li data-key="g5" className="g5"
            onPointerEnter={this.toggleHighlightGroup}
            onPointerLeave={this.toggleHighlightGroup}
          >5</li>
          <li data-key="g6" className="g6"
            onPointerEnter={this.toggleHighlightGroup}
            onPointerLeave={this.toggleHighlightGroup}
          >6</li>
          <li data-key="g7" className="g7"
            onPointerEnter={this.toggleHighlightGroup}
            onPointerLeave={this.toggleHighlightGroup}
          >7</li>
          <li data-key="g8" className="g8"
            onPointerEnter={this.toggleHighlightGroup}
            onPointerLeave={this.toggleHighlightGroup}
          >8</li>
          <li data-key="g9" className="g9"
            onPointerEnter={this.toggleHighlightGroup}
            onPointerLeave={this.toggleHighlightGroup}
          >9</li>
          <li data-key="g10" className="g10"
            onPointerEnter={this.toggleHighlightGroup}
            onPointerLeave={this.toggleHighlightGroup}
          >10</li>
          <li data-key="g11" className="g11"
            onPointerEnter={this.toggleHighlightGroup}
            onPointerLeave={this.toggleHighlightGroup}
          >11</li>
          <li data-key="g12" className="g12"
            onPointerEnter={this.toggleHighlightGroup}
            onPointerLeave={this.toggleHighlightGroup}
          >12</li>
          <li data-key="g13" className="g13"
            onPointerEnter={this.toggleHighlightGroup}
            onPointerLeave={this.toggleHighlightGroup}
          >13</li>
          <li data-key="g14" className="g14"
            onPointerEnter={this.toggleHighlightGroup}
            onPointerLeave={this.toggleHighlightGroup}
          >14</li>
          <li data-key="g15" className="g15"
            onPointerEnter={this.toggleHighlightGroup}
            onPointerLeave={this.toggleHighlightGroup}
          >15</li>
          <li data-key="g16" className="g16"
            onPointerEnter={this.toggleHighlightGroup}
            onPointerLeave={this.toggleHighlightGroup}
          >16</li>
          <li data-key="g17" className="g17"
            onPointerEnter={this.toggleHighlightGroup}
            onPointerLeave={this.toggleHighlightGroup}
          >17</li>
          <li data-key="g18" className="g18"
            onPointerEnter={this.toggleHighlightGroup}
            onPointerLeave={this.toggleHighlightGroup}
          >18</li>
          <li data-key="p1" className="p1"
            onPointerEnter={this.toggleHighlightPeriod}
            onPointerLeave={this.toggleHighlightPeriod}
          >1</li>
          <li data-key="p2" className="p2"
            onPointerEnter={this.toggleHighlightPeriod}
            onPointerLeave={this.toggleHighlightPeriod}
          >2</li>
          <li data-key="p3" className="p3"
            onPointerEnter={this.toggleHighlightPeriod}
            onPointerLeave={this.toggleHighlightPeriod}
          >3</li>
          <li data-key="p4" className="p4"
            onPointerEnter={this.toggleHighlightPeriod}
            onPointerLeave={this.toggleHighlightPeriod}
          >4</li>
          <li data-key="p5" className="p5"
            onPointerEnter={this.toggleHighlightPeriod}
            onPointerLeave={this.toggleHighlightPeriod}
          >5</li>
          <li data-key="p6" className="p6"
            onPointerEnter={this.toggleHighlightPeriod}
            onPointerLeave={this.toggleHighlightPeriod}
          >6</li>
          <li data-key="p7" className="p7"
            onPointerEnter={this.toggleHighlightPeriod}
            onPointerLeave={this.toggleHighlightPeriod}
          >7</li>
          <ElementBox elem={this.state.elements.H} />
          <ElementBox elem={this.state.elements.He} />
          <ElementBox elem={this.state.elements.Li} />
          <ElementBox elem={this.state.elements.Be} />
          <ElementBox elem={this.state.elements.B} />
          <ElementBox elem={this.state.elements.C} />
          <ElementBox elem={this.state.elements.N} />
          <ElementBox elem={this.state.elements.O} />
          <ElementBox elem={this.state.elements.F} />
          <ElementBox elem={this.state.elements.Ne} />
          <ElementBox elem={this.state.elements.Na} />
          <ElementBox elem={this.state.elements.Mg} />
          <ElementBox elem={this.state.elements.Al} />
          <ElementBox elem={this.state.elements.Si} />
          <ElementBox elem={this.state.elements.P} />
          <ElementBox elem={this.state.elements.S} />
          <ElementBox elem={this.state.elements.Cl} />
          <ElementBox elem={this.state.elements.Ar} />
          <ElementBox elem={this.state.elements.K} />
          <ElementBox elem={this.state.elements.Ca} />
          <ElementBox elem={this.state.elements.Sc} />
          <ElementBox elem={this.state.elements.Ti} />
          <ElementBox elem={this.state.elements.V} />
          <ElementBox elem={this.state.elements.Cr} />
          <ElementBox elem={this.state.elements.Mn} />
          <ElementBox elem={this.state.elements.Fe} />
          <ElementBox elem={this.state.elements.Co} />
          <ElementBox elem={this.state.elements.Ni} />
          <ElementBox elem={this.state.elements.Cu} />
          <ElementBox elem={this.state.elements.Zn} />
          <ElementBox elem={this.state.elements.Ga} />
          <ElementBox elem={this.state.elements.Ge} />
          <ElementBox elem={this.state.elements.As} />
          <ElementBox elem={this.state.elements.Se} />
          <ElementBox elem={this.state.elements.Br} />
          <ElementBox elem={this.state.elements.Kr} />
          <ElementBox elem={this.state.elements.Rb} />
          <ElementBox elem={this.state.elements.Sr} />
          <ElementBox elem={this.state.elements.Y} />
          <ElementBox elem={this.state.elements.Zr} />
          <ElementBox elem={this.state.elements.Nb} />
          <ElementBox elem={this.state.elements.Mo} />
          <ElementBox elem={this.state.elements.Tc} />
          <ElementBox elem={this.state.elements.Ru} />
          <ElementBox elem={this.state.elements.Rh} />
          <ElementBox elem={this.state.elements.Pd} />
          <ElementBox elem={this.state.elements.Ag} />
          <ElementBox elem={this.state.elements.Cd} />
          <ElementBox elem={this.state.elements.In} />
          <ElementBox elem={this.state.elements.Sn} />
          <ElementBox elem={this.state.elements.Sb} />
          <ElementBox elem={this.state.elements.Te} />
          <ElementBox elem={this.state.elements.I} />
          <ElementBox elem={this.state.elements.Xe} />
          <ElementBox elem={this.state.elements.Cs} />
          <ElementBox elem={this.state.elements.Ba} />
          <ElementBox className="lanthanoid" elem={this.state.elements.lanthanoids} />
          <ElementBox elem={this.state.elements.La} />
          <ElementBox elem={this.state.elements.Ce} />
          <ElementBox elem={this.state.elements.Pr} />
          <ElementBox elem={this.state.elements.Nd} />
          <ElementBox elem={this.state.elements.Pm} />
          <ElementBox elem={this.state.elements.Sm} />
          <ElementBox elem={this.state.elements.Eu} />
          <ElementBox elem={this.state.elements.Gd} />
          <ElementBox elem={this.state.elements.Tb} />
          <ElementBox elem={this.state.elements.Dy} />
          <ElementBox elem={this.state.elements.Ho} />
          <ElementBox elem={this.state.elements.Er} />
          <ElementBox elem={this.state.elements.Tm} />
          <ElementBox elem={this.state.elements.Yb} />
          <ElementBox elem={this.state.elements.Lu} />
          <ElementBox className="actinoid" elem={this.state.elements.actinoids} />
          <ElementBox elem={this.state.elements.Hf} />
          <ElementBox elem={this.state.elements.Ta} />
          <ElementBox elem={this.state.elements.W} />
          <ElementBox elem={this.state.elements.Re} />
          <ElementBox elem={this.state.elements.Os} />
          <ElementBox elem={this.state.elements.Ir} />
          <ElementBox elem={this.state.elements.Pt} />
          <ElementBox elem={this.state.elements.Au} />
          <ElementBox elem={this.state.elements.Hg} />
          <ElementBox elem={this.state.elements.Tl} />
          <ElementBox elem={this.state.elements.Pb} />
          <ElementBox elem={this.state.elements.Bi} />
          <ElementBox elem={this.state.elements.Po} />
          <ElementBox elem={this.state.elements.At} />
          <ElementBox elem={this.state.elements.Rn} />
          <ElementBox elem={this.state.elements.Fr} />
          <ElementBox elem={this.state.elements.Ra} />
          
          <ElementBox elem={this.state.elements.Ac} />
          <ElementBox elem={this.state.elements.Th} />
          <ElementBox elem={this.state.elements.Pa} />
          <ElementBox elem={this.state.elements.U} />
          <ElementBox elem={this.state.elements.Np} />
          <ElementBox elem={this.state.elements.Pu} />
          <ElementBox elem={this.state.elements.Am} />
          <ElementBox elem={this.state.elements.Cm} />
          <ElementBox elem={this.state.elements.Bk} />
          <ElementBox elem={this.state.elements.Cf} />
          <ElementBox elem={this.state.elements.Es} />
          <ElementBox elem={this.state.elements.Fm} />
          <ElementBox elem={this.state.elements.Md} />
          <ElementBox elem={this.state.elements.No} />
          <ElementBox elem={this.state.elements.Lr} />
          <ElementBox elem={this.state.elements.Rf} />
          <ElementBox elem={this.state.elements.Db} />
          <ElementBox elem={this.state.elements.Sg} /> 
          <ElementBox elem={this.state.elements.Bh} />
          <ElementBox elem={this.state.elements.Hs} />
          <ElementBox elem={this.state.elements.Mt} />
          <ElementBox elem={this.state.elements.Ds} />
          <ElementBox elem={this.state.elements.Rg} />
          <ElementBox elem={this.state.elements.Cn} />
          <ElementBox elem={this.state.elements.Nh} />
          <ElementBox elem={this.state.elements.Fl} />
          <ElementBox elem={this.state.elements.Mc} />
          <ElementBox elem={this.state.elements.Lv} />
          <ElementBox elem={this.state.elements.Ts} />
          <ElementBox elem={this.state.elements.Og} />
        </ul>
      </div>
    );
  }
}
