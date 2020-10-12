import React,{Fragment} from 'react'

const Modal = ({setMostrarModal, tarjeta}) => {

    const cerrarModal = e => {
        setMostrarModal(false)
    }

    const eleccion = tarjeta[0]

    const primer = 
    <div className="div-aboutme-vh imagen-vh-1">
    <p className="titulo-div-aboutme-vh">¿Que es el entrenamiento funcional?</p>
        <p className="parrafo-div-aboutme-vh">Función significa, básicamente, propósito. Cuando empleamos la palabra función estamos diciendo que algo tiene un propósito. Así que cuando aplicamos el término a entrenar, estamos hablando de un entrenamiento con un propósito. De hecho, la idea de entrenamiento funcional o ejercicio funcional se originó en el mundo de la medicina deportiva. Como ocurre a menudo, el enfoque y los ejercicios utilizados en rehabilitación se fueron trasladando de la clínica de fisioterapia y la sala de entrenamiento deportivo a la sala de musculación.<br/>
        <strong>TRES PREGUNTAS PARA DEFINIR EL ENTRENAMIENTO FUNCIONAL</strong> para entender mejor el concepto de entrenamiento funcional, hazte unas pocas preguntas sencillas.</p>
        <ol className="ol-vh">
            <li className="parrafo-div-aboutme-vh">¿Cuántos deportes se juegan sentado? Por lo que sé, solo unos pocos deportes, como el remo, se realizan desde una posición sentada. Si aceptamos esta premisa, podemos deducir que entrenar músculos desde esta posición sentada no sería funcional para la mayoría de los deportes.</li><br/>
            <li className="parrafo-div-aboutme-vh">¿Cuántos deportes se juegan en un torno rígido donde la estabilidad está proporcionada por fuentes externas?. Aparentemente, la respuesta sería ninguno. La mayoría de los deportes se disputan en pistas o campos. La estabilidad la proporciona el deportista, no una fuente externa. Este razonamiento nos lleva otra vez a pensar que la mayor parte de los sistemas de entrenamiento basados ​​en máquinas no son, por definición, funcional porque la carga que debe levantar el deportista la estabiliza la máquina. Aunque, en teoría, el entrenamiento basado en máquinas puede dar lugar a menos lesiones, la falta de aportación propioceptiva (información sensorial interna sobre posición y movimiento) y la de estabilización es muy probable que provoquen un mayor número de lesiones durante la competición.</li><br/>
            <li className="parrafo-div-aboutme-vh">¿Cuántas veces actúa una articulación de manera aislada para realizar algún movimiento en cualquier deporte? Una vez más, la respuesta es cero. El entrenamiento funcional procura centrarse lo más posible en movimientos multiarticulares. Vern Gambetta y Gary Gray, dos expertos en entrenamiento funcional de renombre mundial, dicen: «Los movimientos de una sola articulación que aíslan un músculo en particular son muy poco funcional. Los movimientos multiarticulares que integran varios grupos musculares en patrones de movimiento son muy funcionales »(2002, párrafo 13).</li>
        </ol>
        <p className="parrafo-div-aboutme-vh">A partir de las respuestas a estas tres preguntas, probablemente estemos de acuerdo en que el entrenamiento funcional se describe mejor como: ejercicios llevados a cabo con los pies en contacto con el suelo y, salvo unas pocas excepciones, sin la ayuda de máquinas.</p>
    </div>

    const segundo = 
    <div className="div-aboutme-vh imagen-vh-2">
    <p className="titulo-div-aboutme-vh">¿Por donde comenzar para ser entrenador?</p>
        <p className="parrafo-div-aboutme-vh">En Argentina, no existe un camino concreto para llegar a ser entrenador o para estar "habilitado" para ejercer dicha profesión, podemos decir que cualquier persona puede llegar a serlo sin estudios oficiales (universitario/terciario). Pero si te voy a dar<strong>5 tips</strong> que considero elementales para ser un entrenador con capacidad suficiente para ejercer.</p>
        <ul className="ol-vh">
            <li className="parrafo-div-aboutme-vh">TIP N°1: Busca algún mentor. Seguramente en tu ciudad debe haber algún entrenador/a muy capacitado del que puedes aprender esos "detalles" a la hora de elejir un curso, un libro y sin dudas a la hora de practicar ejercicios. No te quepa duda que un buen entrenador, siempre te dara una mano en materia de estudio u opiniones.</li><br/>
            <li className="parrafo-div-aboutme-vh">TIP N°2: Armate de constancia y paciencia. Esta es una profesión en la que se necesita bastante lectura para llegar a comprender el amplio campo en el que nos vamos a sumergir, tomate tu tiempo para leer, estudiar y formarte, ten mucha paciencia. El día que te sientas preparado, comienza a trabajar para ir aplicando todo lo aprendido en cada persona que llegue a buscarte.</li><br/>
            <li className="parrafo-div-aboutme-vh">TIP N°3: Dedica 1 hora de lectura. Cuando ya estes trabajando, lo mas probable es que, si te apasiona el mundo del entrenamiento, le dediques muchas horas a cada persona y a cada espacio de trabajo. Por lo cual, una recomendación sería dedícale 1 hora al dia o 1 hora los sábados y domingos, de lectura a algún tema nuevo que se presento o algo que quieras reforzar y repasar. </li><br/>
            <li className="parrafo-div-aboutme-vh">TIP N°4: No te rebajes. Cobra lo que crees que mereces cobrar, no tengas miedo. Tú sabes lo que vales, seguramente tu formación (cursos, diplomatura, posgrado) lo que sea, no fue gratis.</li><br/>
            <li className="parrafo-div-aboutme-vh">TIP N°5: Busca la manera de evitar a la AFIP (solo valido para Argentina). Es gracioso y real, a medida que vayas ganando experiencia, sabras a lo que me refiero, de cualquier forma hay que evitar a ese ente del mal.</li>
        </ul>
    </div>  

    const tercero = 
    <div className="div-aboutme-vh imagen-vh-3">
    <p className="titulo-div-aboutme-vh">¿Estiramiento estático o no post gimnasio?</p>
        <p className="parrafo-div-aboutme-vh">El estiramiento o elongación se ha definido como: la aplicación de fuerza a las estructuras músculo-tendinosas con el fin de lograr un cambio en su longitud, por lo general a los efectos de mejorar el rango de movimiento articular (ROM), la reducción de la rigidez o dolor, o la preparación para la actividad (física). El estiramiento más usado y común es el estático en el cual una persona mantiene una posición para elongar por una serie de tiempo soportando una sensación de dolor o incomodidad relativa. Uno de los grandes problemas es la capacidad actual para cuantificar adecuadamente la intensidad del estiramiento. A ciencia cierta faltan mas investigaciones para contrastar los beneficios que otorga el estiramiento estatico post-gimnasio, las recomendaciones actuales proponen la utilización de foam roller, el frio, el calor, masajes, vibraciones, etc. como métodos para la recuperación post-entrenamiento. <br/><br/>Porque aunque el estiramiento estático ha demostrado que mejora el rango de movimiento, esto puede ser atribuible a la tolerancia al dolor al estirar y no un aumento en la longitud del músculo-tendón, por tal motivo ejercicios de movilidad que utilizan los movimientos dinámicos, libres de dolor pueden ser más apropiados para el restablecimiento de cualquier ROM perdido después del ejercicio.</p>
    </div>

    let mostrarVh 

    if(eleccion === 'primero'){
        mostrarVh = primer 
    }else if(eleccion === 'segundo'){
        mostrarVh = segundo
    }else{
        mostrarVh = tercero
    }

    return (  
            <Fragment>
            {mostrarVh}
            <button href="!#" className="enlace-posteos-vh-bottom" value="primero" onClick={cerrarModal}>Cerrar X</button>
            </Fragment>
    );
}
 
export default Modal;