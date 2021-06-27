import { Link } from "react-router-dom"

const Header: React.FC = () => {
    return (
        <header>
            <div className="center">
                <p className="text-logo">George Henrique</p>
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
            </div>
        </header>
    );
}

export default Header;