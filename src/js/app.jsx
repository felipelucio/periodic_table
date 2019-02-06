import React from 'react';

import ElementBox from './elementbox';
import data from './data';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { elements: data };
  }

  render() {
    return (
      <ul className="table">
        <li class="g1">1</li>
        <li class="g2">2</li>
        <li class="g3">3</li>
        <li class="g4">4</li>
        <li class="g5">5</li>
        <li class="g6">6</li>
        <li class="g7">7</li>
        <li class="g8">8</li>
        <li class="g9">9</li>
        <li class="g10">10</li>
        <li class="g11">11</li>
        <li class="g12">12</li>
        <li class="g13">13</li>
        <li class="g14">14</li>
        <li class="g15">15</li>
        <li class="g16">16</li>
        <li class="g17">17</li>
        <li class="g18">18</li>
        <li class="p1">1</li>
        <li class="p2">2</li>
        <li class="p3">3</li>
        <li class="p4">4</li>
        <li class="p5">5</li>
        <li class="p6">6</li>
        <li class="p7">7</li>
        <li class="p8">8</li>
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
        <li class="lanthanoids lanthanoid">57-71</li>
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
        <li class="actinoids actinoid">89-103</li>
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
    );
  }
}
