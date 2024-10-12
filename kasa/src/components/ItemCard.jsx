// Import Style
import "../styles/ItemCard.css";

// Import Assets
// import logo from "../assets/logo.svg";

// Import Datas
import logements from "../datas/logements.json"

// Outil de gestion/création de liens
import { Link } from 'react-router-dom';

// Export component
export default ItemCard;


function ItemCard() {

  return (

    //!  Voir bug boucle !

    <div className="Item-div">

      {/* Boucle sur chaque logement dans le tableau logements */}
      {logements.map((logement) => (
        <div key={logement.id} className="Item">
          {/* Utilisation de Link pour générer des liens dynamiques vers chaque place */}
          <Link to={`/place/${logement.id}`}>
            <h2>{logement.title}</h2>
            <img src={logement.cover} alt={logement.title} />
          </Link>
        </div>
      ))}
    </div>
  );
}


// function ItemCard({ logement }) {
//   return (
//     <div className="Item-card">
//       <a href="/place/1">
//         <picture>
//           <span>Titre de la location</span>
//         </picture>
//       </a>
//     </div>
//   );
// };