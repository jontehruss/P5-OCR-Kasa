import "../styles/Host.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from "@fortawesome/free-solid-svg-icons";

export default function Host({ name, picture, rating }) {

    
    console.log('hostRating = ' + rating)

    // initialiser les variables
    const maxRating = 5;
    const hostRating = rating;

    let hostRatingColoredStars = [];

    // Itérer selon la valeur de hostRating pour ajouter des étoiles colorées
    for (let i=0; i<hostRating; i++) {
        hostRatingColoredStars.push(<FontAwesomeIcon icon={faStar} key={i}/>)
    }

    

    console.log(hostRatingColoredStars)



    return (
        <div className='Place-host' >
            <div className='Host'>
                <span>{name}</span>
                <img className="Host-picture" src={picture} />
            </div>

            <div className="Stars-container">
                {/* <FontAwesomeIcon icon={faStar} /> */}
                { hostRatingColoredStars.map((star , index) => (
                    <p key={index} >{star}</p>
                ) ) }
            </div>


        </div>
    )
}


// function colorStars() {

//     // initialiser les variables
//     const maxRating = 5;
//     const hostRating = rating;

//     let hostRatingColoredStars = [];


//     // Itérer selon la valeur de hostRating
//     hostRatingColoredStars.push(<FontAwesomeIcon icon={faStar} />)
//     console.log(hostRatingColoredStars)

//     return (
//         { hostRatingColoredStars }
//     )
// }