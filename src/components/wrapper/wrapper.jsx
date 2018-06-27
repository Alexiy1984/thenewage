import React from 'react';
import './wrapper.scss';

export default class Wrapper extends React.Component {
  constructor (props) {
    super(props)
  }
  render() {
    return (
      <div className="wrapper">
        <div className="wrapper__inner">       
          {this.props.children}
        </div>
      </div>
    );
  }
}
