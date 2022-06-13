import "./navbar.scss";
import Logo from './logo.svg';
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="navbar">
            <Link to="/"><img src={Logo} alt="fifthway logo" /></Link>
            <ul className="links">
                <Link style={{textDecoration: "none"}} to="/about"><li>About</li></Link>
                <Link style={{textDecoration: "none"}} to="/expertise"><li>Expertise</li></Link>
                <Link style={{textDecoration: "none"}} to="/services"><li>Services</li></Link>
                <Link style={{textDecoration: "none"}} to="/projects"><li>Projects</li></Link>
                <Link style={{textDecoration: "none"}} to="/media"><li>Media</li></Link>
                <Link style={{textDecoration: "none"}} to="/careers"><li>Careers</li></Link>
                <Link style={{textDecoration: "none"}} to="/contact"><li>Contact</li></Link>
            </ul>
        </div>
    )
}

export default Navbar;