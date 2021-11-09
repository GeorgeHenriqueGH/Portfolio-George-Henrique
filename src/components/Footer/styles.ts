import styled from "styled-components";

const Rodape = styled.footer `
    footer {
        position: static;
        bottom: 0;
        left: 0;
        width: 100%;
        background-color: rgba(60,56,54, 0.7);
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
    @media(min-width: 768px) and (max-width: 2560px) {
        footer {
            position:absolute;
            bottom:0;
            width:100%;
        }
    }
`;

export default Rodape;