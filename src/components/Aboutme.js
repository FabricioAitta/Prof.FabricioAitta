import React, {Fragment} from 'react';
import fotoPerfil from '../perfil.png';

const Aboutme = () => {
    return (  
        <Fragment>
            <div className="div-container" id="quien-soy">
                <p className="div-titulo">Quien soy</p>
                <div className="div-container-division">
                    <div className="division-izquierda">
                        <img className="foto-perfil" src={fotoPerfil} alt="foto personal"/>
                    </div>
                    <div className="division-derecha">
                        <p className="parrafo-perfil">
                            Mi nombre es Fabricio, tengo 24 años, y actualmente me dedico al entrenamiento
                            de fuerza y acondicionamiento, tanto para deportistas, como personas no deportistas.
                            <br/>
                            <br/>
                            Me recibi en el 2018 de profesor de educación física, realice una diplomatura
                            en prescripción y evaluación del entrenamiento en la UCC en el mismo año 
                            y desde ese momento que me dedico al entrenamiento, capacitandome constantemente en la medida de lo posible.
                            <br/>
                            <br/>
                            -Hobby: Programacion(tecnologia)
                            <br/>
                            -Comida favorita: Asado
                            <br/>
                            -Color favorito: Azul
                            <br/>
                            -Pasatiempo: Practicar basquet
                            <br/>
                            -Proximos objetivos: Continuar aprendiendo lo que me gusta
                        </p>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}
 
export default Aboutme;