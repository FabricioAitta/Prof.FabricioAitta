import React, {Fragment} from 'react';
import facebook from '../facebook.png';
import instagram from '../instagram.png';
import menuHamburger from '../menu.png';

const Navegacion = () => {
    return (
        <Fragment>
            <div className="home">
                <h1 className="home-titulo">Prof.Fabricio Aitta</h1>
            </div>
            <input type="checkbox" id="btn-menu"/>
            <label id="label-menu" htmlFor="btn-menu"><img id="img-menu" src={menuHamburger} alt="icono menu"/></label>
           
            <nav className="nav-bar">
             <ul className="ul">
                <a className="a" href="#posteos"><li className="li">Posteos</li></a>
                <a className="a" href="#quien-soy"><li className="li">Quien soy</li></a>
                <a className="a" href="#contacto"><li className="li">Contactame</li></a>
                <a className="a" href="https://www.facebook.com/fabriciooscaralexander.aitta.1" target="_blank" rel="noopener noreferrer"><li className="li"><img src={facebook} alt="logo red social" className="logo-fb-ig"/></li></a>
                <a className="a" href="https://www.instagram.com/fabricioaitta1/" target="_blank" rel="noopener noreferrer"><li className="li"><img src={instagram} alt="logo red social" className="logo-fb-ig"/></li></a>
            </ul>
            </nav>
        </Fragment>
    );
}

export default Navegacion;