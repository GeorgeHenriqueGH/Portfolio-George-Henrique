import styled from "styled-components";

const Rodape = styled.footer `
    footer {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        width: 100%;
        position: absolute;
        right: 0;
        bottom: 0;
        left: 0;
        background-color: rgba(60,56,54, 0.7);
    }
    .rodape {
        width: 100%;
        text-align: center;
    }
    p {
        line-height: 1.5pc;
    }
    .heart {
        color: #dc143c;
        font-weight: bolder;
        font-size: 1.5em;
    }
    .br {
        color: #009638;
        font-weight: bolder;
        font-size: 1.3em;
    }
`;

export default Rodape;