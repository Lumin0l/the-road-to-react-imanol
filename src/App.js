import * as React from 'react';
import './App.css';

function App() {

  function getName(newName) {
    return newName
  }

  const testElement = React.createElement (
    'h2',
    {className: "testElement"},
    'I am test!'
  );

    const testArray = ['one', 'two', 'three', 'four', 'five']

  return (
    <div className="App">
      <h1> Hello World, again { getName('Imanol') } </h1>

      <label htmlFor="search">Search: </label>
      <input id='search' type='text' />

      {testElement}

      <ul>
      {
        testArray.map((item, index) => (
          <li key={index}>{item}</li>
        ))
      }
      </ul>
    </div>
  );
}

export default App;
