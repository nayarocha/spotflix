import React from 'react';
import Logo from '../../assets/images/logo.png';
import './Menu.css';
import Button from '../Button';
//import ButtonLink from './components/ButtonLink';

function Menu(){
    return(
        <nav className="Menu">
            <a href="/"> 
              <img className="Logo" src={Logo} alt="SpotFlix home" />
            </a>

            <Button as="a" className="ButtonLink" href="/" >
                Novo vídeo
            </Button>

        </nav>
    );
}


export default Menu;