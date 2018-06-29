import React from 'react';
import './row.scss'

export default class Row extends React.Component {
  constructor (props) {
    super(props)
  }
  render() {
    return (
      <div className='row'>
        {this.props.children}
      </div>
    )
  }
};
