import React from 'react';
import ReactDOM from 'react-dom';

const title = 'The New Age is begin';

ReactDOM.render(
  <div>{title}</div>,
  document.getElementById('app')
);

let ecmatest = 23;

console.log('webpack start correctly');
console.log(`HI ${ecmatest} + 12 = ${ecmatest = ecmatest + 12}`)

module.hot.accept();
