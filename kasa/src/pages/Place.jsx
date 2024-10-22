// Import components
import { useParams, Routes, Route } from 'react-router-dom';
import Tags from '../components/Tags';
import Wrap from "../components/Wrap";
import Host from '../components/Host';
import NotFound from '../components/NotFound';

// Import Datas
import logements from '../datas/logements.json';
import Caroussel from '../components/Caroussel';


// Import Style 
import "../styles/Place.css"



export default function Place() {
    // Récupèrer l'ID du logement à partir de l'URL
    const { id } = useParams();

    // Recherche du logement correspondant
    const logement = logements.find(l => l.id === id);

    if (!logement) {
        return (
            <NotFound />
        )

    };



    return (

        <div className='Place'>

            {/* Passer les images du logement au carrousel */}
            <Caroussel pictures={logement.pictures} key={logement.id} />,

            <div className='Place-infos'>
                <div>
                    <h1>{logement.title}</h1>
                    <span>{logement.location}</span>
                    <Tags tags={logement.tags} />
                </div>
                <div >
                    {/* Logique à faire pour l'affichage des étoiles selon la valeur de "rating" */}
                    <Host name={logement.host.name} picture={logement.host.picture} rating={logement.rating} />
                </div>
            </div>


            <div className='Wrap-container'>
                <Wrap title="Description" description={logement.description} />
                <Wrap title="Équipements" equipments={logement.equipments} />
            </div>



        </div>



    );
};