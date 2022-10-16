import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import './App.css';
import {Container} from './components/styles/Container.styled';
import Card from './components/Card';
// import Header from './components/styles/Header';
import GlobalStyle from './components/styles/Global';
import content from './Content';

const theme = {
  colors: {
    header: '#282c34',
    body: 'bone',
    footer: '#003333',
  }
}

// const Person = (props) => {
//   return (
//     <>
//       <h1>Name: {props.name} </h1>
//       <h2>Email: {props.email}</h2>
//       <h2>Number: {props.number}</h2> 
//     </>
//   );
// }
const App = () => {
  
  return (
    <ThemeProvider theme={theme}>
      <>
      <GlobalStyle />
        <Container>
          {content.map((item, index) => (
            <Card key={index} item={item} />
          ))}
        </Container>
      </>
    </ThemeProvider>
  );
}

export default App