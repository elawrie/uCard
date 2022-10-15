import {useState} from 'react';
import './App.css';

const Person = (props) => {
  return (
    <>
      <h1>Name: {props.name} </h1>
      <h2>Email: {props.email}</h2>
      <h2>Number: {props.number}</h2> 
    </>
  );
}
const App = () => {
  return (
    
    <div className="App">
      <button onClick={() => alert('button pressed')}>Create uCard</button> 
      <Person name={'Tyler Kay'} email={'coolemail@email.net'} number={451671328}/>
      <button onClick={() => alert('button pressed')}>Recieve uCard</button> 
    </div>
  );
}

export default App;
