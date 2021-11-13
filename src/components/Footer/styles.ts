import styled from "styled-components";

const Rodape = styled.footer `
    footer {
        display: flex;
        justify-content: center;
        flex-direction: column;
        position: static;
        bottom: 0;
        left: 0;
        width: 100%;
        text-align: center;
        padding: 4.4px;
        background-color: rgba(60,56,54, 0.7);
    }
    div.div-footer {
       // margin-left: 22%;
        width: 20%;
    }
    p {
        font-size: 0.9em;
        line-height: 1.3pc;
        margin-left: 19%;
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
        div.div-footer {
            margin-left: 22%;
            width: 50%;
        }
        p {
            font-size: 1.1em;
        }
    }
`;

export default Rodape;