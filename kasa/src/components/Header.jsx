// Import Style
import "../styles/Header.css";

// Import Assets
import logo from "../assets/logo.svg";

// Export component
export default Header;


function Header() {
    return (
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <Nav />
        </header>
    );
};

function Nav() {
    return (
        <nav>
            <ul className="Nav-items">
                <li><a href="#">Accueil</a></li>
                <li><a href="#">À Propos</a></li>
            </ul>
        </nav>
    );
};