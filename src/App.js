import './App.css';
import Telefono from './components/Telefono/Telejono';
import Buttons from './components/Buttons/Buttons';
import Greeting from './components/Greeting/Greeting';


const showMessage = () => {
  console.log("Dale!");
}

const showAlert = () => {
  alert("klk mi loco!!");
}


function App() {
  return (
    <div className="App">
      <Telefono></Telefono>

      <h2>Mensajes:</h2>
      <Greeting name="Karl"></Greeting>
      <Greeting name="Brandon"></Greeting>

      <h2>Botones</h2>
      <Buttons handleClick={showMessage} text="Dale!"></Buttons>
      <Buttons handleClick={showAlert} text="OK"></Buttons>




    </div>
  );
}

export default App;
