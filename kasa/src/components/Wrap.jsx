import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

// Import Style 
import "../styles/Wrap.scss";

function Wrap({ title, description, equipments }) {
    // pour connaître l'état du Wrap ouvert ou fermé
    const [isOpen, setIsOpen] = useState(false);

    // fonction pour modifier l'état du Wrap
    const toogleAccordion = () => {
        setIsOpen(!isOpen);
    };

    console.log(typeof equipments)



    return (

        <div className='Wrap'>
            <div className='Wrap-title' onClick={toogleAccordion}>
                <h2>{title}</h2>
                <FontAwesomeIcon icon={isOpen ? faChevronUp : faChevronDown} />
            </div>
            {isOpen &&
                <>
                    <p className='Wrap-content'>{description}{equipments}</p>
                </>
            }
        </div>
    );
};

export default Wrap;