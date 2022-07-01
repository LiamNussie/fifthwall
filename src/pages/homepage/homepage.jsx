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

            <div className="video-holder">
                 <video autoPlay loop src={Vid}></video>

                 <div className="arrow">
                    <img onClick={() => window.scrollTo({ left: 0, top: document.body.scrollHeight/7, behavior: "smooth" })} src="https://theseventhart.com/images/photo10.svg" alt="bounce_arrow" />
                    {/* <svg onClick={() => window.scrollTo({ left: 0, top: document.body.scrollHeight/6, behavior: "smooth" })} width="26" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M0.645978 0.645978C0.692424 0.599415 0.7476 0.562472 0.808345 0.537265C0.86909 0.512059 0.934211 0.499084 0.999978 0.499084C1.06575 0.499084 1.13087 0.512059 1.19161 0.537265C1.25236 0.562472 1.30753 0.599415 1.35398 0.645978L6.99998 6.29298L12.646 0.645978C12.6925 0.59949 12.7477 0.562614 12.8084 0.537455C12.8691 0.512296 12.9342 0.499346 13 0.499346C13.0657 0.499346 13.1308 0.512296 13.1916 0.537455C13.2523 0.562614 13.3075 0.59949 13.354 0.645978C13.4005 0.692466 13.4373 0.747655 13.4625 0.808394C13.4877 0.869134 13.5006 0.934234 13.5006 0.999978C13.5006 1.06572 13.4877 1.13082 13.4625 1.19156C13.4373 1.2523 13.4005 1.30749 13.354 1.35398L7.35398 7.35398C7.30753 7.40054 7.25236 7.43748 7.19161 7.46269C7.13087 7.4879 7.06575 7.50087 6.99998 7.50087C6.93421 7.50087 6.86909 7.4879 6.80834 7.46269C6.7476 7.43748 6.69242 7.40054 6.64598 7.35398L0.645978 1.35398C0.599415 1.30753 0.562472 1.25236 0.537266 1.19161C0.512059 1.13087 0.499084 1.06575 0.499084 0.999978C0.499084 0.934211 0.512059 0.86909 0.537266 0.808344C0.562472 0.747599 0.599415 0.692424 0.645978 0.645978Z" fill="white"/>
                    </svg> */}
                 </div>
                

                {/* <iframe src="https://player.vimeo.com/video/722566255?background=1&autoplay=1&;title=0&;byline=0&;portrait=0&;loop=1&;autopause=0&;muted=1&showinfo=0" width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe> */}
            </div>
           

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
            <div className="ban" alt=""></div>
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