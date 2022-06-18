import "./navbar2.scss";
import Logo from './logo.svg';
import { NavLink } from "react-router-dom";

const Navbar2 = () => {

    return (
        <div className="navbar2">
            <NavLink to="/"><img src={Logo} alt="fifthway logo" /></NavLink>
            <ul className="links">
                <NavLink style={{textDecoration: "none"}} to="/about"><li>About</li></NavLink>
                <NavLink style={{textDecoration: "none"}} to="/expertise"><li>Expertise</li></NavLink>
                <NavLink style={{textDecoration: "none"}} to="/services"><li>Services</li></NavLink>
                <NavLink style={{textDecoration: "none"}} to="/projects"><li>Projects</li></NavLink>
                <NavLink style={{textDecoration: "none"}} to="/media"><li>Media</li></NavLink>
                <NavLink style={{textDecoration: "none"}} to="/careers"><li>Careers</li></NavLink>
                <NavLink style={{textDecoration: "none"}} to="/contact"><li>Contact</li></NavLink>
            </ul>
        </div>
    )
}

export default Navbar2;