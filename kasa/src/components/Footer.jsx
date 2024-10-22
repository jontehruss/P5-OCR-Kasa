// Import Style
import "../styles/Footer.css"

// Import Assets
import logoFooter from "../assets/logo-footer.svg";

// Export component
export default Footer;

function Footer() {
    return (
      <footer className="App-footer">
        <img src={logoFooter} className="Footer-logo" alt="logo" />
        <p><a href="/ezifhzrjighqe">© 2020 Kasa. All rights reserved</a></p>
      </footer>
    );
  };