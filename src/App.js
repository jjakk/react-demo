import React from 'react';
import './App.css';

function addTask(){
  
}

function App() {
  return (
    <div className="App">
      <title>React Demo</title>
      <h1>React Demo</h1>
      <h2>To Do List</h2>
      <input id='taskInput' type='string' placeholder='task'></input>
      <button onclick={addTask()}>Add</button>
      <br/>
      <ol id='tasks'></ol>
    </div>
  );
}

export default App;
