import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header/header';
import Wrapper from './components/wrapper/wrapper';
import './test.scss';

const title = 'The New Age is begin';

const Headline = () => {
  return <h1 className="test-class">Simple (stateless) React component</h1>
};

const TextNoReturn = () => (
  <p>Simple component which hasn't return</p>
);

const Intro = () => {
  return (
  <div>
      <Headline />
      <p>Welcome to the React world!</p> 
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
            <Header name='Alex' id='001'/>
            <Wrapper>
              <Intro />
              < TextNoReturn /> 
              <p>It is Advanced React component with state Date: {this.state.date.toLocaleTimeString()}.</p>
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
