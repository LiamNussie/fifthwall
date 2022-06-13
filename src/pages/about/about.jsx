import Footer from "../../components/footer/footer";
import Navbar2 from "../../components/navbar2/navbar2";
import "./about.scss";
import Blacksec from "./blacksec/blacksec";
import Clients from "./clients/clients";

const About = () => {
    return (
        <div className="about">
            <Navbar2 />
            <div data-aos="fade" className="sec1">
                <p className="title">Imagination Empowered.</p>
                <div className="cont">
                    <p className="para">Fifthwall is a full service, integrated design and marketing agency committed to creating value and sustainable growth for the property sector. Guided by research and strategic thinking, we build iconic brands and shape memorable experiences that deliver significant impact within the built environment.</p>
                </div>
            </div>
            <div data-aos="fade-up" className="bg1"></div>
            <div data-aos="fade-up" className="sec2">
                <div className="wrap">
                    <p className="title">Our Mission</p>
                    <p className="title">Better brands for the Built Environment.</p>
                    <div className="cont">
                        <p className="para">Fifthwall exists to help bridge the gap between brand and place; to deliver spaces and experiences that feel well-thought-out across every expression. We simply create better, more formidable, profitable and powerful brands for the built environment. </p>
                    </div>
                </div>
            </div>
            <div className="bg2-wrap">
                <div data-aos="fade-up" className="bg2"></div>
            </div>
            <div data-aos="fade-up" className="sec1 nx">
                    <p className="title">Our Vision</p>
                    <p className="title">Impactful Experiences, Stronger Communities.</p>
                    <div className="cont">
                        <p className="para">We want to create delightfully unique brand experiences for the property sector that positively influence their economic value and the quality of life for the people and communities who occupy these spaces. </p>
                    </div>
            </div>
            <div className="bg3-wrap">
                <div data-aos="fade-up" className="bg3"></div>
            </div>
            <div data-aos="fade-up" className="sec2">
                <div className="wrap">
                    <p className="title">Our Approach</p>
                    <p className="title">Experience Mapping </p>
                    <div className="cont">
                        <p className="para">We start by understanding your goals, analysing the brief to explore all possibilities. We then craft ideas and develop them into solutions. This approach enables us to reverse engineer creative solutions in a methodical yet organic way. </p>
                    </div>
                </div>
            </div>
            <Blacksec />
            <Clients />
            <Footer />
        </div>
    )
}

export default About;