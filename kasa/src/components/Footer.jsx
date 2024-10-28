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

      <p>© 2020 Kasa. All <span className="Mobile-break">rights reserved</span></p>

    </footer>
  );
};