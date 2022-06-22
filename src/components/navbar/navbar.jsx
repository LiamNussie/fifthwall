import "./navbar.scss";
import Logo from './logo.svg';
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Hamburger from "../hamburger/hamburger";
import SideBar from "../sidebar/sidebar";

const Navbar = () => {
    const [colorChange, setColorChange] = useState(false);
    const [navOpen, setNavOpen] = useState(false);

    const changeBackground = () => {
            // console.log(window.scrollY)
            if (window.scrollY >= 66) {
            setColorChange(true)
            } else {
            setColorChange(false)
            }
        }
    useEffect(() => {
        changeBackground()
        // adding the event when scroll change Logo
        window.addEventListener("scroll", changeBackground)
      })

    

    return (
        <div className="navbar" id={colorChange ? "bg" : null}>
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
            <Hamburger active={navOpen} setActive={setNavOpen} />
            {navOpen && <SideBar />}
        </div>
    )
}

export default Navbar;