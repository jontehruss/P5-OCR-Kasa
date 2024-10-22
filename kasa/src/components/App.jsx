// Import pour gestion des routes (client-side)
import * as React from "react";
import { Routes, Route } from 'react-router-dom';

// Import components
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import NotFound from "./NotFound.jsx";

// Import Pages
import Home from "../pages/Home.jsx"
import About from "../pages/About.jsx"
// import Place from '../pages/Place';

// Import Style
import "../styles/App.css"; //! il faudra appeller le fichier sass 
import Place from "../pages/Place.jsx";

function App() {

  return (
    <div className="App">
      <Header />

      <div className="App-content">
        {/* Routes principales et des routes imbriquées */}
        <Routes>
          {/* Route pour la page d'accueil */}
          <Route path="/" element={<Home />} />

          {/* Route pour la page À propos */}
          <Route path="/about" element={<About />} />

          {/* Nested route pour les places */}
          <Route path="/place">
            <Route path=":id" element={<Place />} />
          </Route>

          <Route path="*" element={<NotFound />} />


        </Routes>
      </div>
      <Footer />
    </div>
  );
}



export default App;
