import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

// Import Style 
import "../styles/Wrap.css";

function Wrap({ title, description, equipments, content }) {
    // pour connaître l'état du Wrap ouvert ou fermé
    const [isOpen, setIsOpen] = useState(false);

    // fonction pour modifier l'état du Wrap
    const toogleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (

        <div className='Wrap'>
            {/* écouter l'event onClick et appel de la fonction toogleAccordion */}
            <div className='Wrap-title' onClick={toogleAccordion}>
                <h2>{title}</h2>
                {/*  Condition pour modifier le chevron en fonction isOpen true/false */}
                <FontAwesomeIcon icon={isOpen ? faChevronUp : faChevronDown} />
            </div>
            {/* Condition pour afficher le contenu quand isOpen = true */}
            {isOpen && (
                <>
                    <div className='Wrap-content'>
                        {/* Si la description existe, je l'affiche */}
                        {description && <p>{description}</p>}

                        {/* Vérifier s'il y a des données de type Array avant d'afficher la liste d'équipements pour empêcher l'erreur */}
                        {Array.isArray(equipments) && equipments.length > 0 && (
                            <ul>
                                {/* Création de la liste avec map avec une key sur index du tableau */}
                                {equipments.map((equipment, index) => (
                                    <li key={index}>{equipment}</li>
                                ))}
                            </ul>
                        )}

                        {/* Affichage du content si présent */}
                        {content && <p>{content}</p>}
                    </div>
                </>
            )}
        </div>
    );
};

export default Wrap;