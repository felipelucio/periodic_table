import React from 'react';

export default class ElementPage extends React.Component {
  render() {
    let el = this.props.element;
    
    return (
      <div className={`elementpage ${el ? 'show' : ''}`}
      >
        <button type="button" className="close" aria-label="Close"
          onClick={this.props.closeElemPage}
        >
          <span aria-hidden="true">&times;</span>
        </button>

        {el &&
          <h1 className="name">{el.getName(this.props.curr_lang)}</h1>
        }
      </div>
    );
  }
}
