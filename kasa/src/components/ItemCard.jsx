// Import Style
import "../styles/ItemCard.css";

// Import Assets
// import logo from "../assets/logo.svg";

// Export component
export default ItemCard;


function ItemCard() {
    return (
      <div className="Item-card">
        <picture>
          <span>Titre de la location</span>
        </picture>
      </div>
    );
  }