// Import components
import TopBannerImage from "../components/TopBannerImage";
import Wrap from "../components/Wrap";

//Import Datas
import aboutData from "../datas/about.json"


// Import Style 
// ! utiliser cet import image et gérer le className ici et différent sur la page Home
import TopBannerImg from "../assets/img-banner-a-accueil.png";
import ImageSrc from "../assets/img-banner-a-propos.png";

export default About;

function About() {

    return (
        <div className="About">

            <TopBannerImage className="Top-pic-banner" src={ImageSrc} alt="Illustration photo côtière" height={250} width={1240} text="Chez vous, partout et ailleurs" />
            <div className="About-wrap">
                {/* Boucle sur les données de about.json pour le contenu des Wrap */}
                {aboutData.map((item, index) =>
                    <Wrap key={index} title={item.title} content={item.content} />,
                )}
            </div>
        </div>
    );
};
