// Import pour gestion des routes (client-side)
import * as React from "react";
import { Routes, Route } from 'react-router-dom';

// Import components
import NotFound from "../components/NotFound.jsx";

// Import Pages
import Home from "../pages/Home.jsx"
import About from "../pages/About.jsx"
import Place from "../pages/Place.jsx";


export default function AppRouting() {

    return (
        <div className="App-content">
            {/* Routes principales et des routes imbriquées */}
            <Routes>
                {/* Route pour la page d'accueil */}
                <Route path="/" element={<Home />} />

                {/* Route pour la page À propos */}
                <Route path="/about" element={<About />} />

                {/* Route imbriquée pour les logements */}
                <Route path="/place">
                    <Route path=":id" element={<Place />} />
                </Route>

                <Route path="*" element={<NotFound />} />

            </Routes>
        </div>
    );
}


