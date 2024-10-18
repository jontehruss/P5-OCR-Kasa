// Import Style
import "../styles/ItemCard.css";

// Outil de gestion/création de liens
import { Link } from 'react-router-dom';

// Export component
// Recevoir un seul logement en prop
export default function ItemCard({ logement }) { 
  // console.log(logement)
  return (
    <div className="Item-card">
      {/* Utilisation de Link pour générer un lien dynamique vers le logement */}
      <Link to={`/place/${logement.id}`}>
        <h2>{logement.title}</h2>
        <img src={logement.cover} alt={logement.title} />
      </Link>
    </div>
  );
 };