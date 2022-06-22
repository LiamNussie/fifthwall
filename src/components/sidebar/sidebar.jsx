import "./sidebar.scss";
import Logo from "../navbar2/logo.svg";
import { Link } from "react-router-dom";

const SideBar = () => {
    return (
        <div className="side-bar">
            <div className="wrapper">
                <div className="side">
                <Link to="/"><img src={Logo} alt="fifthway logo" /></Link>
                     <ul className="linksx">
                        <Link style={{textDecoration: "none"}} to="/about"><li>About</li></Link>
                        <Link style={{textDecoration: "none"}} to="/expertise"><li>Expertise</li></Link>
                        <Link style={{textDecoration: "none"}} to="/services"><li>Services</li></Link>
                        <Link style={{textDecoration: "none"}} to="/projects"><li>Projects</li></Link>
                        <Link style={{textDecoration: "none"}} to="/media"><li>Media</li></Link>
                        <Link style={{textDecoration: "none"}} to="/careers"><li>Careers</li></Link>
                        <Link style={{textDecoration: "none"}} to="/contact"><li>Contact</li></Link>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default SideBar;