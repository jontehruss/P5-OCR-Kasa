// Import components
import { useParams } from 'react-router-dom';
import Tags from '../components/Tags';
import Wrap from "../components/Wrap";
import Host from '../components/Host';

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

    // console.log(logement.pictures)
    // console.log(logement)

    if (!logement) {
        // ! Ici renvoyer vers 404
        return <h2>Logement non trouvé</h2>;
    };



    return (

        <div className='Place'>

            {/* Passer les images du logement au carrousel */}
            <Caroussel pictures={logement.pictures} />,

            <div className='Place-infos'>
                <div>
                    <h1>{logement.title}</h1>
                    <span>{logement.location}</span>
                    <Tags tags={logement.tags} />
                </div>
                <div >
                    <Host name={logement.host.name} picture={logement.host.picture} rating={logement.rating} />
                </div>
            </div>






            <div className='Wrap-container'>
                <Wrap key={logement.id} title="Description" description={logement.description} />
                <Wrap key={logement.id} title="Équipements" equipments={logement.equipments} />
            </div>



        </div>



    );
};