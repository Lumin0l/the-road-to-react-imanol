import * as React from 'react';
import './App.css';

function App() {

  function getName(newName) {
    return newName
  }


  return (
    <div className="App">
      <h1> Hello World, again { getName('Imanol') } </h1>

      <label htmlFor="search">Search: </label>
      <input id='search' type='text' />
    </div>
  );
}

export default App;
