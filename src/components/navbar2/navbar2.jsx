import "./navbar2.scss";
import Logo from './logo.svg';
import { NavLink } from "react-router-dom";
import HamburgerB from "../hamburgerblack/hamburgerblack";
import { useEffect, useState } from "react";
import SideBar from "../sidebar/sidebar";

const Navbar2 = () => {
    const [navOpen, setNavOpen] = useState(false);
    const [colorChange, setColorChange] = useState(false);

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
        <div className="navbar2" id={colorChange ? "bg" : null}>
            <NavLink to="/"><img src={Logo} alt="fifthway logo" /></NavLink>
            <ul className="links">
                <NavLink style={{textDecoration: "none"}} to="/about"><li>About<span>.</span></li></NavLink>
                <NavLink style={{textDecoration: "none"}} to="/expertise"><li>Expertise<span>.</span></li></NavLink>
                <NavLink style={{textDecoration: "none"}} to="/services"><li>Services<span>.</span></li></NavLink>
                <NavLink style={{textDecoration: "none"}} to="/projects"><li>Projects<span>.</span></li></NavLink>
                <NavLink style={{textDecoration: "none"}} to="/media"><li>Media<span>.</span></li></NavLink>
                <NavLink style={{textDecoration: "none"}} to="/careers"><li>Careers<span>.</span></li></NavLink>
                <NavLink style={{textDecoration: "none"}} to="/contact"><li>Contact<span>.</span></li></NavLink>
            </ul>
            <HamburgerB active={navOpen} setActive={setNavOpen} />
            {navOpen && <SideBar />}
        </div>
    )
}

export default Navbar2;