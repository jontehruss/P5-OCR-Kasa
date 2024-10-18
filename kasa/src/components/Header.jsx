// Import Style
import "../styles/Header.scss";

// Import Assets
import logo from "../assets/logo.svg";

// Export component
export default Header;


function Header() {
    return (
        <header className="App-header">
            <a href="/">
              <img src={logo} className="App-logo" alt="logo" />  
            </a>
            
            <Nav />
        </header>
    );
};

function Nav() {
    return (
        <nav>
            <ul className="Nav-items">
                <li><a href="/">Accueil</a></li>
                <li><a href="/about">À Propos</a></li>
            </ul>
        </nav>
    );
};