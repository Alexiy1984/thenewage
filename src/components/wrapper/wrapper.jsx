import React from 'react';
import './wrapper.scss';

export default class Wrapper extends React.Component {
  constructor (props) {
    super(props)
  }
  showProps(props) {
    console.log(`this props ${props}`);
  }
  render() {
    return (
      <div className={`wrapper ${this.props.color!=undefined ? this.props.color : ''}`}  onLoad={this.showProps(this.props.flex)}>
        <div className={`wrapper__inner${this.props.flex==undefined?'':this.props.flex}`}>       
          {this.props.children}
        </div>
      </div>
    );
  }
}
