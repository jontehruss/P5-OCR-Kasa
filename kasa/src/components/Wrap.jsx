import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { useState, useRef, useEffect } from 'react';

// Import Style 
import "../styles/Wrap.css";

export default function Wrap({ title, description, equipments, content }) {
    // pour connaître l'état du Wrap ouvert ou fermé
    const [isOpen, setIsOpen] = useState(false);

    // état pour contrôler la hauteur max
    const [maxHeight, setMaxHeight] = useState("0px");

    // référence au contenu (élément du DOM)
    const contentRef = useRef(null);

    // fonction pour modifier l'état du Wrap
    const toogleAccordion = () => {
        setIsOpen(!isOpen);
    };

    // fonction pour identifier les hauteus de Wrap-content masquer/afficher
    useEffect(() => {
        if (isOpen) {
            // définir le max-height à la hauteur du content
            setMaxHeight(`${contentRef.current.scrollHeight}px`);
        } else {
            // réinit max-height à 0
            setMaxHeight("0px"); 
        }
    }, [isOpen]);


    return (

        <div className='Wrap'>

            {/* écouter l'event onClick et appel de la fonction toogleAccordion */}
            <div className='Wrap-title' onClick={toogleAccordion}>
                <h2>{title}</h2>
                {/*  Condition pour modifier le chevron en fonction isOpen true/false */}
                <FontAwesomeIcon
                    icon={faChevronUp}
                    className={isOpen ? 'chevron open' : 'chevron'}
                />
            </div>

            {/* Condition pour afficher le contenu quand isOpen = true */}
            <div
                className='Wrap-content'
                style={{ maxHeight: maxHeight }} // applique max-height
                ref={contentRef} // associer le div avec ref
            >
                {/* Si la description existe, je l'affiche */}
                {description && <p>{description}</p>}

                {/* vérifier présence du tableau de données avant d'afficher */}
                {Array.isArray(equipments) && equipments.length > 0 && (
                    <ul>
                        {/* liste avec map avec une key sur index du tableau */}
                        {equipments.map((equipment, index) => (
                            <li key={index}>{equipment}</li>
                        ))}
                    </ul>
                )}

                {/* Affichage du content si présent */}
                {content && <p>{content}</p>}
            </div>
        </div>
    );
};