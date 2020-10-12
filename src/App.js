import React from 'react';
import './App.css';
import Main from './components/Main';
import Navegacion from './components/Navegacion';
import Posteos from './components/Posteos';
import Aboutme from './components/Aboutme';
import Contacto from './components/Contacto';

function App() {
  return (
    <div className="App">
      <div className="nav">
        <Navegacion />
      </div>
      
      <header className="header">
        <Main />
      </header>

      <div className="uno">
        <Posteos />
      </div>

      <div className="dos">
        <Aboutme />
      </div>
      
      <div className="tres">
        <Contacto />
      </div>

      <footer className="footer">
        <p>Desarrollado &copy; Fabri - Cuarentena 2020</p>
      </footer>

    </div>
  );
}

export default App;
