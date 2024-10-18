// Import Style
import "../styles/App.css"; //! il faudra appeller le fichier sass 
import "../styles/TopBannerImage.css"

// Import Background Image
import TopBannerImgHome from "../assets/img-banner-a-accueil.png";
import TopBannerImageAbout from "../assets/img-banner-a-propos.png"


export default TopBannerImage;


function TopBannerImage(props) {

    // const { className, id, text } = props;
    // console.log(props.text)

    // if (props.id === 1) {
    //     console.log(props.className)

    // } else
    //     if (props.id === 2) {
    //         console.log('about')
    //     } else return;

    return (


        <div className={[props.className + " " + "Pic-" + props.id]} >
            <h1>{props.text}</h1>
        </div>
    )
}