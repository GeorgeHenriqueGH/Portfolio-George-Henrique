import { Link } from "react-router-dom"

import Cabecalho from "./style";

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
                                    <Link to="#">SOBRE MIM</Link>
                                </li>
                                <li>
                                    <Link to="#">CONTATOS</Link>
                                </li>
                                <li>
                                    <Link to="#">PROJETOS</Link>
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