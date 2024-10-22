import "../styles/Host.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from "@fortawesome/free-solid-svg-icons";

export default function Host({ name, picture, rating }) {


    // initialiser les variables
    const maxRating = 5;
    const hostRating = rating;

    let hostRatingColoredStars = [];

    // Itérer selon la valeur de hostRating pour ajouter des étoiles colorées
    for (let i = 0; i < hostRating; i++) {
        hostRatingColoredStars.push(<FontAwesomeIcon icon={faStar} key={i} />)
    };

    // Itérer à nouveau pour ajouter les étoiles grises
    for (let i = hostRating; i < maxRating; i++) {
        hostRatingColoredStars.push(<FontAwesomeIcon icon={faStar} key={i} color="#e3e3e3" />)
        // $item-light-color : #e3e3e3;
    };

    return (
        <div className='Place-host' >
            <div className='Host'>
                <span>{name}</span>
                <img className="Host-picture" src={picture} />
            </div>

            <div className="Stars-container">
                {/* <FontAwesomeIcon icon={faStar} /> */}
                {hostRatingColoredStars.map((star, index) => (
                    <p key={index} >{star}</p>
                ))}
            </div>

        </div>
    )
}
