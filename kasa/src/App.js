import logo from './logo.svg';
import logo2 from './logo-footer.svg'
import TopBannerImg from './images/background.jfif';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

function Header() {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <Nav />
    </header>
  );
};

function Nav() {
  return (
    <nav >
      <ul className="Nav-items">
        <li>Accueil</li>
        <li>À Propos</li>
      </ul>
    </nav>
  );
};


function Main() {
  return (
    <main className="App-main">
      {/* Voir s'il faut laisser le style dans le js plutôt que dans le css */}
      <div
        className='Top-pic-banner'
        style={{ backgroundImage: `url(${TopBannerImg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <h1>Chez vous, partout et ailleurs</h1>
      </div>
      <SectionCatalog />
    </main>
  );
};

function SectionCatalog() {
  return (
    <section className='App-catalog'>
      <ItemCard />
      <ItemCard />
      <ItemCard />
      <ItemCard />
      <ItemCard />
      <ItemCard />
    </section>
  );
};

function ItemCard() {
  return (
    <div className='Item-card'>
      <picture>
        <span>Titre de la location</span>
      </picture>
    </div>
  );
};

function Footer() {
  return (
    <footer className='App-footer'>
      <img src={logo2} className="Footer-logo" alt="logo" />
      <picture></picture>
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  );
};


export default App;
