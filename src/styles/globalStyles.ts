import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle `
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
        font-family: 'Roboto';
    }
    body {
        background-color: ${props => props.theme.colors.background};
        color: ${props => props.theme.colors.foreground};
    }
`;

export default GlobalStyles;