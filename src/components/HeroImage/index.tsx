import Hero from "./styles";

const HeroImage: React.FC = () => {
    return (
        <>
            <Hero>
                <main className="heroImage">
                    <div className="hero">
                        <a href="https://www.linkedin.com/in/george-henrique/">
                            <img className="imageProfile" src="https://avatars.githubusercontent.com/u/50784458?v=4" alt="Profile" title="Profile" />
                        </a>
                        <h1>Eu sou George Henrique</h1>
                        <p>Um estudante em programação com foco em full - stack, como linguagem principal Java/Spring Boot para backend e JavaScript/Angular para o frontend.</p>
                        <p>Como programador tenho necessário de conhecimentos em outras tecnologias também em:</p>
                        <p>
                            <strong>Git/GitHub</strong>, <strong>Heroku</strong>, <strong>Linux</strong>, <strong>MySQL</strong>, <strong>PostgreSQL</strong>, <strong>TypeScript</strong>, <strong>ReactJS</strong>, <strong>SASS</strong>.
                        </p>
                    </div>
                </main>
            </Hero>
        </>
    );
}

export default HeroImage;