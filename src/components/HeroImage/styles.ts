import styled from "styled-components";

const Hero = styled.main `
    main.heroImage {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        line-height: 3rem;
        margin-top: 4%;
        height: 100%;
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
    // TV Device 
    @media (min-width: 1440px) and (max-width: 2560px) {
        main.HeroImage {
            margin-top: 30%;

        }
        h1 { font-size: 3em; }
        p { 
            font-size: 1.5em; 
            min-width: 30%;
            max-width: 80%;
        }
    }
`;

export default Hero;