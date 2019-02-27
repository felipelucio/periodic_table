import React from 'react';

export default class ElementPage extends React.Component {
  render() {
    let el = this.props.element;
    let show = this.props.show_page ? 'show' : '';
    let lang = this.props.curr_lang;
    
    return (
      <div className={`elementpage ${show}`}
      >
        <button type="button" className="close" aria-label="Close"
          onClick={this.props.closeElemPage}
        >
          <span aria-hidden="true">&times;</span>
        </button>

        {el &&
          <h1 className="name">{el.getName(lang)}</h1>
        }
      </div>
    );
  }
}
