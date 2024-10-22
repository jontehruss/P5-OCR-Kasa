// Import Style
import "../styles/App.css"; //! il faudra appeller le fichier sass 
import "../styles/TopBannerImage.css"

// Import Background Image
import TopBannerImgHome from "../assets/img-banner-a-accueil.png";
import TopBannerImageAbout from "../assets/img-banner-a-propos.png"


export default function TopBannerImage({ className, src, alt, width, height }) {

    return (
        <img src={src} alt={alt} width={width} height={height} className={className} />
    )
}