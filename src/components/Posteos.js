import React,{Fragment, useState, useEffect} from 'react';
import Modal from './Modal';

const Posteos = () => {

    const [tarjeta, setTarjeta] = useState([])

    const [mostrarModal, setMostrarModal] = useState(false)

    useEffect( () => {
        if(tarjeta.length === ''){
            return
        }
    }, [tarjeta])

    const mostrarTarjeta = e => {
        setTarjeta([
            e.target.value
        ])
        setMostrarModal(true)
    }

    return ( 
        <Fragment>
                {mostrarModal ? <Modal setMostrarModal={setMostrarModal} tarjeta={tarjeta}/> : 
                <Fragment>
                <p className="aboutme-titulo" id="posteos">Posteos</p>
                <div className="aboutme-div">
                    <div className="div-aboutme-div imagen-1">
                    <p className="titulo-div-aboutme">¿Que es el entrenamiento funcional?</p>
                        <p className="parrafo-div-aboutme">Función significa, básicamente, propósito. Cuando empleamos la palabra función estamos diciendo que algo tiene un propósito. Así que cuando aplicamos el término a entrenar, estamos hablando de un entrenamiento con un propósito. De hecho, la idea de entrenamiento funcional o ejercicio funcional se originó en el mundo de la medicina deportiva. Como ocurre a menudo, el enfoque y los ejercicios utilizados en rehabilitación se fueron trasladando de la clínica de fisioterapia y la sala de entrenamiento deportivo a la sala de musculación.<br/>
                        <strong>TRES PREGUNTAS PARA DEFINIR EL ENTRENAMIENTO FUNCIONAL...</strong></p>
                        <button href="!#" className="enlace-posteos" value="primero" onClick={mostrarTarjeta}>Leer mas...</button>
                    </div>
                    <div className="div-aboutme-div imagen-2">
                    <p className="titulo-div-aboutme">¿Por donde comenzar para ser entrenador?</p>
                        <p className="parrafo-div-aboutme">En Argentina, no existe un camino concreto para llegar a ser entrenador o para estar "habilitado" para ejercer dicha profesión, podemos decir que cualquier persona puede llegar a serlo sin estudios oficiales (universitario/terciario). Pero si te voy a dar<strong>5 tips</strong> que considero elementales para ser un entrenador con capacidad suficiente para ejercer...</p>
                        <button href="!#" className="enlace-posteos" value="segundo" onClick={mostrarTarjeta}>Leer mas...</button>
                    </div>
                    <div className="div-aboutme-div imagen-3">
                    <p className="titulo-div-aboutme">¿Estiramiento estático o no post gimnasio?</p>
                        <p className="parrafo-div-aboutme">El estiramiento o elongación se ha definido como: la aplicación de fuerza a las estructuras músculo-tendinosas con el fin de lograr un cambio en su longitud, por lo general a los efectos de mejorar el rango de movimiento articular (ROM), la reducción de la rigidez o dolor, o la preparación para la actividad (física). El estiramiento más usado y común es el estático en el cual una persona mantiene una posición para elongar...</p>
                        <button href="!#" className="enlace-posteos" value="tercero" onClick={mostrarTarjeta}>Leer mas...</button>
                    </div>
                </div>
                </Fragment>
                }
            </Fragment>
    );
}
 
export default Posteos;