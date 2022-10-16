import { useState } from 'react';
import './App.css';
import {Container} from './components/styles/Container.styled';
import Header from './components/Styles';

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
    <>
    <Header />
    <Container>
      <div className="App">
        <button onClick={() => alert('button pressed')}>Create uCard</button> 
        <Person name={'Tyler Kay'} email={'coolemail@email.net'} number={451671328}/>
        <button onClick={() => alert('button pressed')}>Recieve uCard</button> 
      </div>
    </Container>
    </>
  );
}

export default App