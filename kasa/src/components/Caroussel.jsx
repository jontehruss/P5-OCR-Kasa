// Import Styles
import "../styles/Caroussel.css"

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';


export default function Caroussel({ pictures }) {
    // pour connaître l'état du Caroussel (index de l'image affichée) 
    const [currentIndex, setCurrentIndex] = useState(0);

    // Fonction pour passer à l'image suivante
    const nextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % pictures.length);
    };

    // Fonction pour revenir à l'image précédente
    const prevImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + pictures.length) % pictures.length);
    };


    return (

        <div className="Caroussel">
            {/* Condition pour masquer les contrôles du Caroussel quand 1 seule  */}
            {pictures.length === 1 ? (
                ""
            ) : (
                <>
                    <button className="Caroussel-btn left" onClick={prevImage}>
                        <FontAwesomeIcon icon={faChevronLeft} />
                    </button>

                    <span>{currentIndex + 1} / {pictures.length}</span>

                    <button className="Caroussel-btn right" onClick={nextImage}>
                        <FontAwesomeIcon icon={faChevronRight} />
                    </button>
                </>
            )};

            <div className="Caroussel-image-container">
                <img src={pictures[currentIndex]} alt={`Image ${currentIndex + 1}`} className="Caroussel-image-container" />

            </div>

        </div>
    );
};