import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle `
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;900&display=swap');

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