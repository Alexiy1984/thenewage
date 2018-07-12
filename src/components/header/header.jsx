import React from 'react';
import './header.scss';
import {Button} from '../button/button';

export default class Header extends React.Component {
  constructor (props) {
    super(props);
    this.state = {id: '001', name:'Lex', tempName: '', clicked: false};
    this.changeName = this.changeName.bind(this);
  }
  changeName(){
    if (this.state.clicked == false) {
      this.setState(prevState => ({
        clicked   : true,
        tempName  : prevState.name,
        name      : this.props.name
      }));
    } else  this.setState(prevState => ({
      clicked   : false,
      tempName  : prevState.name,
      name      : prevState.tempName  
    }));
  }
  render() {
    return (
      <div className={`header ${this.props.color!=undefined ? this.props.color : ''}`} id="header">
        <div className="header__inner">       
          <h2 className="header__heading" onClick={this.changeName}>Добро пожаловать {this.state.name}</h2>
          <Button value='Second page' color={this.props.color}/>
          <Button value='Third page' color={this.props.color}/>
          <Button value='Login' color={this.props.color}/>
          <Button value='Change color' color={this.props.color}/>
        </div>
      </div>
    );
  }
}
