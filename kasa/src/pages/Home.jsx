// Import components
import TopBannerImage from "../components/TopBannerImage";
import ItemCard from "../components/ItemCard";

// Import Style 
import "../styles/Home.scss"

// Import Datas
import logements from "../datas/logements.json";

export default Home;

function Home() {
    return (
        <Main />
    )
};

function Main() {
    return (
        <main className="Home-main">
            <TopBannerImage />
            <SectionCatalog />
        </main>
    );
};



function SectionCatalog() {
    return (
        <section className="Home-catalog">
            {/* Boucle sur chaque logement dans le tableau logements */}
            {logements.map((logement) => (
                <ItemCard key={logement.id} logement={logement} />
            ))}
        </section>
    );
};


//! Voir pour utiliser UseState pour la gestion des données
//! Nécessaire pour le carousel
// function TestDatas() {
//     return (
//         <ul>
//             {testDatas.map((logement) => (
//                 <li>
//                     <div>
//                         <img src={logement.cover} alt={logement.description} className="Img-item-card"></img>
//                         <h2>{logement.title}</h2>
//                     </div>
//                 </li>
//             ))}
//         </ul>
//     );
// };