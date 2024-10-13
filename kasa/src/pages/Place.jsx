// Import components
import { useParams } from 'react-router-dom';

// Import Datas
import logements from '../datas/logements.json';
import Caroussel from '../components/Caroussel';


// Import Style 
import "../styles/Place.scss"


export default function Place() {
    // Récupèrer l'ID du logement à partir de l'URL
    const { id } = useParams(); 

    // Recherche du logement correspondant
    const logement = logements.find(l => l.id === id); 

    console.log(logement.pictures)
    // console.log(logement)

    if (!logement) {
        // ! Ici renvoyer vers 404
        return <h2>Logement non trouvé</h2>;
    };



    return (
        <div className='Place'>
            {/* Passer les images du logement au carrousel */}
            <Caroussel pictures={logement.pictures} />,
            <h1>{logement.title}</h1>
            <p>{logement.description}</p>
        </div>

    );
};