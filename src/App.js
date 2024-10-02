import './App.css';
import Contador from './component/Contador';
import LoginForm from './component/Loginform';
import Saludo from './component/Saludo';

function App() {
  return (
    <div className="App">
      <Saludo/>
      < Contador/><br/>
      < LoginForm/>
    </div>
  );
}

export default App;
