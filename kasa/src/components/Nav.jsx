import { NavLink } from "react-router-dom";
import "../styles/Nav.scss"


export default function Nav() {
    return (
        <nav>
            <ul className="Nav-items">
                <li>
                    <NavLink 
                        to="/" 
                        className={({ isActive }) => (
                            isActive ? 'Active-link' : ''
                            )}
                    >
                        Accueil
                    </NavLink>
                    {/* <a href="/">Accueil</a> */}
                </li>
                <li>
                <NavLink 
                        to="/about" 
                        className={({ isActive }) => (
                            isActive ? 'Active-link' : ''
                            )}
                    >
                        À Propos
                    </NavLink>
                    {/* <a href="/about">À Propos</a> */}
                </li>
            </ul>
        </nav>
    );
};