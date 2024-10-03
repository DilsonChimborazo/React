import './App.css'
import Contador from './component/Contador'
import ListaDeTareas from './component/ListaDeTareas.jsx'
import LoginForm from './component/Loginform'
import Reloj from './component/Reloj.jsx'
import Saludo from './component/Saludo'

function App() {
  const tareas = [
    { id: 1, nombre: 'Aprender React', completada: false },
    { id: 2, nombre: 'Hacer ejercicio', completada: false },
    { id: 3, nombre: 'Leer un libro', completada: false },
  ]

  return (
    <div className="App">
      <Reloj/>
      <Saludo/>
      < Contador/><br/>
      < LoginForm/>
      <ListaDeTareas tareas={tareas} />

    </div>
  );
}

export default App;
