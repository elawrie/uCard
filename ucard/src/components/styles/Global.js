import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

* { 
    box-sizing: border-box;
}

body {
    background: ${({ theme }) => theme.colors.body};
    color: hsl(192, 100%, 9%);
    fontt-family: 'Poppins', sans-serif;
    font-size: 1.15em;
    margin: 0;
}

p {
    opacity: 0.6;
    line-height: 1.5;
}
`

export default GlobalStyle;