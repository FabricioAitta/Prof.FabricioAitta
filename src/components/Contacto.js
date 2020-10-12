import React, {Fragment} from 'react';
import imagen from '../linktree.png';

const Contacto = () => {

    return (  
        <Fragment>
            <p className="contactame-titulo" id="contacto">Contactame</p>
            <form className="form" action="https://formspree.io/f/alexanderaitta@gmail.com" method="post">
                <label htmlFor="nombre" className="label-form">Nombre:</label>
                <input className="input-form" id="nombre" type="text" name="nombre" placeholder="Ingresa tu nombre" required/>
                <label htmlFor="mail" className="label-form">Email:</label>
                <input className="input-form" id="mail" type="email" name="email" placeholder="Ingresa tu email" required/>
                <label htmlFor="mensaje" className="label-form-com">Comentario:</label>
                <textarea className="input-form" id="mensaje" cols="30" rows="5" maxLength="500" type="text" name="comentario" placeholder="Ingresa tu comentario" required></textarea>
                <button className="btn-form" type="submit" name="submit">Enviar</button>
            </form>
            <div className="linktree">
                <p className="parrafo-linktree">Podes visitar mi LinkTree</p>
                <a href="https://linktr.ee/fabricioaitta" target="_blank" rel="noopener noreferrer" className="a-linktree"><img src={imagen} alt="linktree" className="img-linktree"/></a>
            </div>
        </Fragment>
    );
}
 
export default Contacto;