// Import components
import { useParams } from 'react-router-dom';

// Import Style 
import "../styles/NotFound.css";

// Import Image
import NotFoundImage from "../assets/NotFound.svg";

export default function NotFound() {
    return (
        <div className='NotFound-container'>
            <img src={NotFoundImage} />
            <span>Oups! La page que <span className="Mobile-break">vous demandez n'existe pas.</span></span>
            <a href="/">Retourner sur la page d’accueil</a>
        </div>
    );
};