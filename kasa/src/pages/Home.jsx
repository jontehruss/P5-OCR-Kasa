// Import components
import TopBannerImage from "../components/TopBannerImage";
import ItemCard from "../components/ItemCard";

// Import Style 
import "../styles/Home.css";
import ImageSrc from "../assets/img-banner-a-accueil.png";

// Import Datas
import logements from "../datas/logements.json";

export default Home;

function Home() {
    return (
        <Main />
    )
};

function Main() {
    return (
        <main className="Home-main">
            <div className="Home-top-banner">
                <TopBannerImage className="Top-pic-banner" src={ImageSrc} alt="Illustration photo côtière" height={250} width={1240} text="Chez vous, partout et ailleurs" />
                <h1>Chez vous, partout et ailleurs</h1>
            </div>

            <SectionCatalog />
        </main>
    );
};



function SectionCatalog() {
    return (
        <section className="Home-catalog">
            {/* Boucle sur chaque logement dans le tableau logements */}
            {logements.map((logement) => (
                <ItemCard key={logement.id} logement={logement} />
            ))}
        </section>
    );
};
