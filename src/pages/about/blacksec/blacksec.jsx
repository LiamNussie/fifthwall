import "./blacksec.scss";
import Collab from "./collab.gif";
import Disc from "./discovery.GIF";
import Prod from "./production.gif";

const Blacksec = () => {
    return (
        <div className="blacksec">
            <div className="secx">
                <div className="wrap">
                    <h1 className="num">01</h1>
                    <p className="titlet">Discovery & Strategy</p>
                    <p className="para">First things first — we need to get familiar. We assess your vision, goals and market with exercises that provide insight and help us develop a strategy that best positions your brand and project.</p>
                </div>
                <img src={Disc} alt="collab" />
            </div>
            <div className="secxx">
                    <img src={Collab} alt="collab" />
                <div className="wrap">
                    <h1 className="num">02</h1>
                    <p className="titlet">Collaboration, Exploration, & Design</p>
                    <p className="para">We conduct a series of collaborative creative meetings with you to work towards an overall creative design, tone and aesthetic for your project.</p>
                </div>
            </div>
            <div className="secxxx">
                <div className="wrap">
                    <h1 className="num">03</h1>
                    <p className="titlet">Production & Delivery</p>
                    <p className="para">To ensure timelines and budgets met, we handle the final production of your project. All assets and printed materials will be delivered to you as they are completed.</p>
                </div>
                <img src={Prod} alt="collab" />
            </div>
        </div>
    )
}

export default Blacksec;