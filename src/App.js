import logo from './imagenes/logo-principal.png';
import './App.css';
//import Tarea from './componentes/Tarea.js'

import ListaDeTareas from './componentes/ListaDeTareas';

function App() {
  return (
    <div className="App">
      <div className='aplicacion-tareas'>
        <div className='logo-contenedor'>
          <img 
              src = {logo}
              className='logo' />
        </div>
        <div className='tareas-lista-principal'>
            <h1>Mis Tareas</h1>
            <ListaDeTareas />
        </div>
      </div>
    </div>
  );
}

export default App;
