import React from 'react';
import './card.scss';
import './card_clicked.scss';
import './card__front.scss';
import './card__back.scss';
import './card__img.scss';
import './card__heading.scss';

export default class Card extends React.Component {
  constructor (props) {
    super(props);
    this.state = {thisClass: 'card'};
    this.changeClass = this.changeClass.bind(this);
  }
  changeClass() {
    if (this.state.thisClass == 'card') {
      this.setState({
        thisClass  : 'card_clicked'
      });
    } else this.setState({
      thisClass  : 'card'
    });
  }
  render() {
    return (
      <div className = {this.state.thisClass} onClick={this.changeClass}>
      <div className ={`card__front ${this.props.color!=undefined ? this.props.color: ''}`}>       
        <img className='card__img' src={this.props.imgurl} alt=""/>
        <h3 className='card__heading'>{this.props.name}</h3>
        <h3 className='card__heading'>{this.props.proff}</h3>
        <p>{this.props.descr}</p>
      </div>
      <div className={`card__back ${this.props.color!=undefined ? this.props.color: ''}`}>
        <p>Это back</p>
      </div>
    </div>
    );
  }
}
