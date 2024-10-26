// Import Style
import "../styles/Header.css";

// Import Assets
import logo from "../assets/logo.svg";

// Import components
import Image from "./Image";
import Nav from "./Nav";

// Export component
export default function Header() {
    return (
        <header className="App-header">
            <a href="/">
                <Image 
                    src={logo} 
                    alt="kasa-app-logo" 
                    className="App-logo" />
            </a>
            <Nav />
        </header>
    );
};