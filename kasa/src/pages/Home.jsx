// Import components
import TopBannerImage from "../components/TopBannerImage";
import ItemCard from "../components/ItemCard";

// Import Style 
import "../styles/Home.css"

// Import Datas
import testDatas from "../datas/logements.json"

export default Home;

function Home() {
    return (
        <Main />
    )
}

function Main() {
    return (
        <main className="App-main">
            <TopBannerImage />
            <SectionCatalog />
        </main>
    );
};



function SectionCatalog() {
    return (
        <section className="App-catalog">
            {/* <TestDatas /> */}
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
        </section>
    );
};

console.log(testDatas);
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