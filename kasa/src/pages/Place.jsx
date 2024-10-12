// Import components
import { useParams } from 'react-router-dom';

// Import Datas
import logements from '../datas/logements.json'; 


// Import Style 



export default Place;

function Place() {
    const { id } = useParams(); // Récupère l'ID du logement à partir de l'URL
    const logement = logements.find(l => l.id === id); // Recherche du logement correspondant

    if (!logement) {
        return <h2>Logement non trouvé</h2>;
      }

    return (
        <>
        <h1>{logement.title}</h1>
        <p>{logement.description}</p>
        <img src={logement.cover} ></img>
        </>
    )
};