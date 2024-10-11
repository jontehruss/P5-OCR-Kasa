// Import components
import Header from "./Header.jsx";
import ItemCard from "./ItemCard.jsx";
import Footer from "./Footer.jsx";

// Import Style
import "../styles/App.css";
import TopBannerImg from "../assets/img-banner-a-accueil.png";

// Import Datas
import testDatas from "../datas/logements.json";


function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

function Main() {
  return (
    <main className="App-main">
      {/* Voir s'il faut laisser le style dans le js plutôt que dans le css */}
      <div
        className="Top-pic-banner"
        style={{
          backgroundImage: `url(${TopBannerImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h1>Chez vous, partout et ailleurs</h1>
      </div>
      <SectionCatalog />
    </main>
  );
};

function SectionCatalog() {
  return (
    <section className="App-catalog">
      {/* <TestDatas /> */}
      <ItemCard />
      <ItemCard />
      <ItemCard />
      <ItemCard />
      <ItemCard />
      <ItemCard />
    </section>
  );
};

console.log(testDatas);
function TestDatas() {
  return (
    <ul>
      {testDatas.map((logement) => (
        <li>
          <div>
            <img src={logement.cover} alt={logement.description} className="Img-item-card"></img>
            <h2>{logement.title}</h2>
          </div>
        </li>
      ))}
    </ul>
  );
};


export default App;
