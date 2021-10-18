import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle `
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
        font-family: 'Roboto';
    }
    html { height: 100%; }
    body {
        display:flex; 
        flex-direction:column; 
        height: 100vh;
        background-color: ${props => props.theme.colors.background};
        color: ${props => props.theme.colors.foreground};
    }
    p {
        font-family: 'Roboto', sans-serif;
        font-size: 1.1em;
        font-weight: 500;
        line-height: 1.9em;
        min-width: 20%;
        max-width: 60%;
    }
    strong {
        font-family: 'Roboto', sans-serif;
        font-weight: 700;
        font-size: 1em;
        color: ${props => props.theme.colors.links};
    }
    hr {
        margin-top: 2em;
        border: 0;
        height: 1px;
        background-image: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0));
    }
`;

export default GlobalStyles;