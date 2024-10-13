// Import components
import TopBannerImage from "../components/TopBannerImage";
import Wrap from "../components/Wrap";

//Import Datas
import aboutData from "../datas/about.json"

// Import Style 
import TopBannerImg from "../assets/img-banner-a-accueil.png";


export default About;

function About() {
    return (
        <TopBannerImage />,

        <div className="About">
            <div className="About-wrap">
                {/* Boucle sur les données de about.json pour le contenu des Wrap */}
                {aboutData.map((item) =>
                    <Wrap key={item.id} title={item.title} content={item.content} />
                )}
            </div>
        </div>
    );
};