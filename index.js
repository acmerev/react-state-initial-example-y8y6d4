import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

class Hello extends React.Component {
  state = {
    name: 'James',
    edad: 25,
  };
  render() {
    return (
      <h1>
        Hello {this.state.name} {this.state.edad}.
      </h1>
    );
  }
}

const el = <Hello />;
ReactDOM.render(el, document.getElementById('root'));
