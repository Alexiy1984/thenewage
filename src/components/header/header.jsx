import React from 'react';
import './header.scss';

export default class Header extends React.Component {
  constructor (props) {
    super(props);
    this.state = {id: '001', name:'Lex', tempName: '', clicked: false};
    this.changeName = this.changeName.bind(this);
  }
  changeName(){
    if (this.state.clicked == false) {
      this.setState(prevState => ({
        clicked   : prevState.clicked = true,
        tempName  : prevState.name,
        name      : this.props.name
      }));
    } else  this.setState(prevState => ({
      clicked   : prevState.clicked = false,
      tempName  : prevState.name,
      name      : prevState.tempName  
    }));
  }
  render() {
    return (
      <div className="header" id="header">
        <div className="header__inner">       
          <h1 onClick={this.changeName}>Добро пожаловать {this.state.name}</h1>
        </div>
      </div>
    );
  }
}
