// Import components
import Image from "../components/Image";
import Catalog from "../components/Catalog"

// Import Style 
import "../styles/Home.css";
import ImageSrc from "../images/img-banner-a-accueil.webp";

// Import Datas
// import logements from "../datas/logements.json";

export default Home;

function Home() {
    return (
        <main className="Home-main">

            <div className="Home-top-banner">
                <Image
                    className="Top-pic-banner"
                    src={ImageSrc} alt="Illustration photo côtière"
                    height={250}
                    width={1240} text="Chez vous, partout et ailleurs"
                />
                <h1>Chez vous,<span className="Mobile-break"> partout et ailleurs</span></h1>
            </div>

            <Catalog />
            
        </main>
    )
};