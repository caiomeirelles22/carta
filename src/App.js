import './App.css';
import CartaFec from './assets/cartaFechada/cartaFec';
import MensagemFeita from './assets/mensagem/mensagem';
import Footer from './assets/footer/footer';

function App() {
  const sumirCarta = () => {
    const cartafechada = document.getElementById('firts__carta')
    cartafechada.classList.add('display_none')
  }

  const aparecer = () => {
    const segund = document.getElementById('secound')
    segund.classList.remove('display_none')
  }

  const clicar = () => {
    sumirCarta()
    aparecer()
  }

  return (
    <div className="App">
      <div className='main'>
        <div className='firts'>
          <div onClick={clicar} className='firts__carta' id='firts__carta'><CartaFec></CartaFec></div>
        </div>

        <div className='secound display_none' id='secound'>
          <div><MensagemFeita></MensagemFeita></div>
        </div>
        
      </div>

      <div className='footer2'><Footer></Footer></div>

    </div>
  );
}

export default App;