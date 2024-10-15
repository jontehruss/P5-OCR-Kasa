import "../styles/Host.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from "@fortawesome/free-solid-svg-icons";

export default function Host({ name, picture, rating }) {

    // console.log(name)
    const maxRating = 5;
    console.log('rating = ' + rating)


    return (
        <div className='Place-host' >
            <div className='Host'>
                <span>{name}</span>
                <img className="Host-picture" src={picture}></img>
            </div>

            <FontAwesomeIcon icon={faStar} />
        </div>
    )
}