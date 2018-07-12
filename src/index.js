import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header/header';
import Wrapper from './components/wrapper/wrapper';
import Card from './components/card/card';
import './app.scss';
import './styles/_hidden.scss';
import image from './assets/images/person.png';
import Row from './components/row/row';
import data from'./assets/json/personas.json';

const title = 'The New Age is begin';

const theme = 'theme-one';

const jsondesr = {
  member_1 : {
    name: 'Rolf',
    image: image,
    proff: 'web-developer',
    maindescr: 'Laborum magna sint nostrud occaecat laborum elit cillum qui dolor labore. Velit nulla id dolor exercitation. Consectetur cupidatat culpa labore veniam consequat labore. Culpa culpa adipisicing fugiat cillum dolore excepteur incididunt ad dolore veniam labore deserunt minim. Non reprehenderit sit incididunt nulla labore do eiusmod cillum amet laborum magna. Ex dolor ullamco ex tempor ea nulla do adipisicing laboris laboris id minim laborum velit.'
  },
  member_2 : {
    name: 'Matt',
    image: image,
    proff: 'web-designer',
    maindescr: 'Laborum magna sint nostrud occaecat laborum elit cillum qui dolor labore. Velit nulla id dolor exercitation. Consectetur cupidatat culpa labore veniam consequat labore. Culpa culpa adipisicing fugiat cillum dolore excepteur incididunt ad dolore veniam labore deserunt minim. Non reprehenderit sit incididunt nulla labore do eiusmod cillum amet laborum magna. Ex dolor ullamco ex tempor ea nulla do adipisicing laboris laboris id minim laborum velit.'
  },
  member_3 : {
    name: 'Bill',
    image: image,
    proff: 'hr',
    maindescr: 'Laborum magna sint nostrud occaecat laborum elit cillum qui dolor labore. Velit nulla id dolor exercitation. Consectetur cupidatat culpa labore veniam consequat labore. Culpa culpa adipisicing fugiat cillum dolore excepteur incididunt ad dolore veniam labore deserunt minim. Non reprehenderit sit incididunt nulla labore do eiusmod cillum amet laborum magna. Ex dolor ullamco ex tempor ea nulla do adipisicing laboris laboris id minim laborum velit.'
  }
}

const Headline = () => {
  return <h1 className="test-class _hidden">Simple (stateless) React component</h1>
};

const TextNoReturn = () => (
  <p className='_hidden'>Simple component which hasn't return</p>
);

const Intro = () => {
  return (
    <div>
      <Headline />
      <p className='_hidden'>Welcome to the React world!</p>
    </div>)
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date()
    };
  }
  render() {
    return (

      <div>
        <Header name='Alex' id='001' color={theme}/>
        <Wrapper flex='_flex_column' color={theme}>
          <Intro />
          < TextNoReturn />
          <p className='_hidden'>It is Advanced React component with state Date: {this.state.date.toLocaleTimeString()}.</p>
          <Row>
            <Card imgurl={jsondesr.member_1.image} name={jsondesr.member_1.name}  proff={jsondesr.member_1.proff} descr={jsondesr.member_1.maindescr} color={theme}/>
            <Card imgurl={jsondesr.member_2.image} name={jsondesr.member_2.name}  proff={jsondesr.member_2.proff} descr={jsondesr.member_2.maindescr} color={theme}/>
            <Card imgurl={jsondesr.member_3.image} name={jsondesr.member_3.name}  proff={jsondesr.member_3.proff} descr={jsondesr.member_3.maindescr} color={theme}/>
            <Card imgurl={image} name={data.member_4.name}  proff={data.member_4.proff} descr={data.member_4.maindescr} color={theme}/>
          </Row>  
        </Wrapper>
      </div>
    )
  }
}

ReactDOM.render(
  // <div>{title}</div>,
  <App />,
  document.getElementById('app')
);

let ecmatest = 23;

console.log('webpack start correctly');
console.log(`HI ${ecmatest} + 12 = ${ecmatest = ecmatest + 12}`);

module.hot.accept();
