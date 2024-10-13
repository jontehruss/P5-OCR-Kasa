import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

// Import Style 
import "../styles/Wrap.scss";

function Wrap({ title, content}) {
    // pour connaître l'état du Wrap ouvert ou fermé
    const [isOpen, setIsOpen] = useState(false); 

    // fonction pour modifier l'état du Wrap
    const toogleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className='Wrap'>
            <div className='Wrap-title' onClick={toogleAccordion}>
                <h2>{title}</h2>
                <FontAwesomeIcon icon={isOpen ? faChevronUp : faChevronDown} />
            </div>
            {isOpen && <p className='Wrap-content'>{content}</p>}
        </div>
    );
};

export default Wrap;