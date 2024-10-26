// Import components
import ItemCard from "../components/ItemCard";

// Import Datas
import logements from "../datas/logements.json";

// Import Style
import "../styles/Catalog.css"

export default function SectionCatalog() {
    return (
        <section className="Home-catalog">
            {/* Boucle sur chaque logement dans le tableau logements */}
            {logements.map((logement) => (
                <ItemCard key={logement.id} logement={logement} />
            ))}
        </section>
    );
};