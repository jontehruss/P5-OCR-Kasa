// Import pour gestion des routes (client-side)
import * as React from "react";

// Import components
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

//  Import des routes client/side
import AppRouting from "../routes/AppRouting.jsx";

// Import Style
import "../styles/App.css";


export default function App() {

  return (
    <div className="App">
      <Header />

      <AppRouting />

      <Footer />
    </div>
  );
};