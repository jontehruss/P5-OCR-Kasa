// Import components
import TopBannerImage from "../components/TopBannerImage";
import Wrap from "../components/Wrap";

//Import Datas
import aboutData from "../datas/about.json"


// Import Style 
// ! utiliser cet import image et gérer le className ici et différent sur la page Home
import TopBannerImg from "../assets/img-banner-a-accueil.png";


export default About;

function About() {

    return (
        <div className="About">

            <TopBannerImage id={2} className="Top-pic-banner"/>
            <div className="About-wrap">
                {/* Boucle sur les données de about.json pour le contenu des Wrap */}
                {aboutData.map((item , index) =>
                    <Wrap key={index} title={item.title} content={item.content} />, 
                )}
            </div>
        </div>
    );
};
