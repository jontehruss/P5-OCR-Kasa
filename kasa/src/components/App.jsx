// Import pour gestion des routes (client-side)
import * as React from "react";

// Import components
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

// Import Pages
import Home from "../pages/Home.jsx"
import About from "../pages/About.jsx"

// Import Style
import "../styles/App.css"; //! il faudra appeller le fichier sass 
import Place from "../pages/Place.jsx";



function App() {
  return (
    <div className="App">
      {/* <h1>Hey from App component</h1> */}
      
      <Header />

      {/*  ! Voir comment injecter les composants via les routes à cet endroit */}

      <Home />

      <About />

      <Place />

      <Footer />
    </div>
  );
};


export default App;
