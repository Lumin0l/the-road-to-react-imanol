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


  return (
    <div className="App">
      <h1> Hello World, again { getName('Imanol') } </h1>

      <label htmlFor="search">Search: </label>
      <input id='search' type='text' />

      {testElement}
    </div>
  );
}

export default App;
