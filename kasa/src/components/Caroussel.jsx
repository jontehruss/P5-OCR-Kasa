// Import Styles
import "../styles/Caroussel.css"

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

import Image from "./Image";

export default function Caroussel({ pictures }) {
    // pour connaître l'état du Caroussel (index de l'image affichée) 
    const [currentIndex, setCurrentIndex] = useState(0);

    // Gérer l'état des transitions
    const [isTransitioning, setIsTransitioning] = useState(false);

    // Fonction pour passer à l'image suivante
    const nextImage = () => {
        if (!isTransitioning) {

            setIsTransitioning(true);
            setTimeout(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % pictures.length);
                setIsTransitioning(false);
            }, 300);

        } console.log(isTransitioning)

    };

    // Fonction pour revenir à l'image précédente
    const prevImage = () => {
        if (!isTransitioning) {
            setIsTransitioning(true);
            setTimeout(() => {
                setCurrentIndex((prevIndex) => (prevIndex - 1 + pictures.length) % pictures.length);
                setIsTransitioning(false);
            }, 300);

        }
    };


    return (

        <div className="Caroussel">
            {/* Condition pour masquer les contrôles du Caroussel quand 1 seule image */}
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
            )}

            <div className="Caroussel-image-container">
                <div className="Caroussel-image-container">
                    {pictures.map((picture, index) => (

                        <Image
                        key={index}
                            src={picture}
                            alt={`Vue intérieure du logement ${index + 1}`}
                            className={`Caroussel-image ${index === currentIndex ? 'visible' : 'hidden'} ${isTransitioning ? 'transitioning' : ''}`}
                        />
                        
                    ))}
                </div>

            </div>

        </div>
    );
};