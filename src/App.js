import { useEffect, useState } from 'react';
import './App.css';
import CartaFec from './assets/cartaFechada/cartaFec';
import MensagemFeita from './assets/mensagem/mensagem';
import Footer from './assets/footer/footer';

function App() {
  const [mensagem, setMensagem] = useState('');
  const [cartaFechada, setCartaFechada] = useState(<CartaFec />)

  const atualizaPag = () => {
    setMensagem(MensagemFeita);
    console.log('funcionou');
  };

  const sumirCarta = () => {
    const cartafechada = document.getElementById('cartaFechada')
    setCartaFechada(cartafechada.classList.add('display_none'))
  }

  const aoClicar = () => {
    sumirCarta();
    setTimeout(() => {
      atualizaPag();
    }, 1000); // 2000 milissegundos = 2 segundos
  };




  return (
    <div className="App">
      <div className='posicionamentoComGrid'>
        <div className='mensagem'>{mensagem}</div>
        <div onClick={aoClicar} id="cartaFechada" className='cartaFechada' >
          {cartaFechada}
        </div>
        <div className='footer'><Footer></Footer></div>
      </div>
    </div>
  );
}

export default App;
