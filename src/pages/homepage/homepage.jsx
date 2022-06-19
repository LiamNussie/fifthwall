import { Link } from "react-router-dom";
import Footer from "../../components/footer/footer";
import Navbar from "../../components/navbar/navbar";
import "./homepage.scss";
import Info from "./info/info";
import Projects from "./projects/projects";
import Vid from "./hero.mp4";

const Homepage = () => {
    return (
        <div className="homepage">
            <Navbar />
            {/* <div className="hero">
                <Navbar />
                <div className="cont">
                    <video autoPlay loop src={Vid}></video>
                    <div className="overlay"></div>
                    <p className="para">Fifthwall is a full service, integrated design and marketing agency, based in Lagos, committed to creating value and sustainable growth for the property sector. </p>
                </div>
            </div> */}
            <video autoPlay loop src={Vid}></video>
            {/* <p className="paray">Fifthwall is a full service, integrated design and marketing agency, based in Lagos, committed to creating value and sustainable growth for the property sector. </p> */}
            <Info />
            
            <Projects text="Featured Projects" showNav={false} view="home" />
            <div data-aos="fade-up" className="experh">
                <p className="titleh">Our Expertise</p>
                <div className="conth">
                    <p className="toph">Shaping the brands that build our future.</p>
                    <p className="parah">Fifthwall, has a vast degree of experience across several disciplines which keep our ideas fresh and our thinking ahead of its time. Working with real estate developers, agents, architects, property specialist and industry stakeholders; we help shape concepts through strategic storytelling, engaging visuals and innovative technologies that leave a lasting impression. </p>
                    <Link to="/expertise" style={{textDecoration: "none", color: "#fff"}}><p className="more">Learn More</p></Link>
                </div>
            </div>
            <img className="ban" src="https://res.cloudinary.com/giftguy/image/upload/v1655561130/q1_xv8ofg.png" alt="" />
            {/* <div className="banner" style={{backgroundImage: "url(https://res.cloudinary.com/giftguy/image/upload/v1655561130/q1_xv8ofg.png)"}}></div> */}
            <div data-aos="fade-up" className="about">
                <p className="titlem">A Multidisciplinary Approach</p>
                <div className="cont">
                    <p className="para">Fifthwall is a blend of creative thinkers, strategists and artists who thrive on collaborative relationships. Our multidisciplinary nature and comprehensive suite of specialised integrated services makes us a model partner for our clients.</p>
                    <p className="para">Our people work to position each project in the most desirable, refined, and elevated way possible, as a result transforming them into some of the most distinctive properties and products to market.</p>
                    <Link to="/about" style={{textDecoration: "none", color: "#000"}}><p className="more">Learn More</p></Link>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Homepage;