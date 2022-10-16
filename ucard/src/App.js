import { ThemeProvider } from 'styled-components';
import Card from './components/Card';
import {Container} from './components/styles/Container.styled';
import GlobalStyle from './components/styles/Global';
import content from './content';

const theme = {
  colors: {
    header: '#282c34',
    body: 'bone',
    footer: '#003333',
  }
}

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

// ==UNCOMMENT TO SEE THE DATABASE===

// import React from "react"
// import axios from "axios"
// import {useEffect, useState} from "react"
// import './App.css';

// function App() {
// 	const [ name, setName ] = useState("")
// 	const [ companyName, setCompanyName ] = useState("")
// 	const [ jobPosition, setJobPosition ] = useState("")
// 	const [ phoneNumber, setPhoneNumber ] = useState("")
// 	const [ email, setEmail ] = useState("")


// 	const [ cardData, setCardData] = useState("")

// 	useEffect(() => {
// 		getData()
// 	}, [])
	

// 	async function postCard(e) {
// 		e.preventDefault()
// 		try {
// 			await axios.post("http://localhost:8080/createCards2", {
// 				name, companyName, jobPosition, phoneNumber, email
// 			})
// 		} catch (error) {
// 			console.error(error)
// 		}
// 	}

// 	const getData = async () => {
// 		// return await axios.get("http://localhost:8080/getCard/634b71d848f71fc8186fd6e1")
// 		// 	.then(res => console.log(res.data);

// 		// setCardData(cardData);
// 		// console.log(cardData);

// 		// const promise = axios.get("http://localhost:8080/getCard/634b71d848f71fc8186fd6e1")
// 		// const dataPromise = promise.then((response) => response.data)
// 		// console.log(dataPromise)

// 		const response = await axios.get("http://localhost:8080/getCard/634b71d848f71fc8186fd6e1")
// 		console.log(response.data)
// 		return response.data

// 	  };

// 	// async function getCard(e) {
// 	// 	e.preventDefault()
// 	// 	axios.get("http://localhost:8080/getCard/634b71d848f71fc8186fd6e1")
// 	// 		.then(res => {
// 	// 			const cardData = res.data;
// 	// 			this.setState({cardData})
// 	// 		})
// 	// }

// 	return (
// 		<div className="App">
// 			<form onSubmit={postCard}>
// 				<input type="text" value={name} onChange={(e) => setName(e.target.value)} />
// 				<input type="text" value={companyName} onChange={(e) => setCompanyName(e.target.value)} />
// 				<input type="text" value={jobPosition} onChange={(e) => setJobPosition(e.target.value)} />
// 				<input type="text" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
// 				<input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
// 				<button type="submit">Send Card</button>
// 			</form>
			
// 		</div>

//     )
//   }
  
//   export default App
