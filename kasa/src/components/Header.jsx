// Import Style
import "../styles/Header.css";

// Import Assets
import logo from "../assets/logo.svg";

// Import components
import Nav from "./Nav";

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