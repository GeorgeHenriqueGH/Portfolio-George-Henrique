import styled from "styled-components";

const Cabecalho = styled.header `
    header {
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 50px;
        background-color: rgba(60,56,54, 0.7);
    }
    div.center {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 90%;
        max-width: 90%;
    }
    p.text-logo {
        font-family: 'Pacifico', sans-serif;
        font-weight: bolder;
        font-size: 1.5em;
        color: ${props => props.theme.colors.secundaryForeground};
        text-shadow: 2px 8px 6px rgba(0,0,0,0.2), 0px -5px 35px rgba(255,255,255,0.3);
    }
    nav.links { 
        display: flex;
        align-items: center;
        text-align: center;
    }
    nav.links ul { list-style: none; }
    nav.links ul li {
        display: inline;
        padding: 1em;
    }
    // Mobile
    @media (min-width: 320px) and (max-width: 425px) {
        div.center { 
            width: 95%; 
            max-width: 95%;
        }
        p.text-logo { font-size: 1.2em; }
        nav.links ul li { padding: 0.5em; }
    }
`;

export default Cabecalho;