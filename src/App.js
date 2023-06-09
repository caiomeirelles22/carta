import './App.css';
import CartaFec from './assets/cartaFechada/cartaFec';
import MensagemFeita from './assets/mensagem/mensagem';
import Footer from './assets/footer/footer';
import { useEffect } from 'react';
import { useState } from 'react';

function App() {

  const [teste, setTeste] = useState('antes')

  const sumirCarta = () => {
    const cartafechada = document.getElementById('firts__carta')
    cartafechada.classList.add('display_none')
  }

  const aparecer = () => {
    const segund = document.getElementById('secound')
    segund.classList.remove('display_none')
  }

  const atualizarFirst = () => {
    const firts = document.getElementById('firts')
    firts.classList.remove('first')
    firts.classList.add('firts2')
  }

  const clicar = () => {
    setTeste('depois')
  }

  useEffect(() => {
    if (teste === 'depois') {
      sumirCarta()
      aparecer()
      atualizarFirst()
      console.log('imprimi depois')
    }
  }, [teste])

  return (
    <div className="App">
      <div className='main'>
        <div id='firts' className='firts'>
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
