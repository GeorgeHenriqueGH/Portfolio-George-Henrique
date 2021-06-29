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
        font-family: 'Roboto', sans-serif;
        font-weight: bolder;
        font-size: 1.5em;
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
`;

export default Cabecalho;