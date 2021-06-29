import Cabecalho from "./styles";

const Header: React.FC = () => {
    return (
        <>
            <Cabecalho>
                <header>
                    <div className="center">
                        <p className="text-logo">George Henrique</p>
                        <nav className="links">
                            <ul>
                                <li>
                                    <a href="https://www.github.com/GeorgeHenriqueGH/">
                                        <img src="https://img.icons8.com/ios-filled/30/000000/github.png" alt="GitHub" title="GitHub" />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.linkedin.com/in/george-henrique/">
                                        <img src="https://img.icons8.com/ios-filled/30/000000/linkedin.png" alt="Linkedin" title="Linkedin" />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.facebook.com/gh.capitulinocardosocampos.7/">
                                        <img src="https://img.icons8.com/ios-filled/30/000000/facebook--v1.png" alt="Facebook" title="Facebook" />
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </header>
            </Cabecalho>
        </>
    );
}

export default Header;