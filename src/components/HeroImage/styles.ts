import styled from "styled-components";

const Hero = styled.main `
    main.heroImage {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        line-height: 3rem;
        margin-top: 3%;
    }
    img.imageProfile {
        width: 200px;
        height: 200px;
        border-radius: 50%;
        border: 3px solid ${props => props.theme.colors.secundaryBackground};
    }
    h1 {
        font-family: 'Roboto', sans-serif;
        font-weight: bolder;
        color: ${props => props.theme.colors.secundaryForeground};
        margin-bottom: 1%;
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
`;

export default Hero;