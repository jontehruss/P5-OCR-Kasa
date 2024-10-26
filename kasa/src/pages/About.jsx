// Import components
import Image from "../components/Image";
import Wrap from "../components/Wrap";

//Import Datas
import aboutData from "../datas/about.json"


// Import Style 
import "../styles/About.scss"
// import TopBannerImg from "../image/img-banner-a-accueil.png";
import ImageSrc from "../images/img-banner-a-propos.webp";

export default function About() {

    return (
        <div className="About">

            <div className="About-top-banner">
                <Image className="Top-pic-banner" src={ImageSrc} alt="Illustration photo montagne" height={250} width={1240} text="Chez vous, partout et ailleurs" />
            </div>


            <div className="About-wrap">
                {/* Boucle sur les données de about.json pour le contenu des Wrap */}
                {aboutData.map((item, index) =>
                    <Wrap key={index} title={item.title} content={item.content} />,
                )}
            </div>
        </div>
    );
};
