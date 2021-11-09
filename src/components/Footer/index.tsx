import React from 'react';
import Rodape from './styles';

const Footer: React.FC= () => {
    return (
        <>
            <Rodape>
                <footer>
                    <div className="div-footer">
                        <p>&#169; Portfolio-george-henrique.netlify.app 2021</p>
                        <p>Feito com <strong className="heart">&#9829;</strong> <strong className="br">🇧🇷</strong></p>
                    </div>
                </footer>
            </Rodape>
        </>
    );
}

export default Footer;