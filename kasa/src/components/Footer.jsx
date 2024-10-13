// Import Style
import "../styles/Footer.scss"

// Import Assets
import logoFooter from "../assets/logo-footer.svg";

// Export component
export default Footer;

function Footer() {
    return (
      <footer className="App-footer">
        <img src={logoFooter} className="Footer-logo" alt="logo" />
        <p>© 2020 Kasa. All rights reserved</p>
      </footer>
    );
  };