import React from 'react';
import logo from './logo.svg';
import './App.css';

const App = () => {

  const APP_ID = '51112906';
  const APP_KEY = '8bf8d43678764ac9440ebe87103a7360';

  const exampleRequest = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;

  return (
    <div className="App">
      <form className='search-form'>
        <input className='search-bar' type='text'/>
        <button className='search-button' type='submit'>Search</button>
      </form>
    </div>
  );
}

export default App;
