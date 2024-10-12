// Import Style
import "../styles/App.css"; //! il faudra appeller le fichier sass 
import "../styles/TopBannerImage.css"

// Import Background Image
import TopBannerImgHome from "../assets/img-banner-a-accueil.png";
import TopBannerImageAbout from "../assets/img-banner-a-propos.png"


export default TopBannerImage;

function TopBannerImage() {
    
    // let a = 5;
    // let TopBannerImage = null;
    // if (a === 0 ) {
    //     TopBannerImage = TopBannerImgHome;
    // } else {
    //     TopBannerImage = TopBannerImageAbout;
    // }

    return (
        <div
            className="Top-pic-banner"
            //! Pas de style inline -> a gérer dans scss - variable 
            // style={{
            //     backgroundImage: `url(${TopBannerImgHome})`,
            //     backgroundSize: "cover",
            //     backgroundPosition: "center",
            // }}
        >
            {/* <h1>Hey from Home Component!</h1> */}

            <h1>Chez vous, partout et ailleurs</h1>
        </div>
    )
}