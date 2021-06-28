import Hero from "./styles";

const HeroImage: React.FC = () => {
    return (
        <>
            <Hero>
                <main className="heroImage">
                        <a href="https://www.linkedin.com/in/george-henrique/">
                            <img className="imageProfile" src="https://avatars.githubusercontent.com/u/50784458?v=4" alt="Profile" title="Profile" />
                        </a>
                        <h1>Eu sou George Henrique</h1>
                        <p>Um estudante em programação com foco em full - stack, como linguagem de programação principal Java/Spring Boot para backend e para o frontend JavaScript/TypeScript.</p>
                        <p>Aprender outras tecnologias é uma necessidade ainda mais com o mundo da tecnologia tão movimentado, por isso eu vejo a necessidade de conhecer um pouco de tudo hoje em dia.</p>
                        <p>Como programador tenho necessidade de conhecer outras tecnologias também como:</p>
                        <p>
                            <strong>Git/GitHub</strong>, <strong>Heroku</strong>, <strong>Linux</strong>, <strong>Docker</strong>, <strong>MySQL</strong>, <strong>PostgreSQL</strong>, <strong>Angular</strong>, <strong>ReactJS</strong>, <strong>SASS</strong>.
                        </p>
                </main>
            </Hero>
        </>
    );
}

export default HeroImage;