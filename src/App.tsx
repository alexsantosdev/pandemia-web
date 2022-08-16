import { Navigation } from './components/Navigation'

import GooglePlayLogo from './assets/icons/google-play-infected.svg'
import Image1 from './assets/images/image-1.png'
import Vaccine from './assets/images/vaccine.svg'
import Power from './assets/images/power.svg'
import Heart from './assets/images/heart.svg'
import Kit from './assets/images/kit.svg'
import Enemy1Head from './assets/images/e_head1.svg'
import Enemy2Head from './assets/images/e_head2.svg'
import Civil1Head from './assets/images/c_head1.svg'
import Civil2Head from './assets/images/c_head2.svg'

import { Container } from './styles'
import './styles/global.css'

export function App() {
  return (
    <Container>
      <Navigation />
      <div className="main">
        <div className="column">
          <h2>Curta e <br />sobreviva!</h2>
          <button>
            <img src={GooglePlayLogo} alt='Google Play icon' />
            <div>
              <span>Em breve no</span>
              <span>Google Play</span>
            </div>
          </button>
          <span className='context'>Um jogo de aventura frenético.</span>
        </div>
        <div className="column">
          <img src={Image1} alt='Image-1' />
        </div>
      </div>
      <div className="items">
        <div>
          <h1>itens do <br />jogo</h1>
          <span>Adquira sua vacina e cure os infectados!</span>
        </div>
        <div>
          <img src={Vaccine} alt='Vaccine' />
        </div>
        <div>
          <span className='title'>Vacina</span>
          <h2>astronazeca</h2>
          <p>Uma doze dessa belezinha cura um civil em seu pior estado.</p>
          <div className="row">
            <img src={Power} alt='Power' />
            <div>
              <span>Poder de imunidade</span>
              <span>50%</span>
            </div>
          </div>
        </div>
      </div>
      <div className="items">
        <div>
          <span className='title'>Apoio</span>
          <h2>kit primeiros <br />socorros</h2>
          <p>Uma simples mala com poder de cura para continuar no game.</p>
          <div className="row">
            <img src={Heart} alt='Power' />
            <div>
              <span>Capacidade de cura</span>
              <span>15%</span>
            </div>
          </div>
        </div>
        <div>
          <img src={Kit} alt='Vaccine' />
        </div>
        <div>
          <h1>e muito <br />mais...</h1>
        </div>
      </div>
      <div className="characters">
        <div className="row">
          <span>Conheça os personagens</span>
          <h2>Deixe a aventura te dominar</h2>
        </div>
        <div className="table">
          <div className="left-side">
            <h2>Quick play!</h2>
            <div className="row">
              <button><img src={Enemy1Head} alt='Enemy 1 head' /></button>
              <button><img src={Enemy2Head} alt='Enemy 2 head' /></button>
              <button><img src={Civil1Head} alt='Civil 1 head' /></button>
              <button><img src={Civil2Head} alt='Civil 2 head' /></button>
            </div>
            <span>Conheça os protagonistas da sua diversão diária.</span>
          </div>
          <div className="right-side">
            
          </div>
        </div>
      </div>
    </Container>
  )
}
