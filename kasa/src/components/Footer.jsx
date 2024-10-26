// Import Style
import "../styles/Footer.css"

// Import Assets
import logoFooter from "../assets/logo-footer.svg";

// Import Component
import Image from "./Image";

// Export component
export default function Footer() {
    return (
      <footer className="App-footer">

        <a href="/">
            <Image 
                src={logoFooter} 
                alt="kasa-app-footer-logo" 
                className="Footer-logo" />
        </a>

        <p>
          <a href="/ezifhzrjighqe">© 2020 Kasa. All rights reserved</a>
        </p>

      </footer>
    );
  };