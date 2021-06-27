import styled from "styled-components";

const Cabecalho = styled.header `
    header {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        width: 100%;
    }
    div.center {
        display: flex;
        justify-content: space-between;
        width: 80%;
        max-width: 80%;
    }
    nav.links ul { list-style: none; }
    nav.links ul li {
        display: inline;
        padding: 1em;
    }
    nav.links ul li a {
        text-decoration: none;
    }
`;

export default Cabecalho;